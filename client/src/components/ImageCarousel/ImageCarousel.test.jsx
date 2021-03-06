import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import GamesContext from '../../context';

import ImageCarousel from './ImageCarousel';

const renderImageCarousel = (images, mainImage) => {
  return render(
    <GamesContext.Provider value={{ images, mainImage }}>
      <ImageCarousel />
    </GamesContext.Provider>,
  );
};

test('renders ImageCarousel component', () => {
  const images = ['url', 'url2'];
  const mainImage = images[0];
  renderImageCarousel(images, mainImage);
});

test('The ImageCarousel component should contain the proper link for the main display image', () => {
  const images = ['https://image1.s3.com', 'https://image2.s3.com'];
  const mainImage = images[0];
  const { getByTestId } = renderImageCarousel(images, mainImage);
  const img = getByTestId('mainImageDisplay');
  expect(img).toHaveAttribute('src', expect.stringContaining('.s3.'));
});

test.todo('create an alternate link for image links that are broken');
