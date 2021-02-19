import styled from 'styled-components';

export const ImageCarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 4;
`;

export const MainImage = styled.img`
  width: 485px;
  height: 341px;
  border-left: 30px solid black;
  border-right: 30px solid black;
  margin-bottom: 2px;
  transition: visibility 0.5s, opacity 0.5s;
`;

export const ImageStripWrapper = styled.div`
  display: flex;
  width: 545px;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-thumb {
  background: #162530;
  border-radius: 10px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-button {
    background: #407899;
}
`;
