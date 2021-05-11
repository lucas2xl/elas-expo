import React from 'react';

import { Container, Image, Text } from './styled';

interface IButton {
  containerStyle?: any;
  color?: string;
  onPress?: () => void;
  imageStyle?: any;
  source?: any;
  textColor?: string;
  text?: string;
}

const Home = (props: IButton) => {
  return (
    <Container
      style={props.containerStyle}
      color={props.color}
      onPress={props.onPress}>
      {props.source && <Image style={props.imageStyle} source={props.source} />}
      <Text textColor={props.textColor}>{props.text}</Text>
    </Container>
  );
};

export default Home;
