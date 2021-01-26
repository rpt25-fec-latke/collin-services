import React, { useContext } from 'react';
import GamesContext from '../../context';
import { CarouselImageStrip } from './styles';

const ImageStrip = ({ image }) => {
  const { mainImageDispatch } = useContext(GamesContext);
  return (
    <div>
      <CarouselImageStrip src={image} onClick={(e) => mainImageDispatch({ type: 'CHANGE_MAIN_IMAGE', mainImage: e.target.src })} alt="" />
    </div>
  );
};

export default ImageStrip;
