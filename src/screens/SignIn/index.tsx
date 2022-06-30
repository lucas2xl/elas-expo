import React, { useContext, useState } from 'react';
import {
  Container,
  ContainerInputs,
  RecoverPasswordButton,
  RecoverPasswordText,
  TextError,
  WrapperError,
} from './styled';
import { CommonActions, useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../context/Auth';
import { localStorage } from '../../utils/localStorage';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { animation } from '../../utils/amimation';
import { ActivityIndicator, TextInput } from 'react-native';
import { Colors } from '../../styles/Colors';
import { Modal } from '../../components/Modal';
import { InputWrapper } from '../../components/Modal/styled';
import { HeaderInformation } from '../../components/HeaderInformation';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export interface ISignIn {
  email: string;
  password: string;
}

const Login = () => {
  const navigation = useNavigation();
  const { signIn, generateCodeForRecoverPassword, recoverPassword, checkCode } =
    useContext(AuthContext);
  const [userLogin, setUserLogin] = useState<ISignIn>({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const [isSecure, setSecure] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isRecoverPasswordModal, setIsRecoverPasswordModal] = useState(false);
  const [isPasswordCodeModal, setIsPasswordCodeModal] = useState(false);
  const [recoverPasswordCode, setRecoverPasswordCode] = useState('');
  const errorOpacity = useSharedValue(0);
  const errorHeight = useSharedValue(0);

  const animationStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(errorOpacity.value, animation.config),
      height: `${withTiming(errorHeight.value, animation.config)}%`,
    };
  });

  const handleSignIn = async () => {
    setErrorMessage('');
    errorOpacity.value = 0;

    if (!userLogin.email || !userLogin.password) {
      throw setErrorMessage('Todos os campos devem ser preenchidos');
    }

    try {
      setLoading(true);
      await signIn({ email: userLogin.email, password: userLogin.password });
      await saveAuthentication();
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: 'Home' }],
        }),
      );
    } catch (error: any) {
      console.log(error.message);
      if (error.message.includes('401')) {
        setErrorMessage('E-mail e/ou senha inválido');
      } else {
        setErrorMessage('Problema na conexão');
      }
      errorOpacity.value = 1;
      errorHeight.value = 100;
    } finally {
      setLoading(false);
    }
  };

  const saveAuthentication = async () => {
    await localStorage.authenticate.save({
      email: userLogin.email,
      password: userLogin.password,
    });
  };

  const handleRecoverPassword = async (isAcceptedRecover = false) => {
    if (!isAcceptedRecover) {
      setIsRecoverPasswordModal(true);
      return;
    }
    try {
      setLoading(true);
      await generateCodeForRecoverPassword(userLogin.email.toLowerCase());
      setIsRecoverPasswordModal(false);
      setIsPasswordCodeModal(true);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const handleCheckCode = async (code: string) => {
    try {
      setLoading(true);
      const result = await checkCode(userLogin.email, code);
      setIsPasswordCodeModal(false);
      navigation.navigate('RecoverPassword', {
        email: userLogin.email,
        code: result,
      });
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {isRecoverPasswordModal && (
        <Modal
          cancelText={'Cancelar'}
          confirmText={'Enviar'}
          isModal={isRecoverPasswordModal}
          title={'Deseja enviado o código de recuperação para o email?'}
          subtitle={userLogin.email}
          onPressCancel={() => setIsRecoverPasswordModal(false)}
          onPressConfirm={() => handleRecoverPassword(true)}
          loading={loading}
        />
      )}

      {isPasswordCodeModal && (
        <Modal isModal={isRecoverPasswordModal} title={'Digite o código'}>
          <InputWrapper>
            <TextInput
              value={recoverPasswordCode}
              onChangeText={async (value) => {
                setRecoverPasswordCode(value);
                if (value.length === 6) {
                  await handleCheckCode(value);
                }
              }}
              textAlign="center"
              maxLength={6}
              keyboardType="numeric"
              caretHidden={true}
              autoFocus={true}
            />
          </InputWrapper>
          {loading && <ActivityIndicator color={Colors.primary} size="small" />}
        </Modal>
      )}
      <Container behavior="height" enabled>
        <HeaderInformation
          title={'Entrar'}
          subtitle={
            'É recomendado conectar seu endereço de e-mail para que possamosproteger melhor suas informações'
          }
        />
        <ContainerInputs showsVerticalScrollIndicator={false}>
          <Input title={'E-mail'}>
            <TextInput
              value={userLogin.email}
              onChangeText={(text: string) =>
                setUserLogin({ ...userLogin, email: text })
              }
              keyboardType={'email-address'}
              style={{flex:1}}
            />
          </Input>
          <Input
            title={'Senha'}
            isIcon={true}
            isSecret={isSecure}
            onPress={() => setSecure(!isSecure)}>
            <TextInput
              value={userLogin.password}
              onChangeText={(text: string) =>
                setUserLogin({ ...userLogin, password: text })
              }
              secureTextEntry={isSecure ? false : true}
              style={{flex:1}}
            />
          </Input>
          {errorHeight.value !== 0 && (
            <WrapperError style={animationStyle}>
              <TextError>{errorMessage}</TextError>

              <RecoverPasswordButton onPress={() => handleRecoverPassword()}>
                <RecoverPasswordText>Recuperar senha</RecoverPasswordText>
              </RecoverPasswordButton>
            </WrapperError>
          )}

          <Button text={'Entrar'} onPress={handleSignIn} loading={loading} />
        </ContainerInputs>
      </Container>
    </>
  );
};

export default Login;
