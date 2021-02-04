import React, { useContext } from 'react';
import {
  SidePanalImg,
  ShortDescription,
  Container,
  Reviews,
} from './styles';
import GamesContext from '../../context';

const SideInfoPanal = () => {
  const { sidePanalImg, sidePanalInfo } = useContext(GamesContext);

  return (
    <Container>
      <SidePanalImg src={sidePanalImg} />
      <ShortDescription>{sidePanalInfo.short_description}</ShortDescription>
      <Reviews>Recent Reviews: </Reviews>
      <Reviews>All Reviews: </Reviews>
    </Container>
  );
};

export default SideInfoPanal;
