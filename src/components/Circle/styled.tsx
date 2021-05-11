import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

export const CircleOut = styled.View`
  width: ${`${Dimensions.get('window').height / 3}px`};
  height: ${`${Dimensions.get('window').height / 3}px`};
  border-radius: ${`${Dimensions.get('window').height / 2}px`};
  background-color: ${Colors.secondary};
  border-width: 5px;
  border-color: ${Colors.primary};
  justify-content: center;
  align-items: center;
`;

export const CircleIn = styled.View`
  width: ${`${Dimensions.get('window').height / 3.5}px`};
  height: ${`${Dimensions.get('window').height / 3.5}px`};
  border-radius: ${`${Dimensions.get('window').height / 3.5}px`};
  background-color: ${Colors.white};
  border-width: 5px;
  border-color: ${Colors.primary};
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${Fonts.regular};
`;

export const DayOfCircle = styled.Text`
  font-size: 20px;
  font-family: ${Fonts.bold};
`;

export const Button = styled.TouchableOpacity`
  width: 120px;
  height: 40px;
  border-radius: 20px;
  background-color: ${Colors.green};
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  font-family: ${Fonts.regular};
`;
