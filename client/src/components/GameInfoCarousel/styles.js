import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 20px;
  margin-top: 150px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BackgroundWaterMark = styled.div`
  display: flex;
  justify-content: center;
  background: url('https://store.cloudflare.steamstatic.com/public/images/v6/app/game_page_background_shadow.png?v=2');
  background-position: bottom;
  background-repeat: no-repeat;
  min-width: 885px;
  max-width: 50%;
`;

export const MainGameInfoWrapper = styled.div`
  display: flex;
  height: 50%;
  width: 50%;
  justify-content: center;

::before {
    content: "";
    background: url("${(props) => props.backgroundImage}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 2000px 1500px;
    border-radius: 5000px;
    position: absolute;
    z-index: -1;
    top: -150px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.04;
}
`;

export const ImageCarouselWrapper = styled.div`

`;

export const SideInfoPanalWrapper = styled.div`
  padding-left: 7px;
`;
