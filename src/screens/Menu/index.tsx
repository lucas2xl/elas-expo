import React, { useContext } from 'react';
import { Container, ContainerHeader, ContainerContent } from './styled';

import Profile from '../../components/Profile';
import MenuCard from '../../components/MenuCard';
import { Colors } from '../../styles/Colors';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { AuthContext } from '../../context/Auth';

const Menu = () => {
  const navigation = useNavigation();
  const { user, signOut } = useContext(AuthContext);

  const handleSignOut = () => {
    signOut();
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: 'SignInSignUp' }],
      }),
    );
  };
  return (
    <Container>
      <ContainerHeader activeOpacity={0.8}>
        <Profile noWidth={true} name={user?.social_name || 'Usuário'} />
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
        <MenuCard text={'Ajuda'} name={'help'} color={Colors.primary} />
        <MenuCard
          text={'Sair'}
          name={'sign-out'}
          color={Colors.pinkLight}
          onPress={handleSignOut}
        />
      </ContainerContent>
    </Container>
  );
};

export default Menu;
