import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%auto;
  }
  * {
    padding: 0;
    margin: 0;
  }
  body {
    /* background-image: url('https://cdn.akamai.steamstatic.com/steam/apps/292030/page_bg_generated_v6b.jpg?t=1607418742'); */
    background-color: #1b2837;
    background-repeat: no-repeat;
    background-position: top;
    overflow-x: hidden;
  }
`;
export default GlobalStyle;
