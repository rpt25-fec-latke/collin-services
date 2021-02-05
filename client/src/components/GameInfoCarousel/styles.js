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

export const BGI = styled.div`
  /* display: block;
  margin-left: auto;
  margin-right: auto;
  position:relative;
  z-index: -1;
  width: 50%;
  width: 1270px;
  height: 715px; */
  /* background-image: url("${(props) => props.backgroundImage}");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center; */
`;

export const MainGameInfoWrapper = styled.div`
  display: flex;
  height: 50%;
  width: 50%;
  justify-content: center;
  z-index: 1;

::before {
    border-radius: 1px;
    border-width: thick;
    content: "";
    background: url("${(props) => props.backgroundImage}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 1270px 715px;
    position: absolute;
    z-index: -1;
    top: -100px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.04;

}
`;

export const ImageCarouselWrapper = styled.div`

`;

export const SideInfoPanelWrapper = styled.div`
  padding-left: 7px;
`;
