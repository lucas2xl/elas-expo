import React from 'react';

import { Container, Title, TextInput, ContainerInput, Button } from './styled';
import { Ionicons } from '@expo/vector-icons';

interface IInput {
  value: any;
  keyboardType?: any;
  title: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  isIcon?: boolean;
  isRow?: boolean;
  iconName?: string;
  onChangeText: (text: string) => void;
  onPress?: () => void;
}
const Input = (props: IInput) => {
  return (
    <Container width={props.isRow}>
      <Title>{props.title}</Title>
      <ContainerInput>
        <TextInput
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={(text) => props.onChangeText(text)}
          keyboardType={props.keyboardType}
          secureTextEntry={props.secureTextEntry}
        />

        {props.isIcon && (
          <Button onPress={props.onPress}>
            <Ionicons
              style={{ opacity: 0.5 }}
              name={props.iconName ? props.iconName : ''}
              size={25}
            />
          </Button>
        )}
      </ContainerInput>
    </Container>
  );
};

export default Input;
