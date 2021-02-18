const axios = require('axios');

const getReviewsInfo = (gameId) => {
  return axios.get(`http://localhost:3001/reviews?id=${gameId}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

const getMetaData = (gameId) => {
  return axios.get(`http://localhost:3005/metadata?id=${gameId}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

module.exports = {
  getReviewsInfo,
  getMetaData,
};
