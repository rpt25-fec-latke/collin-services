import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import GameInfoCarousel from './GameInfoCarousel';

const server = setupServer(rest.get('/game_carousel_info', (req, res, ctx) => {
  console.log('in here just fine');
  return res(
    ctx.status(200),
    ctx.json({ gameInfo: [{ video_photo_carousel: ['url', 'url2'] }], reviewsInfo: null }),
  );
}));

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders GameInfoCarousel  component', () => {
  render(<GameInfoCarousel />);
});

test('renders the ImageCarousel component when game info is retrieved', async () => {
  const { getByTestId } = render(<GameInfoCarousel />);

  expect(getByTestId('loading')).toBeInTheDocument();

  await waitFor(() => {
    expect(getByTestId('images-rendering')).toBeInTheDocument();
  });
});

// test('does not render the ImageCarousel component when game info is not retrieved', async () => {
//   server.use(rest.get('/game_carousel_info', (req, res, ctx) => {
//     return res(
//       ctx.status(500),
//     );
//   }));

//   const { getByTestId } = render(<GameInfoCarousel />);

//   expect(getByTestId('loading')).toBeInTheDocument();

//   await waitFor(() => {
//     expect(getByTestId('loading')).toBeInTheDocument();
//   });
// });
