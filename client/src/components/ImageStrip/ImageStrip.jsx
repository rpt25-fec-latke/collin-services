import React, { useContext } from 'react';
import GamesContext from '../../context';
import { CarouselImageStrip, ImageStripWrapper } from './styles';

const ImageStrip = ({ image }) => {
  const { setMainImage } = useContext(GamesContext);
  return (
    <ImageStripWrapper>
      <CarouselImageStrip
        src={image}
        onClick={(e) => setMainImage(e.target.src)}
        data-testid="imageStrip"
      />
    </ImageStripWrapper>
  );
};

export default ImageStrip;
