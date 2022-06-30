import React from 'react';
import { Tutorial } from '../../components/Tutorial';
import { Container } from './styled';


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
