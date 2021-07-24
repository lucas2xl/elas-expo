import styled from 'styled-components/native';
import Fonts from '../../styles/Fonts';

export const Container = styled.ScrollView`
  flex: 1;
 margin: 60px 5% 0 5%;
`;

export const Title = styled.Text`
  font-size: 15px;
  font-family: ${Fonts.regular};
  margin-bottom: 20px;
`;

export const ContainerContent = styled.View`
  flex: 1;
`;

export const ContentRow = styled.View`
  flex-direction: row;
`;
