import styled from 'styled-components/native';

import { Colors } from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

interface IColors {
  color?: string;
}

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  margin: 3% 0% 3% 0%;
`;
export const ContainerIcon = styled.View`
  height: 40px;
  width: 40px;
  border-radius: 10px;
  background-color: ${(props: IColors) => props.color || Colors.orange};
  margin-right: 10px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: #000;
  font-size: 16px;
  font-family: ${Fonts.regular};
  margin: 10px;
`;
