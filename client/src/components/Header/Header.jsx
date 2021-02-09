import React, { useContext } from 'react';
import {
  GameTitle, CategoryTree, Wrapper, Category,
} from './styles';
import GamesContext from '../../context';

const Header = () => {
  const { gameTitle, gameGenre } = useContext(GamesContext);
  return (
    <Wrapper>
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
    </Wrapper>

  );
};

export default Header;
