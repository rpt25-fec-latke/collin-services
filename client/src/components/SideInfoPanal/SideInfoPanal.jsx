import React, { useContext } from 'react';
import {
  SidePanalImg,
  ShortDescription,
  Container,
} from './styles';
import GamesContext from '../../context';

const SideInfoPanal = () => {
  const { sidePanalImg, sidePanalInfo } = useContext(GamesContext);

  return (
    <Container>
      <SidePanalImg src={sidePanalImg} />
      <ShortDescription>{sidePanalInfo.short_description}</ShortDescription>
    </Container>
  );
};

export default SideInfoPanal;
