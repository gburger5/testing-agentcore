import { render, screen, fireEvent } from '@testing-library/react';
import CommentForm from './CommentForm';

describe('CommentForm Component', () => {
  test('renders comment input', () => {
    render(<CommentForm onSubmit={() => {}} />);
    const input = screen.getByTestId('comment-input');
    expect(input).toBeInTheDocument();
  });

  test('renders submit button', () => {
    render(<CommentForm onSubmit={() => {}} />);
    const button = screen.getByTestId('submit-button');
    expect(button).toBeInTheDocument();
  });

  test('submit button is disabled when input is empty', () => {
    render(<CommentForm onSubmit={() => {}} />);
    const button = screen.getByTestId('submit-button');
    expect(button).toBeDisabled();
  });

  test('submit button is enabled when input has text', () => {
    render(<CommentForm onSubmit={() => {}} />);
    const input = screen.getByTestId('comment-input');
    const button = screen.getByTestId('submit-button');

    fireEvent.change(input, { target: { value: 'Test' } });
    expect(button).not.toBeDisabled();
  });

  test('calls onSubmit with comment text when form is submitted', () => {
    const mockOnSubmit = jest.fn();
    render(<CommentForm onSubmit={mockOnSubmit} />);

    const input = screen.getByTestId('comment-input');
    const button = screen.getByTestId('submit-button');

    fireEvent.change(input, { target: { value: 'Test comment' } });
    fireEvent.click(button);

    expect(mockOnSubmit).toHaveBeenCalledWith('Test comment');
  });

  test('clears input after submission', () => {
    render(<CommentForm onSubmit={() => {}} />);

    const input = screen.getByTestId('comment-input');
    const button = screen.getByTestId('submit-button');

    fireEvent.change(input, { target: { value: 'Test comment' } });
    fireEvent.click(button);

    expect(input.value).toBe('');
  });

  test('does not submit when comment is only whitespace', () => {
    const mockOnSubmit = jest.fn();
    render(<CommentForm onSubmit={mockOnSubmit} />);

    const input = screen.getByTestId('comment-input');
    const button = screen.getByTestId('submit-button');

    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(button);

    expect(mockOnSubmit).not.toHaveBeenCalled();
  });
});
