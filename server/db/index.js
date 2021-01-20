const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gameinfo', {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'mongoose connection error:'));

connection.once('open', function() {
  console.log('successfully connected to mongoose');
});

module.exports.getInfo = (gameId, callback) => {
  console.log(gameId);
  connection.db.collection('gameCarouselInfo', function(err, collection) {
      callback(null, collection.find({}).toArray());
   });

}


