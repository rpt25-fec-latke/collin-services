import React, { useContext } from 'react';
import ImageStrip from '../ImageStrip/ImageStrip';
import {
  ImageStripWrapper, MainImage, Container,
} from './styles';
import GamesContext from '../../context';

const ImageCarousel = () => {
  const { images, mainImage } = useContext(GamesContext);

  return (
    <Container>
      <MainImage
        src={mainImage}
        data-testid="mainImageDisplay"
      />
      <ImageStripWrapper>
        {images.map((image, i) => <ImageStrip key={i} image={image} />)}
      </ImageStripWrapper>
    </Container>
  );
};

export default ImageCarousel;
