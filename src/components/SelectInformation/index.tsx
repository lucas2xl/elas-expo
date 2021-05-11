import React from 'react';
import { Container, BoxSelect, Box, Text } from './styled';

import { Entypo } from '@expo/vector-icons';

interface ISelectInformation {
  text: string;
  check: boolean;
  onPress: () => void;
}

const SelectInformation = (props: ISelectInformation) => {
  return (
    <Container>
      <BoxSelect onPress={props.onPress}>
        <Box check={props.check}>
          {props.check && <Entypo name={'check'} size={18} color={'white'} />}
        </Box>
        <Text>{props.text}</Text>
      </BoxSelect>
    </Container>
  );
};

export default SelectInformation;
