import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('renders AnyFourm title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AnyFourm/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders tagline', () => {
    render(<App />);
    const taglineElement = screen.getByText(/The Future of Community Discussion/i);
    expect(taglineElement).toBeInTheDocument();
  });

  test('shows empty state when no comments', () => {
    render(<App />);
    const emptyState = screen.getByTestId('empty-state');
    expect(emptyState).toBeInTheDocument();
  });

  test('can add a new comment', () => {
    render(<App />);

    const input = screen.getByTestId('comment-input');
    const submitButton = screen.getByTestId('submit-button');

    fireEvent.change(input, { target: { value: 'Test comment' } });
    fireEvent.click(submitButton);

    expect(screen.getByText('Test comment')).toBeInTheDocument();
  });

  test('clears input after submitting comment', () => {
    render(<App />);

    const input = screen.getByTestId('comment-input');
    const submitButton = screen.getByTestId('submit-button');

    fireEvent.change(input, { target: { value: 'Test comment' } });
    fireEvent.click(submitButton);

    expect(input.value).toBe('');
  });

  test('can delete a comment', () => {
    render(<App />);

    const input = screen.getByTestId('comment-input');
    const submitButton = screen.getByTestId('submit-button');

    fireEvent.change(input, { target: { value: 'Test comment to delete' } });
    fireEvent.click(submitButton);

    const deleteButton = screen.getByTestId('delete-button');
    fireEvent.click(deleteButton);

    expect(screen.queryByText('Test comment to delete')).not.toBeInTheDocument();
  });

  test('persists comments to localStorage', () => {
    render(<App />);

    const input = screen.getByTestId('comment-input');
    const submitButton = screen.getByTestId('submit-button');

    fireEvent.change(input, { target: { value: 'Persistent comment' } });
    fireEvent.click(submitButton);

    const savedComments = JSON.parse(localStorage.getItem('anyfourm-comments'));
    expect(savedComments).toHaveLength(1);
    expect(savedComments[0].text).toBe('Persistent comment');
  });
});
