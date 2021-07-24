import styled from 'styled-components/native';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;

export const ContainerIcon = styled.View`
  flex: 1;
  justify-content: center;
`;
export const Icon = styled.Image`
  width: 63px;
  height: 72px;
`;
export const ContainerCenter = styled.View`
  align-items: center;
`;
export const SignInButton = styled.TouchableOpacity``;
export const SignInText = styled.Text`
  font-size: 26px;
  font-family: ${Fonts.bold};
  color: ${Colors.primary};
`;
export const SignUpButton = styled.TouchableOpacity``;
export const SignUpText = styled.Text`
  font-size: 16px;
  font-family: ${Fonts.regular};
  color: rgba(0, 0, 0, 0.6);
  padding: 10px;
`;
export const ContainerFooter = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;
