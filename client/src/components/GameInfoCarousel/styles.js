import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background: url('https://store.cloudflare.steamstatic.com/public/images/v6/app/game_page_background_shadow.png?v=2');
  background-position: bottom;
  background-repeat: no-repeat;
  padding: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 50%;
`;

export const MainGameInfoWrapper = styled.div`
  display: flex;

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
  /* display: flex;
  flex-direction: column; */
`;

export const SideInfoPanalWrapper = styled.div`
  /* display: flex; */
`;
