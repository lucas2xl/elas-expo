import React from 'react';
import { Container } from './styled';

import Tutorial from '../../components/Tutorial';

const TutorialOne = () => {
  return (
    <Container>
      <Tutorial
        title={'Sua Segurança'}
        subtitle={
          'Sua localização precisa estar acionada durante todo o momento da emergência.'
        }
      />
    </Container>
  );
};

export default TutorialOne;
