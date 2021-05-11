import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import {
  Container,
  InputSeparator,
  ContainerPicker,
  ContainerFooter,
} from './styled';

import Profile from '../../components/Profile';
import Input from '../../components/Input';
import Button from '../../components/Button';

interface ICompleteSignUp {
  fullName: string;
  cpf: string;
  rg: string;
  phoneNumber: string;
  CEP: string;
  address: string;
  complement: string;
  gender: string;
}
const CompleteSingUp = ({ navigation }: any) => {
  const [userCompleteSignUp, setUserCompleteSignUp] = useState<ICompleteSignUp>(
    {
      fullName: '',
      cpf: '',
      rg: '',
      phoneNumber: '',
      CEP: '',
      address: '',
      complement: '',
      gender: '',
    },
  );

  return (
    <Container showsVerticalScrollIndicator={false}>
      <Profile />
      <Input
        title={'Nome completo'}
        value={userCompleteSignUp.fullName}
        onChangeText={(text: string) =>
          setUserCompleteSignUp({ ...userCompleteSignUp, fullName: text })
        }
      />
      <InputSeparator>
        <Input
          isRow={true}
          title={'CPF'}
          value={userCompleteSignUp.cpf}
          onChangeText={(text: string) =>
            setUserCompleteSignUp({ ...userCompleteSignUp, cpf: text })
          }
        />
        <Input
          isRow={true}
          title={'RG'}
          value={userCompleteSignUp.rg}
          onChangeText={(text: string) =>
            setUserCompleteSignUp({ ...userCompleteSignUp, rg: text })
          }
        />
      </InputSeparator>
      <Input
        title={'Telefone'}
        value={userCompleteSignUp.phoneNumber}
        onChangeText={(text: string) =>
          setUserCompleteSignUp({ ...userCompleteSignUp, phoneNumber: text })
        }
      />

      <InputSeparator>
        <Input
          isRow={true}
          title={'CEP'}
          value={userCompleteSignUp.CEP}
          onChangeText={(text) =>
            setUserCompleteSignUp({ ...userCompleteSignUp, CEP: text })
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
              fontFamily={'sans-serif'}
            />
            <Picker.Item
              label="Masculino"
              value="masc"
              color={'rgba(0, 0, 0, 0.5)'}
              fontFamily={'sans-serif'}
            />
            <Picker.Item
              label="Não-binário"
              value="notbinary"
              color={'rgba(0, 0, 0, 0.5)'}
              fontFamily={'sans-serif'}
            />
            <Picker.Item
              label="Outro"
              value="other"
              color={'rgba(0, 0, 0, 0.5)'}
              fontFamily={'sans-serif'}
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
      <ContainerFooter>
        <Button
          text={'FINALIZAR'}
          onPress={() => navigation.navigate('EmergencyContacts')}
        />
      </ContainerFooter>
    </Container>
  );
};

export default CompleteSingUp;
