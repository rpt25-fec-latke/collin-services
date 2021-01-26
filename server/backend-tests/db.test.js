const mongoose = require('mongoose');

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost/gameinfo', { useNewUrlParser: true, useUnifiedTopology: true });
});

describe('Mongoose', () => {
  it('mongoose should connect to the database.', () => {
    expect(mongoose.connection.readyState).toEqual(1);
  });
});

afterAll(() => {
  mongoose.connection.close();
});
