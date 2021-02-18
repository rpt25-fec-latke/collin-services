const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/gameinfo', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,
});
const { connection } = mongoose;

connection.on('error', console.error.bind(console, 'mongoose connection error:'));

connection.once('open', () => {
  console.log('successfully connected to mongoose');
});

const gameCarouselInfo = new mongoose.Schema({
  game_id: {
    type: Number,
    unique: true,
  },
  genre: String,
  game_title: String,
  video_photo_carousel: Array,
  short_description: String,
  release_date: Date,
  developer: String,
  publisher: String,
  popular_tags: Array,
},
{ collection: 'gameCarouselInfo' });

const GameCarouselInfo = mongoose.model('GameCarouselInfo', gameCarouselInfo);

const getInfo = (gameId, callback) => {
  GameCarouselInfo.find({ game_id: gameId }, (err, gameData) => {
    if (err || !gameData.length) {
      callback(err || new Error('invalid query'));
    } else {
      callback(null, gameData);
    }
  }).exec();
};

const getRelatedInfo = async (gameId) => {
  const [{ genre }] = await GameCarouselInfo.find({ game_id: gameId }).exec();
  const [, ...relatedGames] = await GameCarouselInfo.find({ genre }).limit(8).exec();
  return relatedGames;
};

const getGenre = async (gameId) => {
  const [{ genre }] = await GameCarouselInfo.find({ game_id: gameId }).exec();
  return genre;
};

const getEventsPhotos = async (gameId) => {
  const [{ video_photo_carousel: [pic1, pic2] }] = await
  GameCarouselInfo.find({ game_id: gameId }).exec();
  return [pic1, pic2];
};

module.exports = {
  GameCarouselInfo,
  getInfo,
  getEventsPhotos,
  getGenre,
  getRelatedInfo,
};
