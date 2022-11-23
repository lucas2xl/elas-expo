import styled from 'styled-components/native';
import { Colors } from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

interface IProfile {
  noWidth?: boolean;
}

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  padding-bottom: ${(props: IProfile) => `${props.noWidth ? 0 : 15}px`};
  border-bottom-width: ${(props: IProfile) => `${props.noWidth ? 0 : 1}px`};
  border-bottom-color: ${Colors.white};
  margin-bottom: ${(props: IProfile) => `${props.noWidth ? 0 : 15}px`};
`;

export const ContainerIcon = styled.View`
  width: 90px;
  height: 90px;
  border-radius: 45px;
  background-color: ${Colors.green};
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;

export const ChangePhoto = styled.TouchableOpacity`
  position: absolute;
  right: 0px;
  bottom: 5px;
  background-color: ${Colors.primary};
  width: 26px;
  height: 26px;
  border-radius: 13px;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.Text`
  font-size: 26px;
  font-family: ${Fonts.bold};
  margin-left: 15px;
`;
