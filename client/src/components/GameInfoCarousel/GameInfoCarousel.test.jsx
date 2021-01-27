import React from 'react';
import { shallow } from 'enzyme';
import GameInfoCarousel from './GameInfoCarousel';

describe('GameInfoCarousel', () => {
  it('renders', () => {
    shallow(<GameInfoCarousel />);
  });
});
