import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 890px;
  align-items: flex-start;
  flex-grow: 3;
  z-index: 1;
  position:relative
`;

export const GameTitle = styled.div`
  font-family: "Motiva Sans", sans-serif;
  font-size: 26px;
  line-height: 32px;
  color: #ffffff;
  position: sticky;
`;

export const CategoryTree = styled.div`
  display: flex;
  font-family: "Motiva Sans", sans-serif;
  font-size: 12px;
  color: #56707f;
  z-index: 2;
  position:relative
`;

export const Category = styled.div`
  padding: 0px 3px;
  &:hover {
    color: #ffffff;
    cursor: pointer;
  }
  z-index: 4;
  position:relative
`;
