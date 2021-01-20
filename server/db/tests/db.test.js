const mongoose = require('mongoose');

beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/gameinfo', { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.connection.once('open' , () => console.log('connected'));
});


describe('Mongoose', () => {

  it('should connect or be connecting to the database.', () => {
    expect(mongoose.connection.readyState).toBeLessThanOrEqual(2);
  });

});

afterAll(() => {
  mongoose.connection.close();
});