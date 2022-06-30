import React, { useContext, useState } from 'react';
import { Container, ContainerInputs, TextError, WrapperError } from './styled';
import {
  CommonActions,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import { AuthContext } from '../../context/Auth';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { animation } from '../../utils/amimation';
import { TextInput } from 'react-native';
import { HeaderInformation } from '../../components/HeaderInformation';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export interface ISignIn {
  email: string;
  password: string;
}

const RecoverPassword = () => {
  const navigation = useNavigation();
  const route = useRoute<any>();
  const { recoverPassword } = useContext(AuthContext);
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const [isSecure, setSecure] = useState(false);
  const [loading, setLoading] = useState(false);
  const errorOpacity = useSharedValue(0);
  const errorHeight = useSharedValue(0);

  const animationStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(errorOpacity.value, animation.config),
      height: `${withTiming(errorHeight.value, animation.config)}%`,
    };
  });

  const handleRecoverPassword = async () => {
    try {
      setLoading(true);
      if (newPassword !== confirmNewPassword) {
        console.log('1');
        setErrorMessage('senhas nao coincidem');
        return;
      }
      if (newPassword.length < 8) {
        console.log('2');
        setErrorMessage('senha deve ter pelo menos 8 caracteres');
        return;
      }
      console.log(route.params?.email);
      console.log(route.params?.code);
      await recoverPassword({
        code: route.params?.code!,
        email: route.params?.email!,
        newPassword,
      });

      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: 'SignIn' }],
        }),
      );
    } catch (error) {
      setErrorMessage('Erro ao redefinir a senha');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container behavior="height" enabled>
      <HeaderInformation title={'Redifinir senha'} />
      <ContainerInputs showsVerticalScrollIndicator={false}>
        <Input
          title={'Nova senha'}
          isIcon={true}
          isSecret={isSecure}
          onPress={() => setSecure(!isSecure)}>
          <TextInput
            value={newPassword}
            onChangeText={setNewPassword}
            secureTextEntry={isSecure ? false : true}
          />
        </Input>
        <Input
          title={'Cofirmar nova senha'}
          isIcon={true}
          isSecret={isSecure}
          onPress={() => setSecure(!isSecure)}>
          <TextInput
            value={confirmNewPassword}
            onChangeText={setConfirmNewPassword}
            secureTextEntry={isSecure ? false : true}
          />
        </Input>
        {errorHeight.value !== 0 && (
          <WrapperError style={animationStyle}>
            <TextError>{errorMessage}</TextError>
          </WrapperError>
        )}

        <Button
          text={'Confirmar'}
          onPress={handleRecoverPassword}
          loading={loading}
        />
      </ContainerInputs>
    </Container>
  );
};

export default RecoverPassword;
