import React from 'react';
import { Title, Button, ButtonText, WeatherIn, WeatherOut } from './styled';
import { Ionicons } from '@expo/vector-icons';

export const Weather = () => {
  return (
    <WeatherOut>
      <WeatherIn>
        <Ionicons name="partly-sunny" size={24} color="white" />
        <Button disabled>
          <Title>22 °C</Title>
        </Button>
      </WeatherIn>
    </WeatherOut>
  );
};
