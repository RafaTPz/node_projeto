import request from 'supertest';
import app from '../src/server';

describe('Testando a rota GET /users', () => {
  it('Deve retornar status 200 e uma lista de usuários', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});