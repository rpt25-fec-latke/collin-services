import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import GamesContext from '../../context';

import ImageStrip from './ImageStrip';

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
