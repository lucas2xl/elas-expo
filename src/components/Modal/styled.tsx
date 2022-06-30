import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

import { Colors } from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

export const Container = styled(Animated.View)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;
export const Card = styled.View`
  width: 90%;
  height: 25%;
  background-color: #fff;
  border-radius: 25px;
  justify-content: space-around;
  padding: 5%;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${Fonts.regular};
  text-align: center;
  align-self: center;
  margin-left: 15%;
  margin-right: 15%;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  font-family: ${Fonts.regular};
  align-self: center;
  padding-top: 10px;
`;

export const TextInput = styled.TextInput`
  font-size: 24px;
  font-family: ${Fonts.regular};
  color: ${Colors.primary};
  letter-spacing: 10px;
  flex:1;
`;
export const InputWrapper = styled.View`
  border: 1px solid ${Colors.orange};
  border-radius: 10px;
  height: 60px;
  width: 200px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;

export const ContainerButton = styled.View`
  flex-direction: row;
  width: 90%;
  align-self: center;
  justify-content: space-around;
`;

export const ConfirmButton = styled.TouchableOpacity`
  width: 40%;
  height: 35px;
  background-color: ${Colors.primary};
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`;

export const CancelButton = styled.TouchableOpacity`
  width: 40%;
  height: 35px;
  background-color: rgba(241, 138, 109, 0.6);
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  font-family: ${Fonts.regular};
  color: #ffffff;
`;
