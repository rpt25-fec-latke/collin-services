const axios = require('axios');

const getReviewsInfo = (gameId) => {
  // 204.236.178.72
  return axios.get(`http://localhost:3001/reviews?id=${gameId}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

const getMetaData = (gameId) => {
  // 3.131.140.35
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
