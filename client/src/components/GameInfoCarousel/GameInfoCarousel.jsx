import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

import ImageCarousel from '../ImageCarousel/ImageCarousel';
import { MainGameInfoWrapper, BackGroundWaterMark } from './styles';
import GamesContext from '../../context';

const GameInfoCarousel = () => {
  const [currentGameId] = useState(2);
  const [backgroundImage, setBackgroundImage] = useState('');
  const [images, setCarousel] = useState([]);
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    const source = axios.CancelToken.source();
    axios.get(`/game_carousel_info?id=${currentGameId}`, {
      cancelToken: source.token,
    })
      .then(({ data: [{ video_photo_carousel: imageCarousel }] }) => {
        setBackgroundImage(imageCarousel[10]);
        setCarousel(imageCarousel);
        setMainImage(imageCarousel[0]);
      })
      .catch((err) => console.log(err));
    return () => {
      source.cancel('unsubscribe axios request');
    };
  }, []);

  return (
    <GamesContext.Provider value={{
      images, setCarousel, mainImage, setMainImage,
    }}
    >
      <BackGroundWaterMark>
        <MainGameInfoWrapper backgroundImage={backgroundImage}>
          {!images.length ? <div data-testid="loading" />
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
