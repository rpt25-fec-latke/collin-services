import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ImageCarousel from '../ImageCarousel/ImageCarousel';
import Header from '../Header/Header';
import SideInfoPanal from '../SideInfoPanal/SideInfoPanal';

import {
  MainGameInfoWrapper,
  Container,
  Wrapper,
} from './styles';
import GamesContext from '../../context';

const GameInfoCarousel = () => {
  const [gameId, setGameId] = useState(1);
  const [backgroundImage, setBackgroundImage] = useState('');
  const [images, setCarousel] = useState([]);
  const [mainImage, setMainImage] = useState('');
  const [gameGenre, setGenre] = useState('');
  const [gameTitle, setTitle] = useState('');
  const [sidePanalImg, setPanalImg] = useState('');
  const [sidePanalInfo, setPanalInfo] = useState({});
  const [popularTags, setTags] = useState([]);
  const queryId = window.location.search.slice(4);

  useEffect(() => {
    const currentId = queryId || gameId;
    setGameId(currentId);
  }, []);

  useEffect(() => {
    const source = axios.CancelToken.source();
    axios.get(`/game_carousel_info?id=${gameId}`, {
      cancelToken: source.token,
    })
      .then(({ data }) => {
        const [{ video_photo_carousel: imageCarousel }] = data;
        const [{ genre }] = data;
        const [{ game_title: title }] = data;
        const [{ popularTags: tags }] = data;
        setBackgroundImage(imageCarousel[10]);
        setCarousel(imageCarousel.slice(0, 10));
        setMainImage(imageCarousel[0]);
        setGenre(genre);
        setTitle(title);
        setPanalImg(imageCarousel[11]);
        setPanalInfo(data[0]);
        setTags(tags);
      })
      .catch((err) => console.log(err));
    return () => {
      source.cancel('unsubscribe axios request');
    };
  }, [gameId]);

  return (
    <GamesContext.Provider value={{
      images,
      setCarousel,
      mainImage,
      setMainImage,
      gameGenre,
      gameTitle,
      sidePanalImg,
      sidePanalInfo,
      popularTags,
    }}
    >
      <Container>
        <Wrapper>
          <Header />
          <MainGameInfoWrapper backgroundImage={backgroundImage}>
            {!images.length ? <div data-testid="loading" />
              : (
                <>
                  <div data-testid="images-rendering">
                    <ImageCarousel />
                  </div>
                  <div>
                    <SideInfoPanal />
                  </div>
                </>
              )}
          </MainGameInfoWrapper>
        </Wrapper>
      </Container>
    </GamesContext.Provider>
  );
};

export default GameInfoCarousel;
