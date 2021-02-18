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
    background-color: #1b2837;
    overflow-x: hidden;
  }
`;
export default GlobalStyle;
