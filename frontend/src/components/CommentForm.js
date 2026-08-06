import React, { useState } from 'react';
import './CommentForm.css';

function CommentForm({ onSubmit }) {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onSubmit(comment);
      setComment('');
    }
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <div className="form-container">
        <textarea
          className="comment-input"
          placeholder="Share your thoughts..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows="4"
          data-testid="comment-input"
        />
        <button
          type="submit"
          className="submit-button"
          disabled={!comment.trim()}
          data-testid="submit-button"
        >
          <span className="button-text">Post Comment</span>
          <span className="button-glow"></span>
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
