import React, { useContext } from 'react';
import ImageStrip from '../ImageStrip/ImageStrip';
import {
  ImageStripWrapper, MainImageWrapper, MainImage,
} from './styles';
import GamesContext from '../../context';

const ImageCarousel = () => {
  const { images, mainImage } = useContext(GamesContext);
  return (
    <>
      <MainImageWrapper>
        <MainImage src={mainImage} data-testid="mainImageDisplay" />
      </MainImageWrapper>
      <ImageStripWrapper>
        {images.map((image, i) => <ImageStrip key={i} image={image} />)}
      </ImageStripWrapper>
    </>
  );
};

export default ImageCarousel;
