import React, { useState, useEffect } from 'react';
import './App.css';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';

function App() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/comments');
      if (!response.ok) throw new Error('Failed to fetch comments');
      const data = await response.json();
      setComments(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddComment = async (commentData) => {
    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
      });

      if (!response.ok) throw new Error('Failed to add comment');

      const newComment = await response.json();
      setComments([...comments, newComment]);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  };

  const handleDeleteComment = async (id) => {
    try {
      const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete comment');

      setComments(comments.filter(comment => comment.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <div className="logo-glow"></div>
          <h1 className="logo">AnyForum</h1>
        </div>
        <p className="tagline">Share Your Thoughts in the Digital Realm</p>
      </header>

      <main className="App-main">
        <div className="container">
          {error && (
            <div className="error-message">
              <span>⚠️ {error}</span>
            </div>
          )}

          <CommentForm onAddComment={handleAddComment} />

          {loading ? (
            <div className="loading">
              <div className="spinner"></div>
              <p>Loading comments...</p>
            </div>
          ) : (
            <CommentList
              comments={comments}
              onDeleteComment={handleDeleteComment}
            />
          )}
        </div>
      </main>

      <footer className="App-footer">
        <p>AnyForum © 2026 - Powered by the Future</p>
      </footer>
    </div>
  );
}

export default App;
