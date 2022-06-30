import React from 'react';
import { Container, ContainerIcon, Icon, ChangePhoto, Name } from './styled';

import { Entypo } from '@expo/vector-icons';

interface IProfile {
  noWidth?: boolean;
  name: string;
}

export const Profile = (props: IProfile) => {
  return (
    <Container noWidth={props.noWidth}>
      <ContainerIcon>
        <Icon source={require('../../assets/images/PerfilIcon.webp')} />
        <ChangePhoto activeOpacity={0.8}>
          <Entypo name={'camera'} size={13} color={'#ffff'} />
        </ChangePhoto>
      </ContainerIcon>
      <Name>{props.name || 'Visitante'}</Name>
    </Container>
  );
};
