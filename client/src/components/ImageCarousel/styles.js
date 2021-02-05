import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 4;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
`;

export const MainImage = styled.img`
  width: 485px;
  height: 341px;
  border-left: 30px solid black;
  border-right: 30px solid black;
  margin-bottom: 2px;



`;
// ${(props) => props.imageFade > 0 && `animation: 2s ${fadeIn} ease-in`}

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
