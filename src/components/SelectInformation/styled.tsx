import styled from 'styled-components/native';
import { Colors } from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

interface ICheck {
  check?: boolean;
  color?: string;
}

export const Container = styled.View`
  flex: 1;
  margin-bottom: 20px;
`;
export const BoxSelect = styled.TouchableOpacity`
  flex-direction: row;
  width: 80%;
  align-items: center;
`;

export const Box = styled.View`
  width: 20px;
  height: 20px;
  border-width: 1px;
  border-color: ${(props: ICheck) =>
    `${props.check ? 'transparent' : Colors.black}`};
  background-color: ${(props: ICheck) =>
    `${props.check ? Colors.primary : null}`};
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const Text = styled.Text`
  color: ${(props: ICheck) => (props.color ? props.color : Colors.black)};
  font-size: 14px;
  font-family: ${Fonts.regular};
`;
