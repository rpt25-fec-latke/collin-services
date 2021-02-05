import React, { useContext } from 'react';
import GamesContext from '../../context';
import { CarouselImage } from './styles';

const ImageStrip = ({ image }) => {
  const { setMainImage, setImageFade, imageFade } = useContext(GamesContext);
  // let hi = 1;
  // console.log(imageFade, hi++);
  return (
    <CarouselImage
      src={image}
      onClick={(e) => {
        setMainImage(e.target.src);
        setImageFade(imageFade + 1);
      }}
      data-testid="imageStrip"
    />
  );
};

export default ImageStrip;
