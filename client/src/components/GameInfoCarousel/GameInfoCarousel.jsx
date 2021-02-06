import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ImageCarousel from '../ImageCarousel/ImageCarousel';
import Header from '../Header/Header';
import SideInfoPanel from '../SideInfoPanel/SideInfoPanel';
import Modal from '../Modal/Modal';

import {
  MainGameInfoWrapper,
  Container,
  Wrapper,
  ImageCarouselWrapper,
  SideInfoPanelWrapper,
  BackgroundWaterMark,
} from './styles';
import GamesContext from '../../context';

const GameInfoCarousel = () => {
  const [gameId, setGameId] = useState(1);
  const [backgroundImage, setBackgroundImage] = useState('');
  const [images, setCarousel] = useState([]);
  const [mainImage, setMainImage] = useState('');
  const [gameGenre, setGenre] = useState('');
  const [gameTitle, setTitle] = useState('');
  const [sidePanelImg, setPanelImg] = useState('');
  const [sidePanelInfo, setPanelInfo] = useState({});
  const [showModal, setModal] = useState(false);
  const [autoIterate, setAutoIterate] = useState(1);
  const [stopPicAutomation, setStopPicAuto] = useState(false);
  const queryId = window.location.search.slice(4);

  useEffect(() => {
    const currentId = queryId || gameId;
    setGameId(currentId);
  }, []);

  useEffect(() => {
    if (images[autoIterate] === undefined) {
      setAutoIterate(0);
    }
    let picTraverse;
    if (!stopPicAutomation) {
      picTraverse = setTimeout(() => {
        setMainImage(images[autoIterate]);
        setAutoIterate(autoIterate + 1);
      }, 4000);
    }
    return () => {
      clearTimeout(picTraverse);
    };
  }, [mainImage, autoIterate]);

  useEffect(() => {
    const source = axios.CancelToken.source();
    axios.get(`/game_carousel_info?id=${gameId}`, {
      cancelToken: source.token,
    })
      .then(({ data }) => {
        const [{ video_photo_carousel: imageCarousel }] = data;
        const [{ genre }] = data;
        const [{ game_title: title }] = data;
        setBackgroundImage(imageCarousel[10]);
        setCarousel(imageCarousel.slice(0, 10));
        setMainImage(imageCarousel[0]);
        setGenre(genre);
        setTitle(title);
        setPanelImg(imageCarousel[11]);
        setPanelInfo(data[0]);
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
      sidePanelImg,
      sidePanelInfo,
      showModal,
      setModal,
      setStopPicAuto,
    }}
    >
      {(sidePanelInfo.game_id && images.length === 10)
      && (
      <Container backgroundImage={backgroundImage}>
        <Modal />
        <Wrapper>
          <Header />
          <BackgroundWaterMark>
            <MainGameInfoWrapper backgroundImage={backgroundImage}>
              {!images.length ? <div data-testid="loading" />
                : (
                  <>
                    <ImageCarouselWrapper data-testid="images-rendering">
                      <ImageCarousel />
                    </ImageCarouselWrapper>
                    <SideInfoPanelWrapper>
                      <SideInfoPanel />
                    </SideInfoPanelWrapper>
                  </>
                )}
            </MainGameInfoWrapper>
          </BackgroundWaterMark>
        </Wrapper>
      </Container>
      )}
    </GamesContext.Provider>
  );
};

export default GameInfoCarousel;
