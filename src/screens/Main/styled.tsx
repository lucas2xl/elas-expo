import styled from 'styled-components/native';

import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background-color: ${Colors.pinkLight};
`;

export const Icon = styled.Image`
  height: 282px;
  width: 247px;
`;

export const ContainerFooter = styled.View`
  justify-content: center;
  align-items: center;
  margin: 100px 0 55px 0;
`;

export const Text = styled.Text`
  color: #8c8c8c;
  font-size: 16px;
  font-family: ${Fonts.regular};
  margin-bottom: 25px;
  padding: 0 20%;
  text-align: center;
`;
