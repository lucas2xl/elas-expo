import styled from 'styled-components/native';
import Colors from '../../styles/Colors';

export const Container = styled.ScrollView`
  flex: 1;
  margin-top: 15%;
  margin-left: 5%;
  margin-right: 5%;
`;

export const InputSeparator = styled.View`
  flex-direction: row;
`;

export const ContainerPicker = styled.View`
  width: 50%;
  height: 30px;
  background-color: ${Colors.white};
  justify-content: center;
  border-radius: 30px;
`;

export const ContainerFooter = styled.View`
  /* margin-top: 5%; */
`;
