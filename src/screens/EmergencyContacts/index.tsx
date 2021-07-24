import React, { useState } from 'react';
import { Container, Title, ContainerContent, ContentRow } from './styled';

import HeaderInformation from '../../components/HeaderInformation';
import Input from '../../components/Input';
import SelectInformation from '../../components/SelectInformation';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

interface IEmergencyContacts {
  fullName: string;
  phoneNumber: string;
  isMother: boolean;
  isFather: boolean;
  isSpouse: boolean;
  isPartner: boolean;
  isFamiliar: boolean;
  isFriend: boolean;
}
const EmergencyContacts = () => {
  const navigation = useNavigation();
  const [
    userEmergencyContacts,
    setUserEmergencyContacts,
  ] = useState<IEmergencyContacts>({
    fullName: '',
    phoneNumber: '',
    isMother: false,
    isFather: false,
    isSpouse: false,
    isPartner: false,
    isFamiliar: false,
    isFriend: false,
  });

  return (
    <Container showsVerticalScrollIndicator={false}>
      <HeaderInformation
        title={'Contatos'}
        subtitle={
          'Para garantir uma maior seguranca para voce é interessante colocar alguns contatos para emergias'
        }
      />
      <Input
        title={'Nome Completo'}
        value={userEmergencyContacts.fullName}
        onChangeText={(text) =>
          setUserEmergencyContacts({ ...userEmergencyContacts, fullName: text })
        }
      />
      <Input
        title={'Telefone'}
        value={userEmergencyContacts.phoneNumber}
        onChangeText={(text) =>
          setUserEmergencyContacts({
            ...userEmergencyContacts,
            phoneNumber: text,
          })
        }
      />
      <Title>Grau de Familiaridade</Title>
      <ContainerContent>
        <ContentRow>
          <SelectInformation
            text={'Mãe'}
            check={userEmergencyContacts.isMother}
            onPress={() =>
              setUserEmergencyContacts({
                ...userEmergencyContacts,
                isMother: !userEmergencyContacts.isMother,
              })
            }
          />
          <SelectInformation
            text={'Pai'}
            check={userEmergencyContacts.isFather}
            onPress={() =>
              setUserEmergencyContacts({
                ...userEmergencyContacts,
                isFather: !userEmergencyContacts.isFather,
              })
            }
          />
        </ContentRow>
        <ContentRow>
          <SelectInformation
            text={'Cônjuge'}
            check={userEmergencyContacts.isSpouse}
            onPress={() =>
              setUserEmergencyContacts({
                ...userEmergencyContacts,
                isSpouse: !userEmergencyContacts.isSpouse,
              })
            }
          />
          <SelectInformation
            text={'Parceiro(a)'}
            check={userEmergencyContacts.isPartner}
            onPress={() =>
              setUserEmergencyContacts({
                ...userEmergencyContacts,
                isPartner: !userEmergencyContacts.isPartner,
              })
            }
          />
        </ContentRow>
        <ContentRow>
          <SelectInformation
            text={'Familiar'}
            check={userEmergencyContacts.isFamiliar}
            onPress={() =>
              setUserEmergencyContacts({
                ...userEmergencyContacts,
                isFamiliar: !userEmergencyContacts.isFamiliar,
              })
            }
          />
          <SelectInformation
            text={'Amigo(a)'}
            check={userEmergencyContacts.isFriend}
            onPress={() =>
              setUserEmergencyContacts({
                ...userEmergencyContacts,
                isFriend: !userEmergencyContacts.isFriend,
              })
            }
          />
        </ContentRow>
      </ContainerContent>
      <Button text={'FINALIZAR'} onPress={() => navigation.navigate("Home")}/>
    </Container>
  );
};

export default EmergencyContacts;
