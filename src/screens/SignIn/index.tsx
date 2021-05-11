import React, { useState } from 'react';
import { Container, ContainerInputs } from './styled';

import HeaderInformation from '../../components/HeaderInformation';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { CommonActions } from '@react-navigation/native';

interface ISignIn {
  email: string;
  password: string;
}
const Login = ({ navigation }: any) => {
  const [userLogin, setUserLogin] = useState<ISignIn>({
    email: '',
    password: '',
  });

  const [isSecure, setSecure] = useState(false);

  return (
    <Container behavior="height" enabled>
      <HeaderInformation
        title={'Entrar'}
        subtitle={
          'É recomendado conectar seu endereço de e-mail para que possamosproteger melhor suas informações'
        }
      />
      <ContainerInputs showsVerticalScrollIndicator={false}>
        <Input
          title={'E-mail'}
          value={userLogin.email}
          onChangeText={(text: string) =>
            setUserLogin({ ...userLogin, email: text })
          }
          keyboardType={'email-address'}
        />
        <Input
          title={'Senha'}
          value={userLogin.password}
          onChangeText={(text: string) =>
            setUserLogin({ ...userLogin, password: text })
          }
          secureTextEntry={isSecure ? false : true}
          isIcon={true}
          iconName={isSecure ? 'eye-off' : 'eye'}
          onPress={() => setSecure(!isSecure)}
        />

        <Button
          text={'Entrar'}
          onPress={() =>
            navigation.dispatch(
              CommonActions.reset({ index: 1, routes: [{ name: 'Home' }] }),
            )
          }
        />
      </ContainerInputs>
    </Container>
  );
};

export default Login;
