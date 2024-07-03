const request = require('supertest');
const app = require('../shared/bff');

describe('Testes para o BFF', () => {
  it('Deve buscar vídeos corretamente', async () => {
    const response = await request(app)
      .get('/videos')
      .query({ search: 'react tutorials' });

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('Deve manipular favoritos corretamente', async () => {
    const response = await request(app)
      .post('/favorites')
      .send({ videoId: 'abc123', action: 'add' });

    expect(response.statusCode).toBe(200);
    expect(response.body.success).toBe(true);
  });
});
