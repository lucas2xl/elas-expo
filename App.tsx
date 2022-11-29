import React from 'react';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { Routes } from './src/routes';
import { StatusBar } from 'expo-status-bar';
import { useThemeStore } from './src/store/theme';

const App = () => {
  const theme = useThemeStore((state) => state.theme);
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar
        style={theme === 'ciclo' ? 'dark' : 'light'}
        translucent
        backgroundColor="transparent"
      />
      <Routes />
    </>
  );
};

export default App;
