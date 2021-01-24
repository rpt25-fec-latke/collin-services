import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';

import MainCarousel from './components/MainCarousel';
import GlobalStyles from './theme/globalStyles';
import Theme from './theme/theme';

render(
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <MainCarousel />
  </ThemeProvider>,
  document.getElementById('root'),
);
