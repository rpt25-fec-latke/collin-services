import React from 'react';
import { CarouselImageStrip } from './styles';

const ImageStrip = ({ image }) => (
  <div>
    <CarouselImageStrip src={image} alt="" />
  </div>
);

export default ImageStrip;
