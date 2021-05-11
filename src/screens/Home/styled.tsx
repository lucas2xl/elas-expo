import styled from 'styled-components/native';

import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${Colors.pinkLight};
`;

export const HeaderContainer = styled.View`
  padding-right: 5%;
  margin-top: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  padding-right: 30%;
  font-size: 26px;
  font-family: ${Fonts.bold};
  color: ${Colors.primary};
`;

export const ContentContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

export const Icon = styled.Image`
  width: 63px;
  height: 72px;
  margin-top: 10%;
  margin-bottom: 15%;
`;

export const ContainerFooter = styled.View`
  align-items: center;
  padding-bottom: 25px;
`;
