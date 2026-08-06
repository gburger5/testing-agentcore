import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';

// Mock fetch globally
global.fetch = jest.fn();

describe('App Component', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('renders app header with logo', () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => []
    });

    render(<App />);

    expect(screen.getByText('AnyFourm')).toBeInTheDocument();
    expect(screen.getByText('Share Your Thoughts in the Digital Realm')).toBeInTheDocument();
  });

  test('fetches comments on mount', async () => {
    const mockComments = [
      {
        id: 1,
        author: 'Test User',
        content: 'Test comment',
        timestamp: '2026-08-06T10:00:00.000Z'
      }
    ];

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockComments
    });

    render(<App />);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith('/api/comments');
    });
  });

  test('displays loading state initially', () => {
    fetch.mockImplementation(() => new Promise(() => {})); // Never resolves

    render(<App />);

    expect(screen.getByText('Loading comments...')).toBeInTheDocument();
  });

  test('displays error message on fetch failure', async () => {
    fetch.mockRejectedValueOnce(new Error('Failed to fetch'));

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText(/Failed to fetch/i)).toBeInTheDocument();
    });
  });

  test('renders footer', () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => []
    });

    render(<App />);

    expect(screen.getByText(/AnyFourm © 2026 - Powered by the Future/i)).toBeInTheDocument();
  });
});
