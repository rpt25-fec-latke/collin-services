import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import { MainWrapper } from './styles';
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

const MainCarousel = () => {
  const [currentGameId] = useState(2);
  // const [image, dispatch] = useReducer(gameReducer, '');
  // const [mainImage, setMainImage] = useState('');
  const [images, setImageCarousel] = useState([]);

  useEffect(() => {
    axios.get(`/game_carousel_info?id=${currentGameId}`)
      .then((res) => {
        console.log(res.data);
        // setMainImage(res.data[0].game_photo);
        setImageCarousel(res.data[0].video_photo_carousel);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <MainWrapper>
      <ImageCarousel images={images} />
    </MainWrapper>
  );
};

export default MainCarousel;
