import React, { useRef, useState } from 'react';
import { Dimensions } from 'react-native';
import {
  Container,
  ContainerFooter,
  Title,
  Subtitle,
  CardContainer,
  CardImage,
  CardTextHeader,
  CardTextBody,
} from './styled';

import Button from '../Button';
import { Colors } from '../../styles/Colors';

interface ITutorial {
  title?: string;
  subtitle?: string;
  data?: any;
}
const SLIDER_WIDTH = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

export default function Tutorial(props: ITutorial) {
  const isCarousel = useRef(null);
  const [index, setIndex] = useState(0);

  const data: any = [
    {
      title: 'Aenean leo',
      body: 'Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
      imgUrl: 'https://picsum.photos/id/11/200/300',
    },
    {
      title: 'In turpis',
      body: 'Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ',
      imgUrl: 'https://picsum.photos/id/10/200/300',
    },
    {
      title: 'Lorem Ipsum',
      body: 'Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.',
      imgUrl: 'https://picsum.photos/id/12/200/300',
    },
  ];

  const CarouselCardItem = ({ item, index }: any) => {
    return (
      <CardContainer key={index}>
        <CardImage source={{ uri: item.imgUrl }} />
        <CardTextHeader>{item.title}</CardTextHeader>
        <CardTextBody>{item.body}</CardTextBody>
      </CardContainer>
    );
  };

  return (
    <Container>
      <ContainerFooter>
        <Title>{props.title}</Title>
        <Subtitle>{props.subtitle}</Subtitle>
        <Button color={Colors.primary} text={'AVANÇAR'} />
      </ContainerFooter>
    </Container>
  );
}
