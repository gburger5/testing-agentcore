const request = require('supertest');
const app = require('./server');

describe('AnyFourm Backend API', () => {
  describe('GET /api/health', () => {
    test('should return health status', async () => {
      const response = await request(app).get('/api/health');
      expect(response.status).toBe(200);
      expect(response.body.status).toBe('ok');
    });
  });

  describe('GET /api/comments', () => {
    test('should return empty array initially', async () => {
      const response = await request(app).get('/api/comments');
      expect(response.status).toBe(200);
      expect(response.body.comments).toEqual([]);
    });
  });

  describe('POST /api/comments', () => {
    test('should create a new comment', async () => {
      const newComment = {
        text: 'Test comment',
        author: 'Test User'
      };

      const response = await request(app)
        .post('/api/comments')
        .send(newComment);

      expect(response.status).toBe(201);
      expect(response.body.comment).toHaveProperty('id');
      expect(response.body.comment.text).toBe('Test comment');
      expect(response.body.comment.author).toBe('Test User');
    });

    test('should use default author if not provided', async () => {
      const newComment = { text: 'Test comment' };

      const response = await request(app)
        .post('/api/comments')
        .send(newComment);

      expect(response.status).toBe(201);
      expect(response.body.comment.author).toBe('Anonymous');
    });

    test('should return 400 if text is empty', async () => {
      const response = await request(app)
        .post('/api/comments')
        .send({ text: '' });

      expect(response.status).toBe(400);
      expect(response.body.error).toBe('Comment text is required');
    });

    test('should return 400 if text is missing', async () => {
      const response = await request(app)
        .post('/api/comments')
        .send({});

      expect(response.status).toBe(400);
    });
  });

  describe('DELETE /api/comments/:id', () => {
    test('should delete an existing comment', async () => {
      // First create a comment
      const createResponse = await request(app)
        .post('/api/comments')
        .send({ text: 'Comment to delete' });

      const commentId = createResponse.body.comment.id;

      // Then delete it
      const deleteResponse = await request(app)
        .delete(`/api/comments/${commentId}`);

      expect(deleteResponse.status).toBe(200);
      expect(deleteResponse.body.message).toBe('Comment deleted successfully');

      // Verify it's gone
      const getResponse = await request(app).get('/api/comments');
      expect(getResponse.body.comments).toHaveLength(0);
    });

    test('should return 404 for non-existent comment', async () => {
      const response = await request(app)
        .delete('/api/comments/999999');

      expect(response.status).toBe(404);
      expect(response.body.error).toBe('Comment not found');
    });
  });
});
