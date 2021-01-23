const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/gameinfo', { useNewUrlParser: true, useUnifiedTopology: true });
const { connection } = mongoose;

connection.on('error', console.error.bind(console, 'mongoose connection error:'));

connection.once('open', () => {
  console.log('successfully connected to mongoose');
});

module.exports.getInfo = async (gameId, callback) => {
  await connection;
  connection.db.collection('gameCarouselInfo', async (err, collection) => {
    if (err) {
      callback(err);
    }
    const data = await collection.find({}).toArray();
    callback(null, data);
  });
};
