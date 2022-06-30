import styled from 'styled-components/native';

import { Colors } from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

interface IInput {
  width?: boolean;
}
export const Container = styled.View`
  width: ${(props: IInput) => `${props.width ? 50 : 100}%`};
  height: 60px;
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.white};
  margin-bottom: 15px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${Fonts.regular};
  color: rgba(0, 0, 0, 0.5);
`;

export const ContainerInput = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity``;
