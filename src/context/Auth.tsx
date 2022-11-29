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
  cpf: number | string;
  gender: string;
  phone: number | string;
  cep: number | string;
  address: string;
  complement: string;
  role?: number;
}

export interface IUserSignIn {
  email: string;
  password: string;
}

export interface ICode {
  value: string;
  id: string;
}

export interface IGenerateCodeResponse {
  code: ICode;
}

export interface IRecoverResponse {
  user_id: string;
}

export interface IRecoverPasswordRequest {
  email: string;
  newPassword: string;
  code: ICode;
}

export interface ICheckCodeResponse {
  token: string;
  code: ICode;
}

interface IAuthContextData {
  user: IUser | null;
  signOut: () => void;
  signIn: ({ email, password }: IUserSignIn) => Promise<void>;
  signUp: (data: IUser) => Promise<IUser>;
  generateCodeForRecoverPassword: (email: string) => Promise<string>;
  checkCode: (email: string, code: string) => Promise<ICode>;
  recoverPassword: ({
    code,
    email,
    newPassword,
  }: IRecoverPasswordRequest) => Promise<IRecoverResponse>;
}

interface IAuthResponse {
  token: string;
  user: IUser;
}

export const AuthContext = createContext({} as IAuthContextData);

const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const token = await AsyncStorage.getItem('@elas-app:token');
    const user_id = await AsyncStorage.getItem('@elas-app:id');

    if (token && user_id) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      api.get(`/users/${user_id}`).then((res) => {
        setUser(res.data);
      });
    }
  };
  const signOut = async () => {
    await AsyncStorage.removeItem('@elas-app:token');
    await AsyncStorage.removeItem('@elas-app:id');
    api.defaults.headers.common.authorization = `Bearer ${''}`;
    setUser(null);
  };

  const signIn = async ({ email, password }: IUserSignIn) => {
    const res = await api.post<IAuthResponse>('/login', {
      email,
      password,
    });

    const { token, user } = res.data;

    await AsyncStorage.setItem('@elas-app:token', token);
    await AsyncStorage.setItem('@elas-app:id', user?.id!);

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    setUser(user);
  };

  const signUp = async (data: IUser) => {
    const res = await api.post<IAuthResponse>('/users', {
      ...data,
    });
    console.log(res);
    const { user } = res.data;

    return user;
  };

  const generateCodeForRecoverPassword = async (email: string) => {
    const res = await api.post<string>('/user/request-password', {
      email,
    });
    const result = res.data;

    return result;
  };

  const checkCode = async (email: string, code: string) => {
    const res = await api.post<ICheckCodeResponse>('/user/check-code', {
      email,
      code,
    });
    const { code: userCode, token } = res.data;

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    return userCode;
  };

  const recoverPassword = async (data: IRecoverPasswordRequest) => {
    const res = await api.post<IRecoverResponse>('/user/recover-password', {
      ...data,
    });

    api.defaults.headers.common.authorization = `Bearer ${''}`;
    const user_id = res.data;

    return user_id;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signOut,
        signIn,
        signUp,
        generateCodeForRecoverPassword,
        checkCode,
        recoverPassword,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
