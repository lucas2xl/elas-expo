import styled from 'styled-components/native';
import { Colors } from '../../styles/Colors';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  width: 90%;
  align-self: center;
  margin-top: 50px;
`;

export const ContainerInputs = styled.ScrollView`
  margin-top: 10px;
`;

export const TextError = styled.Text`
  font-size: 14px;
  color: ${Colors.red};
  margin: 10px 0 20px 0;
`;
