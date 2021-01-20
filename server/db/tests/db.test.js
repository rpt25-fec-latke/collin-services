const mongoose = require('mongoose');

beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/metadata', { useNewUrlParser: true, useUnifiedTopology: true })
});


describe('Mongoose Setup', () => {

  it('should connect or be connecting to the database.', () => {
    expect(mongoose.connection.readyState).toBeLessThanOrEqual(2);
  });

});

afterAll(() => {
  mongoose.connection.close();
});