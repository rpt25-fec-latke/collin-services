import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';

<<<<<<< HEAD
import GameInfoCarousel from './components/GameInfoCarousel/GameInfoCarousel';
import GlobalStyles from './components/styles/theme/globalStyles';
import Theme from './components/styles/theme/theme';

if (module.hot) {
  module.hot.accept();
}

=======
import GameInfoCarousel from './components/GameInfoCarousel';
import GlobalStyles from './components/styles/theme/globalStyles';
import Theme from './components/styles/theme/theme';

>>>>>>> main
render(
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <GameInfoCarousel />
  </ThemeProvider>,
<<<<<<< HEAD
  document.getElementById('gameInfoCarousel'),
=======
  document.getElementById('root'),
>>>>>>> main
);
