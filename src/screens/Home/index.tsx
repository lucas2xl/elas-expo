import React, { useState } from 'react';
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

const Home = () => {
  const navigation = useNavigation();
  const [isModal, setModal] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  return (
    <>
      <Container>
        <HeaderContainer>
          <Title>ELAS</Title>
          <MaterialIcons
            name={'menu'}
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
          onPressConfirm={() => {
            setSuccess(true);
            setModal(false);
          }}
        />
      )}
      {isSuccess && (
        <Modal
          confirmText={'Ok'}
          isModal={isSuccess}
          title={'Chamada realizada com sucesso!!'}
          onPressConfirm={() => setSuccess(false)}
        />
      )}
    </>
  );
};

export default Home;
