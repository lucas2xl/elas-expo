import React, { useContext, useState } from 'react';
import {
  Container,
  InputSeparator,
  ContainerPicker,
  ContainerFooter,
  TermWrapper,
  TermText,
} from './styled';
import { Picker } from '@react-native-picker/picker';
import { useNavigation, useRoute, CommonActions } from '@react-navigation/core';

import Profile from '../../components/Profile';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Fonts from '../../styles/Fonts';
import { AuthContext, IUser } from '../../context/Auth';
import { TextError } from '../SignUp/styled';
import SelectInformation from '../../components/SelectInformation';
import { Colors } from '../../styles/Colors';
import { KeyboardAvoidingView, Platform } from 'react-native';

const CompleteSingUp = () => {
  const navigation = useNavigation();
  const { signUp } = useContext(AuthContext);
  const route = useRoute<any>();
  const { email, password, social_name } = route.params.userSignUp;

  const [isError, serIsError] = useState({
    is: false,
    message: '',
  });
  const [userCompleteSignUp, setUserCompleteSignUp] = useState<IUser>({
    full_name: '',
    cpf: 0,
    phone: 0,
    cep: 0,
    address: '',
    complement: '',
    gender: '',
    email,
    social_name,
    password,
  });
  const [loading, setLoading] = useState(false);
  const [acceptTerm, setAcceptTerm] = useState(false);

  const handleCompleteSignUp = async () => {
    serIsError({
      is: false,
      message: '',
    });

    if (
      !userCompleteSignUp.full_name ||
      !userCompleteSignUp.cpf ||
      !userCompleteSignUp.address ||
      userCompleteSignUp.phone === 0 ||
      userCompleteSignUp.cep === 0
    ) {
      return serIsError({
        is: true,
        message: 'Todos os campos devem ser preenchidos',
      });
    } else if (String(userCompleteSignUp.cpf).length !== 11) {
      return serIsError({
        is: true,
        message: 'CPF inválido',
      });
    } else if (String(userCompleteSignUp.phone).length !== 11) {
      return serIsError({
        is: true,
        message: 'Telefone inválido',
      });
    } else if (String(userCompleteSignUp.cep).length !== 8) {
      return serIsError({
        is: true,
        message: 'Cep inválido',
      });
    }
    try {
      setLoading(true);

      await signUp({ ...userCompleteSignUp });
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: 'Home' }],
        }),
      );
    } catch (error: any) {
      if (error.message.includes('400')) {
        return serIsError({
          is: true,
          message: 'Email já registrado',
        });
      }
      serIsError({
        is: true,
        message: 'Problema na conexão',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
        <Profile name={social_name} />
        <Input
          title={'Nome completo'}
          value={userCompleteSignUp.full_name}
          onChangeText={(text) =>
            setUserCompleteSignUp({ ...userCompleteSignUp, full_name: text })
          }
        />
        <InputSeparator>
          <Input
            isRow={true}
            title={'CPF'}
            value={userCompleteSignUp.cpf.toString()}
            onChangeText={(text) =>
              setUserCompleteSignUp({
                ...userCompleteSignUp,
                cpf: Number(text),
              })
            }
          />
        </InputSeparator>
        <Input
          title={'Telefone'}
          value={userCompleteSignUp.phone.toString()}
          onChangeText={(text) =>
            setUserCompleteSignUp({
              ...userCompleteSignUp,
              phone: Number(text),
            })
          }
        />

        <InputSeparator>
          <Input
            isRow={true}
            title={'CEP'}
            value={userCompleteSignUp.cep.toString()}
            onChangeText={(text) =>
              setUserCompleteSignUp({
                ...userCompleteSignUp,
                cep: Number(text),
              })
            }
          />
          <ContainerPicker>
            <Picker
              selectedValue={userCompleteSignUp.gender}
              onValueChange={(value: string) =>
                setUserCompleteSignUp({ ...userCompleteSignUp, gender: value })
              }>
              <Picker.Item
                label="Feminino"
                value="fem"
                color={'rgba(0, 0, 0, 0.5)'}
                fontFamily={Fonts.regular}
              />
              <Picker.Item
                label="Masculino"
                value="masc"
                color={'rgba(0, 0, 0, 0.5)'}
                fontFamily={Fonts.regular}
              />
              <Picker.Item
                label="Não-binário"
                value="notbinary"
                color={'rgba(0, 0, 0, 0.5)'}
                fontFamily={Fonts.regular}
              />
              <Picker.Item
                label="Outro"
                value="other"
                color={'rgba(0, 0, 0, 0.5)'}
                fontFamily={Fonts.regular}
              />
            </Picker>
          </ContainerPicker>
        </InputSeparator>
        <Input
          title={'Endereço'}
          value={userCompleteSignUp.address}
          onChangeText={(text) =>
            setUserCompleteSignUp({ ...userCompleteSignUp, address: text })
          }
        />
        <Input
          title={'Complemento'}
          value={userCompleteSignUp.complement}
          onChangeText={(text) =>
            setUserCompleteSignUp({ ...userCompleteSignUp, complement: text })
          }
        />

        <TermWrapper>
          <SelectInformation
            text={'Eu aceito os termos e condições de uso!'}
            check={acceptTerm}
            onPress={() => setAcceptTerm(!acceptTerm)}
            textColor={Colors.orange}
          />
        </TermWrapper>
        {isError.is && <TextError>{isError.message}</TextError>}
        <ContainerFooter>
          <Button
            text={'Finalizar'}
            onPress={handleCompleteSignUp}
            loading={loading}
            color={acceptTerm ? Colors.primary : Colors.black}
            disabled={!acceptTerm}
          />
        </ContainerFooter>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default CompleteSingUp;
