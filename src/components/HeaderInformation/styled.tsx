import styled from 'styled-components/native';

import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  width: 90%;
  align-self: center;
`;

export const ContainerHeader = styled.View`
  margin-top: 50px;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-family: ${Fonts.bold};
  color: ${Colors.primary};
  margin-bottom: 20px;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  font-family: ${Fonts.regular};
  text-align: left;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 40px;
`;