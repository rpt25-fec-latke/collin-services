import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

import ImageCarousel from '../ImageCarousel/ImageCarousel';
import { MainGameInfoWrapper, BackGroundWaterMark } from './styles';
import { carouselReducer, mainImageReducer, sliderReducer } from '../../reducers';
import GamesContext from '../../context';

console.log('soo what?');
const GameInfoCarousel = () => {
  const [currentGameId] = useState(7);
  const [backgroundImage, setBackgroundImage] = useState('');
  const [images, carouselDispatch] = useReducer(carouselReducer, []);
  const [mainImage, mainImageDispatch] = useReducer(mainImageReducer, '');
  const [slider, sliderDispatch] = useReducer(sliderReducer, '0');

  useEffect(() => {
    const source = axios.CancelToken.source();
    axios.get(`/game_carousel_info?id=${currentGameId}`, {
      cancelToken: source.token,
    })
      .then(({ data: [{ video_photo_carousel: imageCarousel }] }) => {
        setBackgroundImage(imageCarousel[10]);
        carouselDispatch({
          type: 'POPULATE_IMAGE_CAROUSEL',
          images: imageCarousel,
        });
        mainImageDispatch({
          type: 'CHANGE_MAIN_IMAGE',
          mainImage: imageCarousel[0],
        });
      })
      .catch((err) => console.log(err));
    return () => {
      source.cancel('unsubscribe axios request');
    };
  }, []);

  return (
    <GamesContext.Provider value={{
      images, carouselDispatch, mainImage, mainImageDispatch, slider, sliderDispatch,
    }}
    >
      <BackGroundWaterMark>
        <MainGameInfoWrapper backgroundImage={backgroundImage}>
          {!images.length ? <h1>Loading...</h1>
            : (
              <div data-testid="images-rendering">
                <ImageCarousel />
              </div>
            )}
        </MainGameInfoWrapper>
      </BackGroundWaterMark>
    </GamesContext.Provider>
  );
};

export default GameInfoCarousel;
