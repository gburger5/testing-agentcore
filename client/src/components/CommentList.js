import React from 'react';
import './CommentList.css';

function CommentList({ comments, onDeleteComment }) {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (comments.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">💬</div>
        <h3>No comments yet</h3>
        <p>Be the first to share your thoughts!</p>
      </div>
    );
  }

  return (
    <div className="comment-list">
      <h2 className="list-title">Discussion Board</h2>
      <div className="comments">
        {comments.map((comment) => (
          <div key={comment.id} className="comment-card">
            <div className="comment-header">
              <div className="comment-author">
                <div className="avatar">{comment.author[0].toUpperCase()}</div>
                <div className="author-info">
                  <h4>{comment.author}</h4>
                  <span className="comment-date">{formatDate(comment.timestamp)}</span>
                </div>
              </div>
              <button
                className="delete-button"
                onClick={() => onDeleteComment(comment.id)}
                title="Delete comment"
              >
                ✕
              </button>
            </div>
            <div className="comment-content">
              <p>{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentList;
