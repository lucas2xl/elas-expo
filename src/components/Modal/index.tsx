import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Colors } from '../../styles/Colors';
import {
  Container,
  Card,
  Title,
  Subtitle,
  ContainerButton,
  ConfirmButton,
  CancelButton,
  ButtonText,
} from './styled';

interface IModal {
  title?: string;
  subtitle?: string;
  confirmText?: string;
  cancelText?: string;
  isModal?: boolean;
  loading?: boolean;

  onPressCancel?: () => void;
  onPressConfirm?: () => void;
}
const Modal = (props: IModal) => {
  return (
    <Container
      onPress={props.onPressCancel ? props.onPressCancel : props.onPressConfirm}
      activeOpacity={1}>
      <Card>
        <Title>{props.title}</Title>
        <Subtitle>{props.subtitle}</Subtitle>
        <ContainerButton>
          {props.onPressCancel && (
            <CancelButton onPress={props.onPressCancel}>
              <ButtonText>{props.cancelText}</ButtonText>
            </CancelButton>
          )}
          <ConfirmButton onPress={props.onPressConfirm}>
            {props.loading ? (
              <ActivityIndicator color={Colors.white} />
            ) : (
              <ButtonText>{props.confirmText}</ButtonText>
            )}
          </ConfirmButton>
        </ContainerButton>
      </Card>
    </Container>
  );
};

export default Modal;
