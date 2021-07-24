import React from 'react';
import { Container, ContainerHeader, ContainerContent } from './styled';

import Profile from '../../components/Profile';
import MenuCard from '../../components/MenuCard';
import Colors from '../../styles/Colors';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();
  
  return (
    <Container>
      <ContainerHeader activeOpacity={0.8}>
        <Profile noWidth={true} />
      </ContainerHeader>
      <ContainerContent>
        <MenuCard
          text={'Configurações'}
          name={'config'}
          color={Colors.orange}
        />
        <MenuCard text={'Nosso blog'} name={'blog'} color={Colors.green} />
        <MenuCard
          text={'Contatos'}
          name={'contacts'}
          color={Colors.secondary}
        />
        <MenuCard text={'Ajuda'} name={'help'} color={Colors.primary} onPress={() => navigation.navigate('SignInSignUp')}/>
      </ContainerContent>
    </Container>
  );
};

export default Menu;
