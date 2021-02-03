import styled from 'styled-components';

export const BackGroundWaterMark = styled.div`
  background: url('https://store.cloudflare.steamstatic.com/public/images/v6/app/game_page_background_shadow.png?v=2');
  background-position: bottom;
  padding: 20px;
  background-repeat: no-repeat;
  margin: 0px auto;
`;

export const MainGameInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const MainImageWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 10px;
`;

export const MainImage = styled.img`
  width: 33rem;
  height: 20rem;
`;

export const ImageStripWrapper = styled.div`
  display: flex;
`;

export const CarouselImageStrip = styled.img`
  width: 8rem;
  height: 8rem;
  padding: 5px;
`;
