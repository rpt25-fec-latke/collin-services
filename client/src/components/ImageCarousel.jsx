import React from 'react';
import ImageStrip from './ImageStrip';
import { ImageStripWrapper, MainImage } from './styles';

const ImageCarousel = ({ images }) => {
  return (
    <div>
      <MainImage>
        <img src={images[0]} alt="" />
      </MainImage>
      <ImageStripWrapper>
        {images.map((image, i) => <ImageStrip key={i} image={image} />)}
      </ImageStripWrapper>
    </div>
  );
};

export default ImageCarousel;
