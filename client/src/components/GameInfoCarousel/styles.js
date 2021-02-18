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
  min-width: 895px;
  max-width: 45%;
`;

export const MainGameInfoWrapper = styled.div`
  display: flex;
  height: 50%;
  width: 50%;
  justify-content: center;

  ::before {
    content: "";
    background-image: url("${(props) => props.backgroundImage}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 1500px 1000px;
    border-radius: 100%;
    position: absolute;
    top: 50px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: -1;
    margin: 10% 20% -1%;
    opacity: 0.06;
  }

`;

export const ImageCarouselWrapper = styled.div`

`;

export const SideInfoPanelWrapper = styled.div`
  padding-left: 7px;
`;
