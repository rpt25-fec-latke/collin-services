import styled from 'styled-components';

export const BackGroundWaterMark = styled.div`
  background: url('https://store.cloudflare.steamstatic.com/public/images/v6/app/game_page_background_shadow.png?v=2');
  background-position: bottom;
  padding: 20px;
  background-repeat: no-repeat;
  margin: 0px auto;
`;

export const MainGameInfoWrapper = styled.div`
  margin: 12px 50px;
  padding: 0px 100px;


::before {
    content: "";
    display: flex;
    background: url("${(props) => props.backgroundImage}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 1200px 470px;
    position: absolute;
    z-index: -1;
    top: -150px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    /* width: 100%; */
    opacity: 0.16;
}
`;
