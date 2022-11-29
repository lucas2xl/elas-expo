import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import { Colors } from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

export const WeatherOut = styled.View`
  width: ${`${Dimensions.get('window').height / 3}px`};
  height: ${`${Dimensions.get('window').height / 3}px`};
  border-radius: ${`${Dimensions.get('window').height / 2}px`};
  background-color: ${Colors.black};
  border-width: 5px;
  border-color: ${Colors.black};
  justify-content: center;
  align-items: center;
`;

export const WeatherIn = styled.View`
  width: ${`${Dimensions.get('window').height / 3.5}px`};
  height: ${`${Dimensions.get('window').height / 3.5}px`};
  border-radius: ${`${Dimensions.get('window').height / 3.5}px`};
  background-color: ${Colors.black};
  border-width: 5px;
  border-color: ${Colors.black};
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${Fonts.regular};
  color: ${Colors.black};
`;

export const DayOfWeather = styled.Text`
  font-size: 20px;
  font-family: ${Fonts.bold};
`;

export const Button = styled.TouchableOpacity`
  width: 120px;
  height: 40px;
  border-radius: 20px;
  background-color: ${Colors.white};
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  font-family: ${Fonts.regular};
`;
