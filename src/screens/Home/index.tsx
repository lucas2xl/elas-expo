import React, { useContext, useEffect, useState } from 'react';
import {
  Container,
  HeaderContainer,
  ContentContainer,
  Icon,
  Title,
  ContainerFooter,
} from './styled';
import { useNavigation } from '@react-navigation/core';

import Button from '../../components/Button';
import Circle from '../../components/Circle';
import Modal from '../../components/Modal';

import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../styles/Colors';
import { api } from '../../services';
import * as Location from 'expo-location';
import { AuthContext } from '../../context/Auth';

interface ICall {
  user_id: string;
  latitude: number;
  longitude: number;
}

const Home = () => {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);
  const [isModal, setModal] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, []);

  const handleCall = async () => {
    try {
      setLoading(true);

      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        throw 'Permission to access location was denied';
      }
      const location = await Location.getCurrentPositionAsync({});

      await api.post<ICall>('/calls', {
        user_id: user?.id,
        latitude: location?.coords.latitude,
        longitude: location?.coords.longitude,
      });
      setSuccess(true);
      setModal(false);
    } catch (error) {
      console.log(error);
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container>
        <HeaderContainer>
          <Title>ELAS</Title>
          <MaterialIcons
            name={'menu'}
            color={Colors.primary}
            size={30}
            onPress={() => {
              navigation.navigate('Menu');
            }}
          />
        </HeaderContainer>
        <ContentContainer>
          <Icon source={require('../../assets/images/Logo.png')} />
          <Circle />
        </ContentContainer>
        <ContainerFooter>
          <Button
            text={'emergência'.toUpperCase()}
            onPress={() => setModal(true)}
            loading={false}
          />
        </ContainerFooter>
      </Container>
      {isModal && (
        <Modal
          cancelText={'Não'}
          confirmText={'Sim'}
          isModal={isModal}
          title={'Deseja realizar a chamada?'}
          subtitle={'Seus dados serão compartilhados!'}
          onPressCancel={() => setModal(false)}
          onPressConfirm={handleCall}
          loading={loading}
        />
      )}

      {isSuccess && (
        <Modal
          confirmText={'Ok'}
          isModal={isSuccess}
          title="Sucesso!"
          subtitle="Chamada realizada, nos estamos juntos!!"
          onPressConfirm={() => setSuccess(false)}
        />
      )}

      {isError && (
        <Modal
          confirmText={'Ok'}
          isModal={isSuccess}
          title="Ops!!"
          subtitle="Houve uma falha ao enviar uma chamada de emergência."
          onPressConfirm={() => setError(false)}
        />
      )}
    </>
  );
};

export default Home;
