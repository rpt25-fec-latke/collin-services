import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

import { MainGameInfoWrapper, BackGroundWaterMark } from './styles';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import { carouselReducer, mainImageReducer } from '../../reducers';
import GamesContext from '../../context';

const GameInfoCarousel = () => {
  const [currentGameId] = useState(7);
  const [images, carouselDispatch] = useReducer(carouselReducer, []);
  const [mainImage, mainImageDispatch] = useReducer(mainImageReducer, '');
  useEffect(() => {
    axios.get(`/game_carousel_info?id=${currentGameId}`)
      .then(({ data }) => {
        carouselDispatch({
          type: 'POPULATE_IMAGE_CAROUSEL',
          images: data[0].video_photo_carousel.slice(4),
        });
        mainImageDispatch({
          type: 'CHANGE_MAIN_IMAGE',
          mainImage: data[0].video_photo_carousel[0],
        });
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <GamesContext.Provider value={{
      images, carouselDispatch, mainImage, mainImageDispatch,
    }}
    >
      <BackGroundWaterMark>
        <MainGameInfoWrapper>
          {!images.length ? <div />
            : (
              <ImageCarousel />
            )}
        </MainGameInfoWrapper>
      </BackGroundWaterMark>
    </GamesContext.Provider>
  );
};

export default GameInfoCarousel;
