import React from 'react';
import { CarouselImageStrip } from './styles';

const ImageStrip = ({ image, onImageClick }) => (
  <div>
    <CarouselImageStrip src={image} onClick={onImageClick} alt="" />
  </div>
);

export default ImageStrip;
