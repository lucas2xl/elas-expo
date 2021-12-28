import AsyncStorage from '@react-native-async-storage/async-storage';
import { ISignIn } from '../screens/SignIn';

export const localStorage = {
  authenticate: {
    async save({ email, password }: ISignIn) {
      const jsonValue = JSON.stringify({ email, password });
      await AsyncStorage.setItem('@Elas-authenticate', jsonValue);
    },

    async get(): Promise<ISignIn | null> {
      const value = await AsyncStorage.getItem('@Elas-authenticate');
      if (!value) return null;

      const objectRes = JSON.parse(value);
      return objectRes;
    },

    async remove() {
      await AsyncStorage.setItem('@Elas-authenticate', '');
    },
  },

  tutorial: {
    async save(isWatchTutorial: boolean) {
      const jsonValue = JSON.stringify({ isWatchTutorial });
      await AsyncStorage.setItem('@Elas-tutorial', jsonValue);
    },

    async get(): Promise<ISignIn | null> {
      const value = await AsyncStorage.getItem('@Elas-tutorial');
      if (!value) return null;

      const objectRes = JSON.parse(value);
      return objectRes;
    },

    async remove() {
      await AsyncStorage.setItem('@Elas-tutorial', '');
    },
  },
};
