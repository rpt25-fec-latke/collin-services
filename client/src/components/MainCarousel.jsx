import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { MainWrapper } from './styled-components';

// const gameReducer = (state, action) => {
//   switch (action.type) {
//     case 'MAIN_IMAGE':
//       return action.image;
//     default:
//       return state;
//   }
// };
// dispatch({ type: 'MAIN_IMAGE', image: res.data[0].game_photo })

const Image = styled.div`
display: flex;
flex-direction: row-reverse;
justify-content: center;
`;

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
    <MainWrapper>
      <CoverPhoto mainImage={mainImage} />
    </MainWrapper>
  );
};

const CoverPhoto = ({ mainImage }) => (
  <Image>
    <img src={mainImage} alt="" />
  </Image>
);

export default MainCarousel;
