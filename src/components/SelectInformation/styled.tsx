import styled from 'styled-components/native';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

interface ICheck {
  check?: boolean;
}

export const Container = styled.View`
  flex: 1;
  margin-bottom: 20px;
`;
export const BoxSelect = styled.TouchableOpacity`
  flex-direction: row;
  width: 80%;
`;

export const Box = styled.View`
  width: 20px;
  height: 20px;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.3);
  background-color: ${(props: ICheck) =>
    `${props.check ? Colors.primary : null}`};
  margin-right: 10px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: #000;
  font-size: 14px;
  font-family: ${Fonts.regular};
`;
