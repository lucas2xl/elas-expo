import React, { useState } from 'react';
import { Container, ContainerInputs } from './styled';
import { useNavigation } from '@react-navigation/core';

import HeaderInformation from '../../components/HeaderInformation';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

interface ISignUp {
  socialName: string;
  email: string;
  emailConfirmation: string;
  password: string;
  passwordConfirmation: string;
}
const SignUp = () => {
  const navigation = useNavigation();
  const [userSignUp, setUserSignUp] = useState<ISignUp>({
    socialName: '',
    email: '',
    emailConfirmation: '',
    password: '',
    passwordConfirmation: '',
  });

  const [isPassword, setIsPassword] = useState(false);
  const [isModal, setModal] = useState(false);

  return (
    <>
      <Container behavior="height" enabled>
        <HeaderInformation
          title={'Cadastro'}
          subtitle={
            'É recomendado conectar seu endereço de e-mail para que possamosproteger melhor suas informações'
          }
        />
        <ContainerInputs showsVerticalScrollIndicator={false}>
          <Input
            value={userSignUp.socialName}
            onChangeText={(text: string) =>
              setUserSignUp({ ...userSignUp, socialName: text })
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
            value={userSignUp.emailConfirmation}
            onChangeText={(text) =>
              setUserSignUp({ ...userSignUp, emailConfirmation: text })
            }
            title={'Confirmar e-mail'}
          />
          <Input
            value={userSignUp.password}
            onChangeText={(text) =>
              setUserSignUp({ ...userSignUp, password: text })
            }
            title={'Senha'}
            secureTextEntry={isPassword ? false : true}
            isIcon={true}
            iconName={isPassword ? 'eye-off' : 'eye'}
            onPress={() => setIsPassword(!isPassword)}
          />
          <Input
            value={userSignUp.passwordConfirmation}
            onChangeText={(text) =>
              setUserSignUp({ ...userSignUp, passwordConfirmation: text })
            }
            title={'Confirmar Senha'}
            secureTextEntry={isPassword ? false : true}
            onPress={() => setIsPassword(!isPassword)}
          />

          <Button text={'CADASTRAR'} onPress={() => setModal(true)} />
        </ContainerInputs>
      </Container>
      {isModal && (
        <Modal
          isModal={isModal}
          title={'Deseja confirmar o cadastro?'}
          confirmText={'Confirmar'}
          cancelText={'Cancelar'}
          onPressCancel={() => setModal(false)}
          onPressConfirm={() => navigation.navigate('CompleteSignUp')}
        />
      )}
    </>
  );
};

export default SignUp;
