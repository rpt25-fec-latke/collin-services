const express = require('express');
const axios = require('axios');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const db = require('./db');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(path.resolve('client', 'dist')));

const getReviewsInfo = (gameId) => {
  return axios.get(`http://localhost:3001/reviews?id=${gameId}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

app.get('/', (req, res) => {
  res.end('success');
});

app.get('/game_carousel_info', async (req, res) => {
  const queryId = req.query ? req.query.id : 2;
  if (queryId < 1 || queryId > 100) {
    res.sendStatus(500);
  }
  const reviewsInfo = await getReviewsInfo(queryId)
    .catch((err) => {
      console.log('⛑PLEASE TURN ON REVIEWS SERVICE⛑', err);
      res.sendStatus(500);
    });
  db.getInfo(queryId, (err, gameInfo) => {
    if (err) {
      console.log('here');
      res.status(500).send({ internalServerError: err });
    } else {
      console.log(gameInfo, reviewsInfo);
      res.json({ gameInfo, reviewsInfo });
    }
  });
});

module.exports = app;
