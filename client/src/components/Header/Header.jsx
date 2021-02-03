import React, { useContext } from 'react';
import {
  GameTitle, CategoryTree, CategoryWrapper, GameTitleWrapper,
} from './styles';
import GamesContext from '../../context';

const Header = () => {
  const { gameTitle, gameGenre } = useContext(GamesContext);
  return (
    <>
      <CategoryTree>
        All Games
        {` > ${gameGenre} Games > ${gameTitle}`}
      </CategoryTree>
      <GameTitle>
        {gameTitle}
      </GameTitle>
    </>

  );
};

export default Header;
