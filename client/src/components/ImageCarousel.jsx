import React from 'react';
import ImageStrip from './ImageStrip';
import { ImageStripWrapper, MainImageWrapper, MainImage } from './styles';

const ImageCarousel = ({ images, mainImage, onImageClick }) => {
  return (
    <div>
      <MainImageWrapper>
        <MainImage src={mainImage} alt="" />
      </MainImageWrapper>
      <ImageStripWrapper>
        {images.map((image, i) => <ImageStrip key={i} image={image} onImageClick={onImageClick} />)}
      </ImageStripWrapper>
    </div>
  );
};

export default ImageCarousel;
