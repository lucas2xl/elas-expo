import React from 'react';
import { Container, Icon, ContainerFooter, Text } from './styled';
import { useNavigation, CommonActions } from '@react-navigation/core';

import { Colors } from '../../styles/Colors';
import Button from '../../components/Button';

const Main = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Icon source={require('../../assets/images/Logo.png')} />
      <ContainerFooter>
        <Text>Te deixando segura em todos os momentos!</Text>
        <Button
          color={Colors.primary}
          onPress={() =>
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [{ name: 'SignInSignUp' }],
              }),
            )
          }
          text={'INICIAR'}
          loading={false}
        />
      </ContainerFooter>
    </Container>
  );
};

export default Main;
