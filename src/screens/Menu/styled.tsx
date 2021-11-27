import styled from 'styled-components/native';
import { Colors } from '../../styles/Colors';

export const Container = styled.View`
  flex: 1;
  margin-top: 25%;
`;

export const ContainerHeader = styled.TouchableOpacity`
  border-top-width: 10px;
  border-bottom-width: 10px;
  border-color: ${Colors.pinkLight};
  justify-content: center;
  padding: 2% 5% 2% 5%;
`;
export const ContainerContent = styled.View`
  border-bottom-width: 10px;
  border-color: ${Colors.pinkLight};
  padding: 2% 5% 2% 5%;
`;
