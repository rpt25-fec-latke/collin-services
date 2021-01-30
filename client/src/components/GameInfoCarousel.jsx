import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import { MainGameInfoWrapper, BackGroundWaterMark } from './styles';
import ImageCarousel from './ImageCarousel';

// const gameReducer = (state, action) => {
//   switch (action.type) {
//     case 'MAIN_IMAGE':
//       return action.image;
//     default:
//       return state;
//   }
// };
// dispatch({ type: 'MAIN_IMAGE', image: res.data[0].game_photo })

const GameInfoCarousel = () => {
  const [currentGameId] = useState(7);
  const [mainImage, setMainImage] = useState('');
  // const [image, dispatch] = useReducer(gameReducer, '');
  // const [mainImage, setMainImage] = useState('');
  const [images, setImageCarousel] = useState([]);

  useEffect(() => {
    axios.get(`/game_carousel_info?id=${currentGameId}`)
      .then(({ data }) => {
        setImageCarousel(data[0].video_photo_carousel.slice(4));
        setMainImage(data[0].video_photo_carousel[0]);
      })
      .catch((err) => console.error(err));
  }, []);

  const onImageClick = (e) => {
    setMainImage(e.target.src);
  };

  return (
    <BackGroundWaterMark>
      <MainGameInfoWrapper>
        {!images.length ? <div />
          : (
            <ImageCarousel
              mainImage={mainImage}
              images={images}
              onImageClick={onImageClick}
            />
          )}
      </MainGameInfoWrapper>
    </BackGroundWaterMark>
  );
};

export default GameInfoCarousel;
