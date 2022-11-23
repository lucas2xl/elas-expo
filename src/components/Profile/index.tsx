import React from 'react';
import { Container, ContainerIcon, Icon, ChangePhoto, Name } from './styled';

import { Entypo } from '@expo/vector-icons';

interface IProfile {
  noWidth?: boolean;
  name: string;
  photo?: string | null;
  onPress: () => void;
}

export const Profile = (props: IProfile) => {
  const hasPhoto = props.photo ? true : false;
  return (
    <Container noWidth={props.noWidth}>
      <ContainerIcon>
        {hasPhoto ? (
          <Icon source={{ uri: props.photo! }} />
        ) : (
          <Icon source={require('../../assets/images/PerfilIcon.webp')} />
        )}

        <ChangePhoto activeOpacity={0.8} onPress={props.onPress}>
          <Entypo name={'camera'} size={13} color={'#ffff'} />
        </ChangePhoto>
      </ContainerIcon>
      <Name>{props.name || 'Visitante'}</Name>
    </Container>
  );
};
