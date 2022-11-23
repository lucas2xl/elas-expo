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

import Fonts from '../../styles/Fonts';
import { AuthContext, IUser } from '../../context/Auth';
import { TextError } from '../SignUp/styled';
import { Colors } from '../../styles/Colors';
import { KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import { Profile } from '../../components/Profile';
import { Input } from '../../components/Input';
import { SelectInformation } from '../../components/SelectInformation';
import { Button } from '../../components/Button';

const CompleteSingUp = () => {
  const navigation = useNavigation();
  const { signUp } = useContext(AuthContext);
  const route = useRoute<any>();
  const { email, password, social_name } = route.params.userSignUp;

  const [isError, serIsError] = useState({
    is: false,
    message: '',
  });
  const [userCompleteSignUp, setUserCompleteSignUp] = useState<IUser>(
    {} as IUser,
  );
  const [loading, setLoading] = useState(false);
  const [acceptTerm, setAcceptTerm] = useState(false);

  const handleCompleteSignUp = async () => {
    serIsError({
      is: false,
      message: '',
    });

    if (
      !userCompleteSignUp?.full_name ||
      !userCompleteSignUp?.cpf ||
      !userCompleteSignUp?.address ||
      !userCompleteSignUp?.phone ||
      !userCompleteSignUp?.cep
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
    } else if (String(userCompleteSignUp.cep).length !== 8) {
      return serIsError({
        is: true,
        message: 'Cep inválido',
      });
    }
    try {
      setLoading(true);

      const user = {
        ...userCompleteSignUp,
        email,
        password,
        social_name,
      };
      await signUp({ ...user });
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: 'Home' }],
        }),
      );
    } catch (error: any) {
      console.log(error);
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
        <Input title={'Nome completo'}>
          <TextInput
            value={userCompleteSignUp?.full_name}
            onChangeText={(text) =>
              setUserCompleteSignUp((prevState) => ({
                ...prevState!,
                full_name: text,
              }))
            }
            autoCapitalize="words"
            style={{ flex: 1, height: 40 }}
          />
        </Input>
        <InputSeparator>
          <Input isRow={true} title={'CPF'}>
            <TextInput
              value={userCompleteSignUp?.cpf?.toString()}
              onChangeText={(text) =>
                setUserCompleteSignUp((prevState) => ({
                  ...prevState!,
                  cpf: Number(text),
                }))
              }
              keyboardType="phone-pad"
              style={{ flex: 1, height: 40 }}
              maxLength={11}
            />
          </Input>
        </InputSeparator>
        <Input title={'Telefone'}>
          <TextInput
            value={userCompleteSignUp?.phone?.toString()}
            onChangeText={(text) =>
              setUserCompleteSignUp((prevState) => ({
                ...prevState!,
                phone: Number(text),
              }))
            }
            keyboardType="phone-pad"
            style={{ flex: 1, height: 40 }}
            maxLength={11}
          />
        </Input>

        <InputSeparator>
          <Input isRow={true} title={'CEP'}>
            <TextInput
              value={userCompleteSignUp?.cep?.toString()}
              onChangeText={(text) =>
                setUserCompleteSignUp((prevState) => ({
                  ...prevState!,
                  cep: Number(text),
                }))
              }
              keyboardType="phone-pad"
              style={{ flex: 1, height: 40 }}
              maxLength={8}
            />
          </Input>
          <ContainerPicker>
            <Picker
              selectedValue={userCompleteSignUp?.gender}
              onValueChange={(value: string) =>
                setUserCompleteSignUp((prevState) => ({
                  ...prevState!,
                  gender: value,
                }))
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
        <Input title={'Endereço'}>
          <TextInput
            value={userCompleteSignUp?.address}
            onChangeText={(text) =>
              setUserCompleteSignUp((prevState) => ({
                ...prevState!,
                address: text,
              }))
            }
            style={{ flex: 1, height: 40 }}
          />
        </Input>
        <Input title={'Complemento'}>
          <TextInput
            value={userCompleteSignUp?.complement}
            onChangeText={(text) =>
              setUserCompleteSignUp((prevState) => ({
                ...prevState!,
                complement: text,
              }))
            }
            style={{ flex: 1, height: 40 }}
          />
        </Input>

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
