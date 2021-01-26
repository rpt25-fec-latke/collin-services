import React, { useContext } from 'react';
import ImageStrip from '../ImageStrip/ImageStrip';
import { ImageStripWrapper, MainImageWrapper, MainImage } from './styles';
import GamesContext from '../../context';

const ImageCarousel = () => {
  const { images, mainImage } = useContext(GamesContext);
  return (
    <div>
      <MainImageWrapper>
        <MainImage src={mainImage} alt="" />
      </MainImageWrapper>
      <ImageStripWrapper>
        {images.map((image, i) => <ImageStrip key={i} image={image} />)}
      </ImageStripWrapper>
    </div>
  );
};

export default ImageCarousel;
