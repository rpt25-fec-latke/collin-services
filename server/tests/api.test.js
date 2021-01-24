const supertest = require('supertest');
const app = require('../server.js');

const request = supertest(app);

describe('API Endpoints', () => {
  it('Should retrieve the game info for a game based on a valid query parameter ID', async (done) => {
    const res = await request.get('/game_carousel_info?id=1');
    expect(res.status).toBe(200);
    expect(res.body.length).toEqual(1);
    done();
  });
  it('Should contain a game_id property on a valid query parameter ID', async (done) => {
    const res = await request.get('/game_carousel_info?id=150');
    expect(res.status).toBe(500);
    done();
  });
  it('Should contain a game_id property on a valid query parameter ID', async (done) => {
    const queryId = 7;
    const res = await request.get(`/game_carousel_info?id=${queryId}`);
    expect(res.status).toBe(200);
    expect(res.body[0]).toEqual(expect.objectContaining({
      game_id: queryId,
    }));
    done();
  });
  it('Should contain a picture from an S3 bucket on a valid query parameter ID', async (done) => {
    const res = await request.get('/game_carousel_info?id=5');
    const s3Url = '.s3.us-east-2.amazonaws.com';
    expect(res.status).toBe(200);
    expect(res.body[0].video_photo_carousel[0]).toEqual(expect.stringContaining(s3Url));
    done();
  });
});
