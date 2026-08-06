import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CommentList from '../CommentList';

describe('CommentList Component', () => {
  const mockComments = [
    {
      id: 1,
      author: 'Alice',
      content: 'First comment',
      timestamp: '2026-08-06T10:00:00.000Z'
    },
    {
      id: 2,
      author: 'Bob',
      content: 'Second comment',
      timestamp: '2026-08-06T11:00:00.000Z'
    }
  ];

  test('renders empty state when no comments', () => {
    render(<CommentList comments={[]} onDeleteComment={jest.fn()} />);

    expect(screen.getByText('No comments yet')).toBeInTheDocument();
    expect(screen.getByText('Be the first to share your thoughts!')).toBeInTheDocument();
  });

  test('renders list of comments when provided', () => {
    render(<CommentList comments={mockComments} onDeleteComment={jest.fn()} />);

    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('First comment')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.getByText('Second comment')).toBeInTheDocument();
  });

  test('displays correct number of comments', () => {
    render(<CommentList comments={mockComments} onDeleteComment={jest.fn()} />);

    const commentCards = screen.getAllByText(/comment/i).filter(
      el => el.textContent === 'First comment' || el.textContent === 'Second comment'
    );
    expect(commentCards).toHaveLength(2);
  });

  test('displays author avatars with first letter', () => {
    render(<CommentList comments={mockComments} onDeleteComment={jest.fn()} />);

    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('B')).toBeInTheDocument();
  });

  test('calls onDeleteComment when delete button is clicked', () => {
    const mockOnDelete = jest.fn();
    render(<CommentList comments={mockComments} onDeleteComment={mockOnDelete} />);

    const deleteButtons = screen.getAllByTitle('Delete comment');
    fireEvent.click(deleteButtons[0]);

    expect(mockOnDelete).toHaveBeenCalledWith(1);
  });

  test('displays formatted timestamps', () => {
    render(<CommentList comments={mockComments} onDeleteComment={jest.fn()} />);

    // Check that some date formatting is present
    const dateElements = screen.getAllByText(/Aug|2026/i);
    expect(dateElements.length).toBeGreaterThan(0);
  });

  test('renders Discussion Board title', () => {
    render(<CommentList comments={mockComments} onDeleteComment={jest.fn()} />);

    expect(screen.getByText('Discussion Board')).toBeInTheDocument();
  });
});
