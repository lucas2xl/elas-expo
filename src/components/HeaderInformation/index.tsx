import React from 'react';
import { ContainerHeader, Title, SubTitle } from './styled';

interface IHeaderInformation {
  title: string;
  subtitle?: string;
}

const HeaderInformation = (props: IHeaderInformation) => {
  return (
    <ContainerHeader>
      <Title>{props.title}</Title>
      <SubTitle>{props.subtitle}</SubTitle>
    </ContainerHeader>
  );
};

export default HeaderInformation;
