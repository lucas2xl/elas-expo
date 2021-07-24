import React from 'react';
import { Container, Icon, ContainerFooter, Text } from './styled';
import { useNavigation } from '@react-navigation/core';

import Colors from '../../styles/Colors';
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
          onPress={() => navigation.navigate('SignInSignUp')}
          text={'INICIAR'}
        />
      </ContainerFooter>
    </Container>
  );
};

export default Main;
