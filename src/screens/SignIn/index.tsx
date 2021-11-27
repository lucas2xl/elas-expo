import React, { useContext, useState } from 'react';
import { Container, ContainerInputs } from './styled';
import { CommonActions, useNavigation } from '@react-navigation/native';

import HeaderInformation from '../../components/HeaderInformation';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { AuthContext } from '../../context/Auth';
import { TextError } from '../SignUp/styled';

interface ISignIn {
  email: string;
  password: string;
}
const Login = () => {
  const navigation = useNavigation();
  const { signIn } = useContext(AuthContext);
  const [userLogin, setUserLogin] = useState<ISignIn>({
    email: '',
    password: '',
  });
  const [isError, serIsError] = useState({
    is: false,
    message: '',
  });

  const [isSecure, setSecure] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    serIsError({
      is: false,
      message: '',
    });

    if (!userLogin.email || !userLogin.password) {
      return serIsError({
        is: true,
        message: 'Todos os campos devem ser preenchidos',
      });
    }

    try {
      setLoading(true);
      await signIn({ email: userLogin.email, password: userLogin.password });
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: 'Home' }],
        }),
      );
    } catch (error: any) {
      console.log(error.message);
      if (error.message.includes('401')) {
        return serIsError({
          is: true,
          message: 'Email ou senha inválida',
        });
      }
      serIsError({
        is: true,
        message: 'Problema na conecxão',
      });
    } finally {
      setLoading(false);
    }
  };

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
          isSecret={isSecure}
          onPress={() => setSecure(!isSecure)}
        />

        {isError.is && <TextError>{isError.message}</TextError>}
        <Button text={'Entrar'} onPress={handleSignIn} loading={loading} />
      </ContainerInputs>
    </Container>
  );
};

export default Login;
