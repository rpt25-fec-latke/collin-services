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
  category_tree: {
    genres: {
      genre_name: Array,
    },
  },
  genre: String,
  game_title: String,
  video_photo_carousel: Array,
  game_photo: String,
  short_description: String,
  recent_reviews: String,
  recent_reviews_count: Number,
  all_reviews: String,
  all_reviews_count: Number,
  release_date: Date,
  developer: String,
  publisher: String,
  popular_tags: Array,
},
{ collection: 'gameCarouselInfo' });

const GameCarouselInfo = mongoose.model('GameCarouselInfo', gameCarouselInfo);

const getInfo = async (gameId, callback) => {
  GameCarouselInfo.find({ game_id: gameId }, (err, gameData) => {
    if (err || !gameData.length) {
      callback(err || new Error('invalid query'));
    } else {
      callback(null, gameData);
    }
  }).exec();
};

module.exports = {
  GameCarouselInfo,
  getInfo,
};
