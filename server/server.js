const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

// app.get('/', (req, res) => {
//   res.send('connected');
// })

app.listen(3008, () => {
  console.log('service running on port 3008')
});

