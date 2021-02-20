import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ImageCarousel from '../ImageCarousel/ImageCarousel';
import Header from '../Header/Header';
import SideInfoPanel from '../SideInfoPanel/SideInfoPanel';
import Modal from '../Modal/Modal';
import dataDestructuring from './dataDestructuring';

import {
  MainGameInfoWrapper,
  GameInfoContainer,
  GameInfoWrapper,
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
  const [recentReviews, setRecentReviews] = useState({});
  const [allReviews, setAllReviews] = useState({});
  const [showModal, setModal] = useState(false);
  const [autoIterate, setAutoIterate] = useState(1);
  const [stopPicAutomation, setStopPicAuto] = useState(false);

  // SET TIMEOUT DISABLED
  // useEffect(() => {
  //   if (images[autoIterate] === undefined) {
  //     setAutoIterate(0);
  //   }
  //   let picTraverse;
  //   if (!stopPicAutomation) {
  //     picTraverse = setTimeout(() => {
  //       setMainImage(images[autoIterate]);
  //       setAutoIterate(autoIterate + 1);
  //     }, 4000);
  //   }
  //   return () => {
  //     clearTimeout(picTraverse);
  //   };
  // }, [mainImage, autoIterate]);

  useEffect(() => {
    document.body.style['background-image'] = `url(${backgroundImage})`;
  }, [gameGenre]);

  useEffect(() => {
    const queryId = window.location.search.slice(4);
    const currentId = queryId || gameId;
    setGameId(currentId);
    const source = axios.CancelToken.source();
    axios.get(`/game_carousel_info?id=${gameId}`, {
      cancelToken: source.token,
    })
      .then(({ data: { metaAndGameInfo, reviewsInfo } }) => {
        console.log(metaAndGameInfo);
        const [
          imageCarousel,
          genre,
          title,
          backgroundImg,
          allHover,
          recentHover,
          allReview,
          recentReview,
        ] = dataDestructuring(metaAndGameInfo, reviewsInfo);

        setBackgroundImage(backgroundImg);
        setCarousel(imageCarousel.slice(0, 10));
        setMainImage(imageCarousel[0]);
        setGenre(genre);
        setTitle(title);
        setPanelImg(imageCarousel[11]);
        setPanelInfo(metaAndGameInfo);
        setRecentReviews({
          review: recentReview,
          hovMessage: recentHover,
          total: reviewsInfo.reviewStats.totalRecentReviewCount,
        });
        setAllReviews({
          review: allReview,
          hovMessage: allHover,
          total: reviewsInfo.reviewStats.totalReviewCount,
        });
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
      recentReviews,
      allReviews,
    }}
    >
      {(sidePanelInfo.game_id && images.length)
        ? (
          <GameInfoContainer backgroundImage={backgroundImage}>
            <Modal />
            <GameInfoWrapper>
              <Header />
              <BackgroundWaterMark>
                <MainGameInfoWrapper backgroundImage={backgroundImage}>
                  <>
                    <div data-testid="images-rendering">
                      <ImageCarousel />
                    </div>
                    <SideInfoPanelWrapper>
                      <SideInfoPanel />
                    </SideInfoPanelWrapper>
                  </>
                </MainGameInfoWrapper>
              </BackgroundWaterMark>
            </GameInfoWrapper>
          </GameInfoContainer>
        ) : <div data-testid="loading" /> }
    </GamesContext.Provider>
  );
};

export default GameInfoCarousel;
