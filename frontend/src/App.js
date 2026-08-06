import React, { useState, useEffect } from 'react';
import './App.css';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Load comments from localStorage on mount
    const savedComments = localStorage.getItem('anyfourm-comments');
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  const addComment = (commentText) => {
    const newComment = {
      id: Date.now(),
      text: commentText,
      timestamp: new Date().toISOString(),
      author: 'Anonymous'
    };

    const updatedComments = [newComment, ...comments];
    setComments(updatedComments);
    localStorage.setItem('anyfourm-comments', JSON.stringify(updatedComments));
  };

  const deleteComment = (id) => {
    const updatedComments = comments.filter(comment => comment.id !== id);
    setComments(updatedComments);
    localStorage.setItem('anyfourm-comments', JSON.stringify(updatedComments));
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <h1 className="logo">AnyFourm</h1>
          <div className="logo-glow"></div>
        </div>
        <p className="tagline">The Future of Community Discussion</p>
      </header>

      <main className="App-main">
        <CommentForm onSubmit={addComment} />
        <CommentList comments={comments} onDelete={deleteComment} />
      </main>
    </div>
  );
}

export default App;
