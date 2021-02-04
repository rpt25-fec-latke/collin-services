import React, { useContext } from 'react';
import {
  GameTitle, CategoryTree, Wrapper,
} from './styles';
import GamesContext from '../../context';

const Header = () => {
  const { gameTitle, gameGenre } = useContext(GamesContext);
  return (
    <Wrapper>
      <CategoryTree>
        All Games
        {` > ${gameGenre} Games > ${gameTitle}`}
      </CategoryTree>
      <GameTitle>
        {gameTitle}
      </GameTitle>
    </Wrapper>

  );
};

export default Header;
