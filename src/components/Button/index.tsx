import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Colors } from '../../styles/Colors';

import { Container, Image, Text } from './styled';

interface IButton {
  containerStyle?: any;
  color?: string;
  onPress?: () => void;
  imageStyle?: any;
  source?: any;
  textColor?: string;
  text?: string;
  loading: boolean;
  disabled?: boolean;
}

const Home = (props: IButton) => {
  return (
    <Container
      style={props.containerStyle}
      color={props.color}
      disabled={props.disabled}
      onPress={props.onPress}>
      {props.source && <Image style={props.imageStyle} source={props.source} />}
      {props.loading ? (
        <ActivityIndicator color={Colors.white} />
      ) : (
        <Text textColor={props.textColor}>{props.text}</Text>
      )}
    </Container>
  );
};

export default Home;
