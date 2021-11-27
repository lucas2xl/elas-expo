import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { api } from '../services';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IAuthProvider {
  children: ReactNode;
}

export interface IUser {
  id?: string;
  full_name: string;
  social_name: string;
  password: string;
  email: string;
  cpf: number;
  gender: string;
  phone: number;
  cep: number;
  address: string;
  complement: string;
  role?: number;
}

export type IUserResponse = Pick<IUser, 'id' | 'social_name'>;

export interface IUserSignIn {
  email: string;
  password: string;
}

interface IAuthContextData {
  user: IUserResponse | null;
  signOut: () => void;
  signIn: ({ email, password }: IUserSignIn) => Promise<void>;
  signUp: (data: IUser) => Promise<IUserResponse>;
}

interface IAuthResponse {
  token: string;
  user: {
    id: string;
    social_name: string;
  };
}

export const AuthContext = createContext({} as IAuthContextData);

const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUserResponse | null>(null);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const token = await AsyncStorage.getItem('@elas-app:token');
    const user_id = await AsyncStorage.getItem('@elas-app:id');

    if (token && user_id) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      api.get(`/users/${user_id}`).then((res) => {
        console.log(res);
        setUser(res.data);
      });
    }
  };
  const signOut = async () => {
    await AsyncStorage.removeItem('@elas-app:token');
    await AsyncStorage.removeItem('@elas-app:id');
    setUser(null);
  };

  const signIn = async ({ email, password }: IUserSignIn) => {
    const res = await api.post<IAuthResponse>('/login', {
      email,
      password,
    });

    const { token, user } = res.data;

    await AsyncStorage.setItem('@elas-app:token', token);
    await AsyncStorage.setItem('@elas-app:id', user.id);

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    setUser(user);
  };

  const signUp = async (data: IUser) => {
    const res = await api.post<IAuthResponse>('/users', {
      ...data,
    });
    const { user } = res.data;

    return user;
  };

  return (
    <AuthContext.Provider value={{ user, signOut, signIn, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
