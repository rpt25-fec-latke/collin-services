import styled from 'styled-components';

export const MainImageWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const MainImage = styled.img`
  width: 38rem;
  height: 21rem;
`;

export const ImageStripWrapper = styled.div`
  display: flex;
  width: 50%;
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
