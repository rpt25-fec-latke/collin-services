import React, { useContext } from 'react';
import GamesContext from '../../context';
import { CarouselImage } from './styles';

const ImageStrip = ({ image }) => {
  const { setMainImage } = useContext(GamesContext);
  return (
    <CarouselImage
      src={image}
      onClick={(e) => setMainImage(e.target.src)}
      data-testid="imageStrip"
    />
  );
};

export default ImageStrip;
