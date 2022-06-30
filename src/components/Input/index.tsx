import React from 'react';
import { Container, Title, ContainerInput, Button } from './styled';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../styles/Colors';

interface ITextInputProps {
  children: React.ReactNode;
  title?: string;
  isIcon?: boolean;
  isRow?: boolean;
  isSecret?: boolean;
  onPress?: () => void;
}

export const Input = ({
  title,
  children,
  isIcon,
  isRow,
  isSecret,
  onPress,
}: ITextInputProps) => {
  return (
    <Container width={isRow}>
      <Title>{title}</Title>
      <ContainerInput>
        {children}
        {isIcon && (
          <Button onPress={onPress}>
            <Ionicons
              style={{ opacity: 0.5 }}
              name={isSecret ? 'eye-off' : 'eye'}
              size={25}
              color={isSecret ? Colors.primary : Colors.black}
            />
          </Button>
        )}
      </ContainerInput>
    </Container>
  );
};
