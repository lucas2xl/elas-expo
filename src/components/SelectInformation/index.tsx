import React from 'react';
import { Container, BoxSelect, Box, Text } from './styled';

import { Entypo } from '@expo/vector-icons';

interface ISelectInformation {
  text: string;
  textColor?: string;
  check: boolean;
  onPress: () => void;
}

export const SelectInformation = (props: ISelectInformation) => {
  return (
    <Container>
      <BoxSelect onPress={props.onPress}>
        <Box check={props.check}>
          {props.check && <Entypo name={'check'} size={18} color={'white'} />}
        </Box>
        <Text color={props.textColor}>{props.text}</Text>
      </BoxSelect>
    </Container>
  );
};
