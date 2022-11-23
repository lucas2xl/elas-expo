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

import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../styles/Colors';
import { api, socket } from '../../services';
import * as Location from 'expo-location';
import { AuthContext } from '../../context/Auth';
import { Circle } from '../../components/Circle';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';

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
      socket.emit('call');
      setTimeout(() => {
        setSuccess(true);
        setModal(false);
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
      setError(true);
      console.log(error);
      setLoading(false);
    } finally {
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
          <Button text={'Criar um ciclo'} onPress={() => setModal(true)} />
        </ContainerFooter>
      </Container>

      {isModal && (
        <Modal
          cancelText={'Não'}
          confirmText={'Sim'}
          isModal={isModal}
          title={'Deseja realizar a chamada?'}
          subtitle={'Seus dados serão compartilhados com a polícia.'}
          onPressCancel={() => setModal(false)}
          onPressConfirm={handleCall}
          loading={loading}
        />
      )}

      {isSuccess && (
        <Modal
          confirmText={'Ok'}
          isModal={isSuccess}
          title="Chamada realizada com sucesso!"
          subtitle="Juntos somos mais forte."
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
