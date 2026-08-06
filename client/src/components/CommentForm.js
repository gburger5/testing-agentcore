import React, { useState } from 'react';
import './CommentForm.css';

function CommentForm({ onAddComment }) {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!author.trim() || !content.trim()) {
      return;
    }

    setIsSubmitting(true);
    const success = await onAddComment({ author, content });

    if (success) {
      setAuthor('');
      setContent('');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="comment-form-container">
      <h2 className="form-title">Post a Comment</h2>
      <form onSubmit={handleSubmit} className="comment-form">
        <div className="form-group">
          <input
            type="text"
            placeholder="Your name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="form-input"
            disabled={isSubmitting}
            required
          />
        </div>

        <div className="form-group">
          <textarea
            placeholder="Share your thoughts..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-textarea"
            rows="4"
            disabled={isSubmitting}
            required
          />
        </div>

        <button
          type="submit"
          className="submit-button"
          disabled={isSubmitting || !author.trim() || !content.trim()}
        >
          {isSubmitting ? (
            <span>Posting...</span>
          ) : (
            <span>🚀 Post Comment</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default CommentForm;
