import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import GamesContext from '../../context';

import GameInfoCarousel from '../GameInfoCarousel/GameInfoCarousel';
import ImageCarousel from './ImageCarousel';

beforeAll(() => {
  render(<GameInfoCarousel />);
});

test('renders ImageCarousel component', () => {
  const images = ['url', 'url2'];
  const mainImage = images[0];
  render(
    <GamesContext.Provider value={{ images, mainImage }}>
      <ImageCarousel />
    </GamesContext.Provider>,
  );
});

test('The ImageCarousel component should contain the proper link for the main display image', () => {
  const images = ['https://image1.s3.com', 'https://image2.s3.com'];
  const mainImage = images[0];
  const { getByTestId } = render(
    <GamesContext.Provider value={{ images, mainImage }}>
      <ImageCarousel />
    </GamesContext.Provider>,
  );
  const img = getByTestId('mainImageDisplay');
  expect(img).toHaveAttribute('src', expect.stringContaining('.s3.'));
});

test.todo('create an alternate link for image links that are broken');
