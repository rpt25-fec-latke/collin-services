const mongoose = require('mongoose');

beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/metadata', { useNewUrlParser: true, useUnifiedTopology: true })
});


describe('Mongoose Setup', () => {
  it('Should Connect to Database', () => {
    expect(mongoose.connection.readyState).toEqual(1);
  });
});