import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useStateWithPromise } from '../hooks';

import ImageCarousel from '../ImageCarousel/ImageCarousel';
import { MainGameInfoWrapper, BackGroundWaterMark } from './styles';
import GamesContext from '../../context';

const GameInfoCarousel = () => {
  const [currentGameId, setGameId] = useStateWithPromise(1);
  const [backgroundImage, setBackgroundImage] = useState('');
  const [images, setCarousel] = useState([]);
  const [mainImage, setMainImage] = useState('');
  const queryId = window.location.search.slice(4);

  useEffect(() => {
    setGameId(queryId);
    console.log(currentGameId);
  }, []);

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
  }, [currentGameId]);

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
