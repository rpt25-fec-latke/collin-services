const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./db');
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(express.static(path.resolve('client', 'dist')));

app.get('/game_carousel_info', (req, res) => {
  db.getInfo(req.query.id, (err, data) => {
    if (err) {
      res.send(500);
    } else {
      res.json(data);
    }
  });
});

module.exports = app;
