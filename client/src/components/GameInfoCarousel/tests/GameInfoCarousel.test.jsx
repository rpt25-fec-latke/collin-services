import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom';

import GameInfoCarousel from '../GameInfoCarousel';

const server = setupServer(rest.get('/game_carousel_info', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json([{ video_photo_carousel: ['url', 'url2'] }]),
  );
}));

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('GameInfoCarousel Component', () => {
  test('renders component', () => {
    render(<GameInfoCarousel />);
  });
});

test('api', async () => {
  const { getByText, getByTestId } = render(<GameInfoCarousel />);

  expect(getByText(/Loading.../i)).toBeInTheDocument();

  await waitFor(() => {
    expect(getByTestId('images-rendering')).toBeInTheDocument();
  });
});
