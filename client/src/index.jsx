import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';

import GameInfoCarousel from './components/GameInfoCarousel/GameInfoCarousel';
import GlobalStyles from './components/styles/theme/globalStyles';
import Theme from './components/styles/theme/theme';

if (module.hot) {
  module.hot.accept();
}

render(
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <GameInfoCarousel />
  </ThemeProvider>,
  document.getElementById('root'),
);
