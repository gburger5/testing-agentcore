import React from 'react';
import './CommentList.css';

function CommentList({ comments, onDelete }) {
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  if (comments.length === 0) {
    return (
      <div className="empty-state" data-testid="empty-state">
        <div className="empty-icon">💬</div>
        <p>No comments yet. Be the first to share your thoughts!</p>
      </div>
    );
  }

  return (
    <div className="comment-list" data-testid="comment-list">
      <h2 className="list-title">Community Board</h2>
      {comments.map((comment) => (
        <div key={comment.id} className="comment-card" data-testid="comment-card">
          <div className="comment-header">
            <span className="comment-author">{comment.author}</span>
            <span className="comment-timestamp">{formatTimestamp(comment.timestamp)}</span>
          </div>
          <p className="comment-text">{comment.text}</p>
          <button
            className="delete-button"
            onClick={() => onDelete(comment.id)}
            aria-label="Delete comment"
            data-testid="delete-button"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default CommentList;
