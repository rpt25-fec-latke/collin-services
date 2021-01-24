import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

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
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    axios.get(`/game_carousel_info?id=${currentGameId}`)
      .then((res) => {
        console.log(res.data);
        setMainImage(res.data[0].game_photo);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <CoverPhoto mainImage={mainImage} />
    </div>
  );
};

const CoverPhoto = ({ mainImage }) => (
  <div>
    <img src={mainImage} alt="" />
  </div>
);

export default MainCarousel;
