const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory storage for comments
let comments = [
  {
    id: 1,
    author: 'System',
    content: 'Welcome to AnyFourm! Share your thoughts below.',
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

// Serve static files from React build in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`🚀 AnyFourm server running on http://localhost:${PORT}`);
});

module.exports = app;
