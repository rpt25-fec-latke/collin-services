const faker = require('faker');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/gameinfo', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

const gameCarouselInfo = new mongoose.Schema({
  game_id: {
    type: String,
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

const saveSeed = async (seed) => {
  await new GameCarouselInfo(seed).save().catch((err) => console.log('ERROR', err));
};

const s3MediaFetcher = (genre) => {
  const result = [];
  let currentPic = 1;
  while (currentPic <= 12) {
    result.push(`https://gameinfocarousel.s3.us-east-2.amazonaws.com/game_genres/${genre}/image+(${currentPic}).jpeg`);
    currentPic++;
  }
  return result;
};

db.on('error', console.error.bind(console, 'mongoose connection error:'));

db.once('open', () => {
  console.log('successfully connected to mongoose');
  (() => {
    let seeder = 1;
    while (seeder !== 101) {
      const gameTitle = faker.random.words().toUpperCase();
      const randomIndex = Math.floor(Math.random() * 4);
      const reviews = ['Very Positive', 'Positive', 'Very Negative', 'Negative'];
      const genres = ['RPG', 'Action', 'War', 'Strategy'];
      const currentGenre = genres[randomIndex];
      const gamePics = s3MediaFetcher(currentGenre);

      const dataFormat = {
        game_id: seeder,
        category_tree: {
          genres: {
            genre_name: [gameTitle],
          },
        },
        genre: currentGenre,
        game_title: gameTitle,
        video_photo_carousel: gamePics,
        game_photo: gamePics[0],
        short_description: faker.lorem.paragraph(),
        recent_reviews: reviews[randomIndex],
        recent_reviews_count: faker.random.number(),
        all_reviews: reviews[randomIndex],
        all_reviews_count: faker.random.number(),
        release_date: faker.date.between('2012-01-01', '2021-01-20'),
        developer: faker.company.companyName(),
        publisher: faker.company.companyName(),
        popular_tags: [
          faker.company.catchPhraseNoun(),
          faker.company.catchPhraseNoun(),
          faker.company.catchPhrase(),
        ],
      };
      saveSeed(dataFormat);
      seeder++;
    }

    if (seeder === 101) {
      console.log('Seeding Complete');
    }
  })();
});
