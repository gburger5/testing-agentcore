const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory store for comments
let comments = [
  {
    id: 1,
    author: 'Gabe',
    content: 'Welcome to AnyForum! Post your first comment.',
    timestamp: new Date().toISOString()
  }
];

// Routes
app.get('/api/comments', (req, res) => {
  res.json(comments);
});

app.post('/api/comments', (req, res) => {
  const { author, content } = req.body;

  if (!author || !content) {
    return res.status(400).json({ error: 'Author and content are required' });
  }

  const newComment = {
    id: comments.length + 1,
    author,
    content,
    timestamp: new Date().toISOString()
  };

  comments.push(newComment);
  res.status(201).json(newComment);
});

app.delete('/api/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = comments.findIndex(c => c.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Comment not found' });
  }

  comments.splice(index, 1);
  res.status(204).send();
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start server only if not in test environment
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`AnyForum backend running on port ${PORT}`);
  });
}

module.exports = app;
