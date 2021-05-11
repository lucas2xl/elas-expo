import React from 'react';
import { Container, ContainerIcon, Icon, ChangePhoto, Name } from './styled';

import { Entypo } from '@expo/vector-icons';

interface IProfile {
  noWidth?: boolean;
}

const Profile = (porps: IProfile) => {
  return (
    <Container noWidth={porps.noWidth}>
      <ContainerIcon>
        <Icon source={require('../../assets/images/PerfilIcon.webp')} />
        <ChangePhoto activeOpacity={0.8}>
          <Entypo name={'camera'} size={13} color={'#ffff'} />
        </ChangePhoto>
      </ContainerIcon>
      <Name>Lucas Aguiar</Name>
    </Container>
  );
};

export default Profile;
