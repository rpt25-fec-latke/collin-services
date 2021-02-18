const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const db = require('./db');
const routes = require('./routes');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(path.resolve('client', 'dist')));

const combineData = (gameInfo, metaData) => {
  const [infoObj] = gameInfo;
  infoObj.game_title = metaData[4][0];
  infoObj.developer = metaData[4][2];
  infoObj.publisher = metaData[4][3];
  infoObj.release_date = metaData[4][5];
  return infoObj;
};

app.get('/game_carousel_info', async (req, res) => {
  const queryId = req.query ? req.query.id : 1;
  if (queryId < 1 || queryId > 100) {
    res.sendStatus(500);
  }

  const reviewsInfo = await routes.getReviewsInfo(queryId)
    .catch((err) => {
      console.log('REVIEWS Error', err);
      res.sendStatus(500);
    });
  const metaData = await routes.getMetaData(queryId)
    .catch((err) => {
      console.log('Metadata Error', err);
      res.sendStatus(500);
    });

  db.getRelatedInfo(queryId)
    .then((data) => {
      console.log('GENRE', data.length);
    })
    .catch((err) => {
      console.log('ERROR', err);
    });

  db.getInfo(queryId, (err, gameInfo) => {
    if (err) {
      res.status(500).send({ internalServerError: err });
    } else {
      const metaAndGameInfo = combineData(gameInfo, metaData);
      res.json({ metaAndGameInfo, reviewsInfo });
    }
  });
});

app.get('/game_info/related', async (req, res) => {
  const queryId = req.query ? req.query.id : 1;
  if (queryId < 1 || queryId > 100) {
    res.sendStatus(500);
  }
  // get first 7 games with genre (filter out with current id)
  db.getRelatedInfo(queryId)
    .then((relatedGames) => {
      res.json({ relatedGames });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

app.get('/game_info/genre', (req, res) => {
  const queryId = req.query ? req.query.id : 1;
  if (queryId < 1 || queryId > 100) {
    res.sendStatus(500);
  }
  // send back genre
  db.getGenre(queryId)
    .then((genre) => {
      res.json({ genre });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

app.get('/game_info/events', (req, res) => {
  const queryId = req.query ? req.query.id : 1;
  if (queryId < 1 || queryId > 100) {
    res.sendStatus(500);
  }
  // send back two pictures
  db.getEventsPhotos(queryId)
    .then((eventPics) => {
      res.json({ eventPics });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = app;
