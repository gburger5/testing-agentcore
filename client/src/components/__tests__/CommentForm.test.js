import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CommentForm from '../CommentForm';

describe('CommentForm Component', () => {
  test('renders form with all input fields', () => {
    render(<CommentForm onAddComment={jest.fn()} />);

    expect(screen.getByPlaceholderText('Your name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Share your thoughts...')).toBeInTheDocument();
    expect(screen.getByText('🚀 Post Comment')).toBeInTheDocument();
  });

  test('allows user to type in input fields', async () => {
    const user = userEvent.setup();
    render(<CommentForm onAddComment={jest.fn()} />);

    const nameInput = screen.getByPlaceholderText('Your name');
    const contentInput = screen.getByPlaceholderText('Share your thoughts...');

    await user.type(nameInput, 'John Doe');
    await user.type(contentInput, 'This is a test comment');

    expect(nameInput.value).toBe('John Doe');
    expect(contentInput.value).toBe('This is a test comment');
  });

  test('submit button is disabled when fields are empty', () => {
    render(<CommentForm onAddComment={jest.fn()} />);

    const submitButton = screen.getByText('🚀 Post Comment');
    expect(submitButton).toBeDisabled();
  });

  test('submit button is enabled when both fields are filled', async () => {
    const user = userEvent.setup();
    render(<CommentForm onAddComment={jest.fn()} />);

    const nameInput = screen.getByPlaceholderText('Your name');
    const contentInput = screen.getByPlaceholderText('Share your thoughts...');

    await user.type(nameInput, 'John Doe');
    await user.type(contentInput, 'This is a test comment');

    const submitButton = screen.getByText('🚀 Post Comment');
    expect(submitButton).not.toBeDisabled();
  });

  test('calls onAddComment with correct data when form is submitted', async () => {
    const user = userEvent.setup();
    const mockOnAddComment = jest.fn().mockResolvedValue(true);
    render(<CommentForm onAddComment={mockOnAddComment} />);

    const nameInput = screen.getByPlaceholderText('Your name');
    const contentInput = screen.getByPlaceholderText('Share your thoughts...');

    await user.type(nameInput, 'John Doe');
    await user.type(contentInput, 'This is a test comment');

    const submitButton = screen.getByText('🚀 Post Comment');
    await user.click(submitButton);

    expect(mockOnAddComment).toHaveBeenCalledWith({
      author: 'John Doe',
      content: 'This is a test comment'
    });
  });

  test('clears form fields after successful submission', async () => {
    const user = userEvent.setup();
    const mockOnAddComment = jest.fn().mockResolvedValue(true);
    render(<CommentForm onAddComment={mockOnAddComment} />);

    const nameInput = screen.getByPlaceholderText('Your name');
    const contentInput = screen.getByPlaceholderText('Share your thoughts...');

    await user.type(nameInput, 'John Doe');
    await user.type(contentInput, 'This is a test comment');

    const submitButton = screen.getByText('🚀 Post Comment');
    await user.click(submitButton);

    await waitFor(() => {
      expect(nameInput.value).toBe('');
      expect(contentInput.value).toBe('');
    });
  });

  test('shows "Posting..." text while submitting', async () => {
    const user = userEvent.setup();
    const mockOnAddComment = jest.fn(() => new Promise(resolve => setTimeout(() => resolve(true), 100)));
    render(<CommentForm onAddComment={mockOnAddComment} />);

    const nameInput = screen.getByPlaceholderText('Your name');
    const contentInput = screen.getByPlaceholderText('Share your thoughts...');

    await user.type(nameInput, 'John Doe');
    await user.type(contentInput, 'This is a test comment');

    const submitButton = screen.getByText('🚀 Post Comment');
    await user.click(submitButton);

    expect(screen.getByText('Posting...')).toBeInTheDocument();
  });
});
