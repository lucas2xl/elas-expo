import React, { useState } from 'react';
import { Container, ContainerInputs, TextError } from './styled';
import { useNavigation } from '@react-navigation/core';

import HeaderInformation from '../../components/HeaderInformation';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { IUser } from '../../context/Auth';
import { Platform } from 'react-native';

export type ISignUp = Pick<IUser, 'social_name' | 'email' | 'password'>;

const SignUp = () => {
  const navigation = useNavigation();
  const [userSignUp, setUserSignUp] = useState<ISignUp>({
    social_name: 'Lucas Aguiar',
    email: 'luqkinhaas@gmail.com',
    password: '12345678',
  });
  const [password_confirmation, setPassword_confirmation] =
    useState('12345678');

  const [isPassword, setIsPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isError, serIsError] = useState({
    is: false,
    message: '',
  });

  const handleSignUp = async () => {
    serIsError({ is: false, message: '' });

    if (!userSignUp.social_name || !userSignUp.password || !userSignUp.email) {
      return serIsError({
        is: true,
        message: 'Todos os campos devem ser preenchidos',
      });
    } else if (userSignUp.password.length < 8) {
      return serIsError({
        is: true,
        message: 'A senha deve contem no minimo 8 carecteres',
      });
    } else if (password_confirmation !== userSignUp.password) {
      return serIsError({ is: true, message: 'Senhas não coincidem' });
    }
    setLoading(true);
    navigation.navigate('CompleteSignUp', { userSignUp });
    setLoading(false);
  };

  return (
    <>
      <Container
        behavior="position"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
        <HeaderInformation
          title={'Cadastro'}
          subtitle={
            'É recomendado conectar seu endereço de e-mail para que possamos proteger melhor suas informações'
          }
        />
        <ContainerInputs showsVerticalScrollIndicator={false}>
          <Input
            value={userSignUp.social_name}
            onChangeText={(text: string) =>
              setUserSignUp({ ...userSignUp, social_name: text })
            }
            title={'Nome Social'}
          />
          <Input
            value={userSignUp.email}
            onChangeText={(text) =>
              setUserSignUp({ ...userSignUp, email: text })
            }
            title={'E-mail'}
          />
          <Input
            value={userSignUp.password}
            onChangeText={(text) =>
              setUserSignUp({ ...userSignUp, password: text })
            }
            title={'Senha'}
            secureTextEntry={isPassword ? false : true}
            isIcon={true}
            isSecret={isPassword}
            onPress={() => setIsPassword(!isPassword)}
          />
          <Input
            value={password_confirmation}
            onChangeText={(text) => setPassword_confirmation(text)}
            title={'Confirmar Senha'}
            secureTextEntry={isPassword ? false : true}
            onPress={() => setIsPassword(!isPassword)}
          />
          {isError.is && <TextError>{isError.message}</TextError>}

          <Button text={'CONTINUAR'} onPress={handleSignUp} loading={loading} />
        </ContainerInputs>
      </Container>
    </>
  );
};

export default SignUp;
