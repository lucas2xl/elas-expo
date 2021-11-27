import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { Colors } from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${Colors.pinkLight};
`;

export const HeaderContainer = styled.View`
  margin: 40px 20px 0 20px;
  flex-direction: row;
  align-items: center;
  text-align: center;
`;

export const Title = styled.Text`
  flex: 1;
  font-size: 26px;
  font-family: ${Fonts.bold};
  color: ${Colors.primary};
  text-align: center;
  padding-left: 30px;
`;

export const ContentContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.Image`
  width: 63px;
  height: 72px;
  margin-bottom: 15%;
`;

export const ContainerFooter = styled.View`
  align-items: center;
  padding-bottom: 25px;
`;
