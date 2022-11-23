import React, { useContext, useState } from 'react';
import { Container, ContainerHeader, ContainerContent } from './styled';

import { Colors } from '../../styles/Colors';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { AuthContext } from '../../context/Auth';
import { localStorage } from '../../utils/localStorage';
import { Profile } from '../../components/Profile';
import { MenuCard } from '../../components/MenuCard';
import * as ImagePicker from 'expo-image-picker';

const Menu = () => {
  const navigation = useNavigation();
  const { user, signOut } = useContext(AuthContext);
  const [image, setImage] = useState<string | null>(null);

  const handleSignOut = async () => {
    signOut();

    await localStorage.authenticate.remove();

    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: 'SignInSignUp' }],
      }),
    );
  };

  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  return (
    <Container>
      <ContainerHeader activeOpacity={0.8}>
        <Profile
          noWidth={true}
          name={user?.social_name || 'Usuário'}
          photo={user?.complement}
          onPress={pickImage}
        />
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
