const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gameinfo', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongoose connection error:'));

db.once('open', function() {
  console.log('successfully connected to mongoose');
});