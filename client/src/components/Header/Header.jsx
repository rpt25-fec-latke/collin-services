import React, { useContext } from 'react';
import {
  GameTitle, CategoryTree, HeaderWrapper, Category,
} from './styles';
import GamesContext from '../../context';

const Header = () => {
  const { gameTitle, gameGenre } = useContext(GamesContext);
  return (
    <HeaderWrapper>
      <CategoryTree>
        <Category>All Games</Category>
        {' > '}
        <Category>{gameGenre}</Category>
        {' > '}
        <Category>{gameTitle}</Category>
      </CategoryTree>
      <GameTitle>
        {gameTitle}
      </GameTitle>
    </HeaderWrapper>

  );
};

export default Header;
