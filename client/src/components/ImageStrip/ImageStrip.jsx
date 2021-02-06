import React, { useContext } from 'react';
import GamesContext from '../../context';
import { CarouselImage } from './styles';

const ImageStrip = ({ image }) => {
  const { setMainImage, setStopPicAuto } = useContext(GamesContext);
  return (
    <CarouselImage
      src={image}
      onClick={(e) => {
        setMainImage(e.target.src);
        setStopPicAuto(true);
      }}
      data-testid="imageStrip"
    />
  );
};

export default ImageStrip;
