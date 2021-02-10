import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import GamesContext from '../../context';

import GameInfoCarousel from '../GameInfoCarousel/GameInfoCarousel';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import ImageStrip from './ImageStrip';

beforeAll(() => {
  render(<GameInfoCarousel />);
  const images = ['https://image1.s3.com', 'https://image2.s3.com'];
  const mainImage = images[0];
  render(
    <GamesContext.Provider value={{ images, mainImage }}>
      <ImageCarousel />
    </GamesContext.Provider>,
  );
});

const renderImageStrip = (setMainImage, setStopPicAuto) => {
  return render(
    <GamesContext.Provider value={{ setMainImage, setStopPicAuto }}>
      <ImageStrip />
    </GamesContext.Provider>,
  );
};

test('should render ImageStrip Component', () => {
  const setMainImage = jest.fn();
  const setStopPicAuto = jest.fn();
  renderImageStrip(setMainImage, setStopPicAuto);
});

test('clicking an image on the carousel should be set to the new main display image', () => {
  const setMainImage = jest.fn();
  const setStopPicAuto = jest.fn();
  const { getByTestId } = renderImageStrip(setMainImage, setStopPicAuto);
  const img = getByTestId('imageStrip');
  fireEvent.click(img);
  expect(setMainImage).toHaveBeenCalled();
  expect(setStopPicAuto).toHaveBeenCalled();
});
