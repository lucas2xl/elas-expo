import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Fonts from '../../styles/Fonts';

const SLIDER_WIDTH = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  background-color: #fff;
`;

export const ContainerFooter = styled.View`
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 55px 0px;
`;
export const Title = styled.Text`
  font-size: 30px;
  font-family: ${Fonts.bold};
  color: #000;
`;
export const Subtitle = styled.Text`
  font-size: 15px;
  font-family: ${Fonts.regular};
  color: rgba(0, 0, 0, 0.6);
  padding: 0% 20%;
  text-align: center;
  margin-bottom: 25px;
  margin-top: 15px;
`;

export const CardContainer = styled.View`
  width: ${`${ITEM_WIDTH}px`};
  height: 80%;
  border-radius: 8px;
  padding-bottom: 40px;
  background-color: #fff;
  margin-top: 20%;
`;

export const CardImage = styled.Image`
  flex: 1;
`;

export const CardTextHeader = styled.Text`
  color: #222;
  font-size: 28px;
  font-family: ${Fonts.bold};
  padding-left: 20px;
  padding-top: 20px;
`;

export const CardTextBody = styled.Text`
  color: #222;
  font-family: ${Fonts.regular};
  font-size: 18px;
  padding-left: 20px;
  padding-top: 20px;
`;
