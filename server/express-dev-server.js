const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.config.js');

config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.entry.unshift('webpack-hot-middleware/client');
// config.entry.unshift('react-hot-loader/patch');
const compiler = webpack(config);
const db = require('./db');

const app = express();
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));
app.use(webpackHotMiddleware(compiler, {
  noInfo: true,
}));
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

const PORT = process.env.PORT || 3008;
app.listen(PORT, () => {
  console.log(`service running on port ${PORT}`);
});
