import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { ThemeProvider } from 'styled-components';
import GameInfoCarousel from './GameInfoCarousel';
import Theme from '../styles/theme';

const apiObj = {
  gameInfo: [
    {
      video_photo_carousel: ['url', 'url2'],
      game_id: 1,
      popular_tags: ['cool beans', 'sweet'],
    },
  ],
  reviewsInfo: {
    reviewStats: {
      overallReviewsRatingGroupHoverMessage: 'hover message',
      recentReviewsRatingGroupHoverMessage: 'hover message',
      totalReviewCount: 20,
      totalRecentReviewCount: 5,
      overallRatingGroup: { ratingGroup: 'Negative' },
      recentRatingGroup: { ratingGroup: 'Sick' },
    },
  },
};

const server = setupServer(rest.get('/game_carousel_info', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json(apiObj),
  );
}));

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders GameInfoCarousel  component', () => {
  render(<GameInfoCarousel />);
});

test('renders the ImageCarousel component when game info is retrieved', async () => {
  const { getByTestId } = render(
    <ThemeProvider theme={Theme}>
      <GameInfoCarousel />
    </ThemeProvider>,
  );

  expect(getByTestId('loading')).toBeInTheDocument();

  await waitFor(() => {
    expect(getByTestId('images-rendering')).toBeInTheDocument();
  });
});

test('does not render the ImageCarousel component when game info is not retrieved', async () => {
  server.use(rest.get('/game_carousel_info', (req, res, ctx) => {
    return res(
      ctx.status(500),
    );
  }));

  const { getByTestId } = render(<GameInfoCarousel />);

  expect(getByTestId('loading')).toBeInTheDocument();

  await waitFor(() => {
    expect(getByTestId('loading')).toBeInTheDocument();
  });
});
