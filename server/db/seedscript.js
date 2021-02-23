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
      const randomIndex = Math.floor(Math.random() * 4);
      const genres = ['RPG', 'Action', 'War', 'Strategy'];
      const currentGenre = genres[randomIndex];
      const gamePics = s3MediaFetcher(currentGenre);

      const dataFormat = {
        game_id: seeder,
        genre: currentGenre,
        video_photo_carousel: gamePics,
        short_description: faker.lorem.sentences(),
        background_image: `https://gameinfocarousel.s3.us-east-2.amazonaws.com/game_backgrounds/${currentGenre}.jpg`,
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
