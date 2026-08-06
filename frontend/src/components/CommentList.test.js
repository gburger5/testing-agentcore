import { render, screen, fireEvent } from '@testing-library/react';
import CommentList from './CommentList';

describe('CommentList Component', () => {
  const mockComments = [
    {
      id: 1,
      text: 'First comment',
      timestamp: new Date().toISOString(),
      author: 'Anonymous'
    },
    {
      id: 2,
      text: 'Second comment',
      timestamp: new Date().toISOString(),
      author: 'Anonymous'
    }
  ];

  test('renders empty state when no comments', () => {
    render(<CommentList comments={[]} onDelete={() => {}} />);
    const emptyState = screen.getByTestId('empty-state');
    expect(emptyState).toBeInTheDocument();
  });

  test('renders list title when comments exist', () => {
    render(<CommentList comments={mockComments} onDelete={() => {}} />);
    const title = screen.getByText('Community Board');
    expect(title).toBeInTheDocument();
  });

  test('renders all comments', () => {
    render(<CommentList comments={mockComments} onDelete={() => {}} />);
    expect(screen.getByText('First comment')).toBeInTheDocument();
    expect(screen.getByText('Second comment')).toBeInTheDocument();
  });

  test('renders correct number of comment cards', () => {
    render(<CommentList comments={mockComments} onDelete={() => {}} />);
    const commentCards = screen.getAllByTestId('comment-card');
    expect(commentCards).toHaveLength(2);
  });

  test('calls onDelete with correct id when delete button is clicked', () => {
    const mockOnDelete = jest.fn();
    render(<CommentList comments={mockComments} onDelete={mockOnDelete} />);

    const deleteButtons = screen.getAllByTestId('delete-button');
    fireEvent.click(deleteButtons[0]);

    expect(mockOnDelete).toHaveBeenCalledWith(1);
  });

  test('displays author name for each comment', () => {
    render(<CommentList comments={mockComments} onDelete={() => {}} />);
    const authors = screen.getAllByText('Anonymous');
    expect(authors).toHaveLength(2);
  });

  test('displays timestamp for each comment', () => {
    render(<CommentList comments={mockComments} onDelete={() => {}} />);
    const timestamps = screen.getAllByText('Just now');
    expect(timestamps.length).toBeGreaterThan(0);
  });
});
