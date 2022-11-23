import React, { useContext, useEffect } from 'react';
import {
  Container,
  ContainerIcon,
  Icon,
  ContainerCenter,
  SignInButton,
  SignInText,
  SignUpButton,
  SignUpText,
} from './styled';
import { useNavigation, CommonActions } from '@react-navigation/core';

import * as LocalAuthentication from 'expo-local-authentication';
import { localStorage } from '../../utils/localStorage';
import { AuthContext } from '../../context/Auth';

const SignInSignUp = () => {
  const navigation = useNavigation();
  const { signIn } = useContext(AuthContext);

  useEffect(() => {
    authentication();
  }, []);

  const authentication = async () => {
    try {
      const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
      if (!savedBiometrics) return;

      const hasAuthenticateOnStorage = await localStorage.authenticate.get();
      if (!hasAuthenticateOnStorage) return;

      const isAuthenticate = await LocalAuthentication.authenticateAsync();
      if (!isAuthenticate.success) return;

      const { email, password } = hasAuthenticateOnStorage;
      await signIn({ email, password });
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: 'Home' }],
        }),
      );
    } catch (error) {}
  };

  return (
    <>
      <Container>
        <ContainerIcon>
          <Icon source={require('../../assets/images/Logo.png')} />
        </ContainerIcon>

        <ContainerCenter>
          <SignInButton onPress={() => navigation.navigate('SignIn')}>
            <SignInText>Conecte-se</SignInText>
          </SignInButton>
          <SignUpButton onPress={() => navigation.navigate('SignUp')}>
            <SignUpText>Cadastre-se</SignUpText>
          </SignUpButton>
        </ContainerCenter>
      </Container>
    </>
  );
};

export default SignInSignUp;
