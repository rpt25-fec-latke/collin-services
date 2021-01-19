const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./db');
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(express.static('dist'));


const PORT = process.env.PORT || 3008;
app.listen(PORT, () => {
  console.log(`service running on port ${PORT}`);
});

