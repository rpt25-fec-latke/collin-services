const mongoose = require('mongoose');

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost/gameinfo', { useNewUrlParser: true, useUnifiedTopology: true });
});
afterAll(() => {
  mongoose.connection.close();
});

describe('Mongoose', () => {
  it('mongoose should connect to the database.', () => {
    expect(mongoose.connection.readyState).toEqual(1);
  });
});
