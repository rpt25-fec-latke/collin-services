import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

import ImageCarousel from '../ImageCarousel/ImageCarousel';
import { MainGameInfoWrapper, BackGroundWaterMark } from './styles';
import { carouselReducer, mainImageReducer, sliderReducer } from '../../reducers';
import GamesContext from '../../context';

const GameInfoCarousel = () => {
  const [currentGameId] = useState(7);
  const [backgroundImage, setBackgroundImage] = useState('');
  const [images, carouselDispatch] = useReducer(carouselReducer, []);
  const [mainImage, mainImageDispatch] = useReducer(mainImageReducer, '');
  const [slider, sliderDispatch] = useReducer(sliderReducer, '0');
  useEffect(() => {
    axios.get(`/game_carousel_info?id=${currentGameId}`)
      .then(({ data }) => {
        setBackgroundImage(data[0].video_photo_carousel[10]);
        carouselDispatch({
          type: 'POPULATE_IMAGE_CAROUSEL',
          images: data[0].video_photo_carousel,
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
      images, carouselDispatch, mainImage, mainImageDispatch, slider, sliderDispatch,
    }}
    >
      <BackGroundWaterMark>
        <MainGameInfoWrapper backgroundImage={backgroundImage}>
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
