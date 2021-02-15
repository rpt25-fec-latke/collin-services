const faker = require('faker');
const mongoose = require('mongoose');
const { GameCarouselInfo } = require('.');

mongoose.connect('mongodb://localhost/gameinfo', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

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
  return result.sort(() => Math.random() - 0.5);
};

db.on('error', console.error.bind(console, 'mongoose connection error:'));

db.once('open', () => {
  (async () => {
    let seeder = 1;

    while (seeder <= 100) {
      const gameTitle = faker.commerce.productName();
      const randomIndex = Math.floor(Math.random() * 4);
      const reviews = ['Very Positive', 'Positive', 'Very Negative', 'Negative'];
      const genres = ['RPG', 'Action', 'War', 'Strategy'];
      const currentGenre = genres[randomIndex];
      const gamePics = s3MediaFetcher(currentGenre);

      const dataFormat = {
        game_id: seeder,
        genre: currentGenre,
        game_title: gameTitle,
        video_photo_carousel: gamePics,
        short_description: faker.lorem.sentences(),
        release_date: faker.date.between('2012-01-01', '2021-01-20'),
        developer: faker.company.companyName(),
        publisher: faker.company.companyName(),
        popular_tags: [
          faker.company.catchPhraseDescriptor(),
          faker.company.catchPhraseDescriptor(),
          faker.company.catchPhraseDescriptor(),
          faker.company.catchPhraseDescriptor(),
          faker.company.catchPhraseDescriptor(),
          faker.company.catchPhraseDescriptor(),
          faker.company.catchPhraseDescriptor(),
          faker.company.catchPhraseDescriptor(),
          faker.company.catchPhraseDescriptor(),
          faker.company.catchPhraseDescriptor(),
          faker.company.catchPhraseDescriptor(),
          faker.company.catchPhraseDescriptor(),
        ],
      };
      await saveSeed(dataFormat);
      seeder++;
    }
    console.log('Seeding Complete');
    mongoose.connection.close();
  })();
});
