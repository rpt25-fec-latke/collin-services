const express = require('express');
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
app.use(morgan('tiny'));
app.use(express.static(path.resolve('client', 'dist')));

app.get('/game_carousel_info', (req, res) => {
  console.log('SERVICE HEADERS', req.headers);
  const queryId = req.query ? req.query.id : 1;
  db.getInfo(queryId, (err, data) => {
    if (err) {
      res.send(500);
    } else {
      res.json(data);
    }
  });
});

module.exports = app;
