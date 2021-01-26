import React, { useContext } from 'react';
import GamesContext from '../../context';
import { CarouselImageStrip, ImageStripWrapper } from './styles';

const ImageStrip = ({ image }) => {
  const { mainImageDispatch } = useContext(GamesContext);
  return (
    <ImageStripWrapper>
      <CarouselImageStrip src={image} onClick={(e) => mainImageDispatch({ type: 'CHANGE_MAIN_IMAGE', mainImage: e.target.src })} alt="" />
    </ImageStripWrapper>
  );
};

export default ImageStrip;
