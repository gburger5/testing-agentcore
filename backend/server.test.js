const request = require('supertest');
const app = require('./server');

describe('AnyForum Backend API', () => {
  describe('GET /api/health', () => {
    it('should return health status', async () => {
      const response = await request(app).get('/api/health');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('status', 'ok');
      expect(response.body).toHaveProperty('timestamp');
    });
  });

  describe('GET /api/comments', () => {
    it('should return all comments', async () => {
      const response = await request(app).get('/api/comments');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
    });

    it('should return comments with required properties', async () => {
      const response = await request(app).get('/api/comments');
      const comment = response.body[0];
      expect(comment).toHaveProperty('id');
      expect(comment).toHaveProperty('author');
      expect(comment).toHaveProperty('content');
      expect(comment).toHaveProperty('timestamp');
    });
  });

  describe('POST /api/comments', () => {
    it('should create a new comment', async () => {
      const newComment = {
        author: 'TestUser',
        content: 'This is a test comment'
      };

      const response = await request(app)
        .post('/api/comments')
        .send(newComment);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body.author).toBe(newComment.author);
      expect(response.body.content).toBe(newComment.content);
      expect(response.body).toHaveProperty('timestamp');
    });

    it('should return 400 if author is missing', async () => {
      const response = await request(app)
        .post('/api/comments')
        .send({ content: 'Test content' });

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
    });

    it('should return 400 if content is missing', async () => {
      const response = await request(app)
        .post('/api/comments')
        .send({ author: 'TestUser' });

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
    });
  });

  describe('DELETE /api/comments/:id', () => {
    it('should delete a comment by id', async () => {
      // First, get all comments to find a valid id
      const getResponse = await request(app).get('/api/comments');
      const commentId = getResponse.body[0].id;

      const response = await request(app).delete(`/api/comments/${commentId}`);
      expect(response.status).toBe(204);
    });

    it('should return 404 if comment not found', async () => {
      const response = await request(app).delete('/api/comments/99999');
      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('error');
    });
  });
});
