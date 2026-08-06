const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage for comments (replaces database for now)
let comments = [];

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'AnyFourm backend is running' });
});

app.get('/api/comments', (req, res) => {
  res.json({ comments });
});

app.post('/api/comments', (req, res) => {
  const { text, author = 'Anonymous' } = req.body;

  if (!text || text.trim() === '') {
    return res.status(400).json({ error: 'Comment text is required' });
  }

  const newComment = {
    id: Date.now(),
    text: text.trim(),
    author,
    timestamp: new Date().toISOString()
  };

  comments.unshift(newComment);
  res.status(201).json({ comment: newComment });
});

app.delete('/api/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const initialLength = comments.length;
  comments = comments.filter(comment => comment.id !== id);

  if (comments.length === initialLength) {
    return res.status(404).json({ error: 'Comment not found' });
  }

  res.json({ message: 'Comment deleted successfully' });
});

// Only start server if not in test mode
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`AnyFourm backend running on port ${PORT}`);
  });
}

module.exports = app;
