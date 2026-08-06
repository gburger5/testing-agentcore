const request = require('supertest');
const app = require('../index');

describe('API Endpoints', () => {
  describe('GET /api/comments', () => {
    it('should return an array of comments', async () => {
      const response = await request(app).get('/api/comments');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('POST /api/comments', () => {
    it('should create a new comment', async () => {
      const newComment = {
        author: 'Test User',
        content: 'This is a test comment'
      };

      const response = await request(app)
        .post('/api/comments')
        .send(newComment);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body.author).toBe(newComment.author);
      expect(response.body.content).toBe(newComment.content);
    });

    it('should return 400 if author or content is missing', async () => {
      const response = await request(app)
        .post('/api/comments')
        .send({ author: 'Test' });

      expect(response.status).toBe(400);
    });
  });
});
