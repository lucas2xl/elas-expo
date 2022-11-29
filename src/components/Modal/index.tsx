import { useIsFocused } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Colors } from '../../styles/Colors';
import { animation } from '../../utils/amimation';
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
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  confirmText?: string;
  cancelText?: string;
  isModal?: boolean;
  loading?: boolean;
  isFull?: boolean;

  onPressCancel?: () => void;
  onPressConfirm?: () => void;
}
export const Modal = (props: IModal) => {
  const isFocused = useIsFocused();
  const opacity = useSharedValue(0);
  const top = useSharedValue(-200);

  useEffect(() => {
    if (isFocused) {
      opacity.value = 1;
      top.value = 0;
    }
  }, [isFocused]);

  const animationStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, animation.config),
      top: withTiming(top.value, animation.config),
    };
  });

  return (
    <Container style={animationStyle}>
      <Card isFull={props.isFull}>
        {props.title && <Title>{props.title}</Title>}
        {props.subtitle && (
          <ScrollView showsVerticalScrollIndicator>
            <Subtitle>{props.subtitle}</Subtitle>
          </ScrollView>
        )}

        {props.children}

        <ContainerButton>
          {props.onPressCancel && (
            <CancelButton
              onPress={() => {
                opacity.value = 0;
                top.value = -200;
                setTimeout(() => {
                  props.onPressCancel!();
                }, 1000);
              }}>
              <ButtonText>{props.cancelText}</ButtonText>
            </CancelButton>
          )}
          {props.onPressConfirm && (
            <ConfirmButton onPress={props.onPressConfirm}>
              {props.loading ? (
                <ActivityIndicator color={Colors.white} />
              ) : (
                <ButtonText>{props.confirmText}</ButtonText>
              )}
            </ConfirmButton>
          )}
        </ContainerButton>
      </Card>
    </Container>
  );
};
