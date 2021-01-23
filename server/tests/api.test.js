const supertest = require('supertest');
const app = require('../server.js');

const request = supertest(app);

describe('API Endpoints', () => {
  it('Should retrieve the game info for a game based on a valid query parameter ID', async (done) => {
    const res = await request.get('/game_carousel_info?id=1');

    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    done();
  });
});
