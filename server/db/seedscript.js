const faker = require('faker');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gameinfo', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;


const gameCarouselInfo = new mongoose.Schema({
  game_id: {
    type: String,
    unique: true
  },
  category_tree: {
    genres: {
      RPG: Array
    }
  },
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
  popular_tags: Array
},
{collection: 'gameCarouselInfo'});

const GameCarouselInfo = mongoose.model('GameCarouselInfo', gameCarouselInfo);


const saveSeed = async(seed) => {
  await new GameCarouselInfo(seed).save().catch(err => console.log('ERROR', err));
}

db.on('error', console.error.bind(console, 'mongoose connection error:'));

db.once('open', function() {
  console.log('successfully connected to mongoose');
  (() => {
    let seeder = 1;
    while(seeder !== 101) {
      let gameTitle = faker.random.words().toUpperCase();
      let randomIndex = Math.floor(Math.random() * 4);
      let reviews = ['Very Positive', 'Positive', 'Very Negative', 'Negative'];

      let dataFormat = {
        game_id: seeder,
        category_tree: {
          genres: {
            RPG: [gameTitle]
          }
        },
        game_title: gameTitle,
        video_photo_carousel: [faker.image.imageUrl(), faker.image.imageUrl()],
        game_photo: faker.image.imageUrl(),
        short_description: faker.lorem.paragraph(),
        recent_reviews: reviews[randomIndex],
        recent_reviews_count: faker.random.number(),
        all_reviews: reviews[randomIndex],
        all_reviews_count: faker.random.number(),
        release_date: faker.date.between('2012-01-01', '2021-01-20'),
        developer: faker.company.companyName(),
        publisher: faker.company.companyName(),
        popular_tags: [faker.company.catchPhraseNoun(), faker.company.catchPhraseNoun(), faker.company.catchPhrase()]
      }

      saveSeed(dataFormat);
      seeder++;
    }

    if(seeder === 101) {
      console.log('Seeding Complete');

    }

  })()
});



