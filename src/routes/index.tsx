import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../screens/Main';
import Home from '../screens/Home';
import SignInSignUp from '../screens/SignInSignUp';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import CompleteSignUp from '../screens/CompleteSignUp';
import EmergencyContacts from '../screens/EmergencyContacts';
import Menu from '../screens/Menu';
import TutorialOne from '../screens/TutorialOne';

import { Feather } from '@expo/vector-icons';
import Colors from '../styles/Colors';
import Fonts from '../styles/Fonts';

interface RoutesProps {}

const Stack = createStackNavigator();

export const Routes: React.FC<RoutesProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ header: () => false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ header: () => false }}
        />
        <Stack.Screen
          name="SignInSignUp"
          component={SignInSignUp}
          options={{
            title: '',
            headerTransparent: true,
            headerTintColor: Colors.black,
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            title: '',
            headerTransparent: true,
            headerTintColor: 'transparent',
            // headerBackImage: () => <Feather name={'x'} size={30} />,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            title: '',
            headerTransparent: true,
            headerTintColor: 'transparent',
            // headerBackImage: () => <Feather name={'x'} size={30} />,
          }}
        />
        <Stack.Screen
          name="CompleteSignUp"
          component={CompleteSignUp}
          options={{
            // title: 'Conclua seu cadastro',
            headerTransparent: true,
            headerTitleAlign: 'center',
            headerTintColor: 'transparent',
            headerTitleStyle: {
              fontSize: 16,
              fontFamily: `${Fonts.bold}`,
            },
            // headerBackImage: () => <Feather name={'x'} size={30} />,
          }}
        />
        <Stack.Screen
          name="EmergencyContacts"
          component={EmergencyContacts}
          options={{
            // title: 'Contatos de emergência',
            headerTintColor: 'transparent',
            headerTransparent: true,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 16,
              fontFamily: `${Fonts.bold}`,
            },
            // headerBackImage: () => <Feather name={'x'} size={30} />,
          }}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{
            title: 'Menu principal',
            headerTintColor: Colors.primary,
            headerTransparent: true,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 16,
              fontFamily: `${Fonts.bold}`,
            },
          }}
        />
        <Stack.Screen
          name="TutorialOne"
          component={TutorialOne}
          options={{ title: '', headerTransparent: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
