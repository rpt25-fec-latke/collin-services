import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ThemeProvider } from 'styled-components';
import GamesContext from '../../context';
import Theme from '../styles/theme';
import SideInfoPanel from './SideInfoPanel';

const renderSideInfoPanel = (sidePanelImg, sidePanelInfo, setModal, recentReviews, allReviews) => {
  return render(
    <ThemeProvider theme={Theme}>
      <GamesContext.Provider value={{
        sidePanelImg,
        sidePanelInfo,
        setModal,
        recentReviews,
        allReviews,
      }}
      >
        <SideInfoPanel />
      </GamesContext.Provider>
    </ThemeProvider>,
  );
};

// MOCK DATA /////////////////////////////////////////////////
const sidePanelImg = 'url';
const sidePanelInfo = {
  short_description: 'lorem ipsum',
  release_date: 'January 31 1980 12:30',
  developer: 'Rockstar Games',
  publisher: 'Rockstar Games',
  popular_tags: ['sweet', 'sick', 'dude', 'far out', 'groovy'],
};
const setModal = jest.fn();
const recentReviews = {
  review: 'Positive',
  hovMessage: 'This game is well liked',
  total: 1000,
};
const allReviews = {
  review: 'Positive',
  hovMessage: 'This game is well liked',
  total: 10000,
};
// MOCK DATA /////////////////////////////////////////////////

test('renders SideInfoPanel component', () => {
  renderSideInfoPanel(
    sidePanelImg,
    sidePanelInfo,
    setModal,
    recentReviews,
    allReviews,
  );
});

test('The SideInfoPanel component should render the recent review info.', () => {
  const { getByTestId } = renderSideInfoPanel(
    sidePanelImg,
    sidePanelInfo,
    setModal,
    recentReviews,
    allReviews,
  );
  const recentReview = getByTestId('recentReview');

  expect(recentReview.children[1]).toHaveTextContent(recentReviews.review);
  expect(recentReview.children[1].children[0]).toHaveTextContent(recentReviews.hovMessage);
  expect(recentReview.children[2]).toHaveTextContent(recentReviews.total);
});

test('The SideInfoPanel component should render the overall review info.', () => {
  const { getByTestId } = renderSideInfoPanel(
    sidePanelImg,
    sidePanelInfo,
    setModal,
    recentReviews,
    allReviews,
  );
  const allReview = getByTestId('allReview');

  expect(allReview.children[1]).toHaveTextContent(allReviews.review);
  expect(allReview.children[1].children[0]).toHaveTextContent(allReviews.hovMessage);
  expect(allReview.children[2]).toHaveTextContent(allReviews.total);
});

test('The SideInfoPanel component should open the modal when the plus sign tag is clicked.', () => {
  const { getByTestId } = renderSideInfoPanel(
    sidePanelImg,
    sidePanelInfo,
    setModal,
    recentReviews,
    allReviews,
  );

  const modalTag = getByTestId('modalTag');
  fireEvent.click(modalTag);
  expect(setModal).toHaveBeenCalled();
});
