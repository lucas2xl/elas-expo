import React, { useState } from 'react';

import { Container, ContainerInputs } from './styled';

import HeaderInformation from '../../components/HeaderInformation';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

interface ISignUp {
  socialName: string;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
}
const SignUp = ({ navigation }: any) => {
  const [userSignUp, setUserSignUp] = useState<ISignUp>({
    socialName: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
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
            value={userSignUp.confirmEmail}
            onChangeText={(text) =>
              setUserSignUp({ ...userSignUp, confirmEmail: text })
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
            value={userSignUp.confirmPassword}
            onChangeText={(text) =>
              setUserSignUp({ ...userSignUp, confirmPassword: text })
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
