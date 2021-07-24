import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../styles/Colors';

export const Container = styled.ScrollView`
  flex: 1;
  margin: 100px 5% 0 5%;
`;

export const InputSeparator = styled.View`
  flex-direction: row;
`;

export const ContainerPicker = styled.View`
  width: 50%;
  height: 30px;
  background-color: ${Platform.OS === 'ios' ? 'transparent' :Colors.white};
  justify-content: center;
  border-radius: 10px;
  padding: ${`${Platform.OS === 'ios' ? 0 : 20}px`};
`;

export const ContainerFooter = styled.View`
`;
