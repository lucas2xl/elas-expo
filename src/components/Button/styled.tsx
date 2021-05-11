import styled from 'styled-components/native';

import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

interface IColors {
  color?: string;
  textColor?: string;
}

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 45px;
  width: 290px;
  border-radius: 20px;
  border-width: 1px;
  border-color: #eaecef;
  background-color: ${(props: IColors) => props.color || Colors.primary};
`;
export const Image = styled.Image`
  width: 20px;
  height: 20px;
`;
export const Text = styled.Text`
  color: ${(props: IColors) => props.textColor || '#ffffff'};
  font-size: 15px;
  font-family: ${Fonts.regular};
  margin: 10px;
`;
