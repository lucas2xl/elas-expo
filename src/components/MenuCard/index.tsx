import React from 'react';

import { Container, ContainerIcon, Text } from './styled';
import {
  AntDesign,
  SimpleLineIcons,
  Feather,
  Ionicons,
} from '@expo/vector-icons';

interface IIcon {
  name?: 'config' | 'blog' | 'contacts' | 'help' | 'sign-out';
}
interface IMenuCard extends IIcon {
  color?: string;
  onPress?: () => void;
  imageStyle?: any;
  text?: string;
}

export const MenuCard = (props: IMenuCard) => {
  const icon = (name: string) => {
    switch (name) {
      case 'config':
        return <AntDesign name={'setting'} size={25} color={'#fff'} />;
      case 'blog':
        return <SimpleLineIcons name={'globe'} size={25} color={'#fff'} />;
      case 'contacts':
        return <Feather name={'users'} size={25} color={'#fff'} />;
      case 'help':
        return <Ionicons name={'help'} size={25} color={'#fff'} />;
      case 'sign-out':
        return <Ionicons name={'log-out'} size={25} color={'#fff'} />;
    }
  };

  return (
    <Container onPress={props.onPress}>
      <ContainerIcon color={props.color}>
        {props.name ? icon(props.name) : false}
      </ContainerIcon>
      <Text>{props.text}</Text>
    </Container>
  );
};
