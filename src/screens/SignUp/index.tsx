import React, { useState } from 'react';
import { Container, ContainerInputs, TextError } from './styled';
import { useNavigation } from '@react-navigation/core';

import { IUser } from '../../context/Auth';
import { Platform } from 'react-native';
import { TextInput } from 'react-native';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { HeaderInformation } from '../../components/HeaderInformation';

export type ISignUp = Pick<IUser, 'social_name' | 'email' | 'password'>;

const SignUp = () => {
  const navigation = useNavigation();
  const [userSignUp, setUserSignUp] = useState<ISignUp>({
    social_name: '',
    email: '',
    password: '',
  });
  const [password_confirmation, setPassword_confirmation] = useState('');

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
        message: 'a senha deve conter no mínimo 8 caracteres',
      });
    } else if (password_confirmation !== userSignUp.password) {
      return serIsError({ is: true, message: 'Senhas não coincidem' });
    }
    setLoading(true);
    navigation.navigate('CompleteSignUp', { userSignUp });
    setLoading(false);
  };

  return (
    <Container
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
      <HeaderInformation
        title={'Cadastro'}
        subtitle={
          'É recomendado conectar seu endereço de e-mail para que possamos proteger melhor suas informações'
        }
      />
      <ContainerInputs showsVerticalScrollIndicator={false}>
        <Input title={'Nome Social'}>
          <TextInput
            value={userSignUp.social_name}
            onChangeText={(text: string) =>
              setUserSignUp({ ...userSignUp, social_name: text })
            }
            style={{flex:1}}
          />
        </Input>
        <Input title={'E-mail'}>
          <TextInput
            value={userSignUp.email}
            onChangeText={(text) =>
              setUserSignUp({ ...userSignUp, email: text })
            }
            style={{flex:1}}
          />
        </Input>
        <Input
          title={'Senha'}
          isIcon={true}
          isSecret={isPassword}
          onPress={() => setIsPassword(!isPassword)}>
          <TextInput
            value={userSignUp.password}
            onChangeText={(text) =>
              setUserSignUp({ ...userSignUp, password: text })
            }
            secureTextEntry={isPassword ? false : true}
            style={{flex:1}}
          />
        </Input>
        <Input
          title={'Confirmar Senha'}
          onPress={() => setIsPassword(!isPassword)}>
          <TextInput
            value={password_confirmation}
            onChangeText={(text) => setPassword_confirmation(text)}
            secureTextEntry={isPassword ? false : true}
            style={{flex:1}}
          />
        </Input>
        {isError.is && <TextError>{isError.message}</TextError>}

        <Button text={'Continuar'} onPress={handleSignUp} loading={loading} />
      </ContainerInputs>
    </Container>
  );
};

export default SignUp;
