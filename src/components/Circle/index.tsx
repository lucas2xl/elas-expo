import React, { useState, useEffect } from 'react';

import {
  CircleOut,
  CircleIn,
  Title,
  DayOfCircle,
  Button,
  ButtonText,
} from './styled';

const day = new Date().getDate();

export const Circle = () => {
  const [dayOfCicle, setDayOfCicle] = useState(day);

  useEffect(() => {
    setDayOfCicle(day);
  }, []);

  return (
    <CircleOut>
      <CircleIn>
        <Title>Dia do ciclo</Title>
        <DayOfCircle>{dayOfCicle}</DayOfCircle>
        <Button>
          <ButtonText>Término do ciclo</ButtonText>
        </Button>
      </CircleIn>
    </CircleOut>
  );
};

