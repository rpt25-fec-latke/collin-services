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
    background: linear-gradient(to right, #2d4e61, #1b2839);
    overflow: auto;
  }
`;
export default GlobalStyle;
