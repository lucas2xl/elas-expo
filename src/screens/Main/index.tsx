import React, { useLayoutEffect } from 'react';
import { Container, Icon, ContainerFooter, Text } from './styled';
import { useNavigation, CommonActions } from '@react-navigation/core';

import { Colors } from '../../styles/Colors';
import { localStorage } from '../../utils/localStorage';
import { Button } from '../../components/Button';

const Main = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    (async () => {
      const isWatchTutorial = await localStorage.tutorial.get();
      if (isWatchTutorial) {
        goSignInSignUpScreen();
      }
    })();
  }, []);

  const goSignInSignUpScreen = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: 'SignInSignUp' }],
      }),
    );
  };

  return (
    <Container>
      <Icon source={require('../../assets/images/Logo.png')} />
      <ContainerFooter>
        <Text>Te deixando segura em todos os momentos!</Text>
        <Button
          color={Colors.primary}
          onPress={() => {
            localStorage.tutorial.save(true);
            goSignInSignUpScreen();
          }}
          text={'Iniciar'}
        />
      </ContainerFooter>
    </Container>
  );
};

export default Main;
