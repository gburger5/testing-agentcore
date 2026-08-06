# testing-agentcore

## Project

**AnyFourm** - A futuristic forum application with a React frontend and Express backend.

## Architecture

This is a full-stack application with:
- **Frontend**: React app (client-side)
- **Backend**: Express API server
- **Storage**: In-memory comment storage

## Repository Structure

```
/
├── client/              # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js           # Main app component
│   │   ├── App.css          # App styling (futuristic purple theme)
│   │   ├── index.js         # React entry point
│   │   ├── index.css        # Global styles
│   │   └── components/
│   │       ├── CommentForm.js
│   │       ├── CommentList.js
│   │       └── __tests__/
│   ├── package.json
│   └── node_modules/
├── server/              # Express backend
│   ├── index.js         # API server with /api/comments endpoints
│   └── __tests__/
├── package.json         # Root package with scripts
├── jest.setup.js
└── README.md
```

## Getting Started

### Installation

```bash
# Install root dependencies
npm install

# Install client dependencies
cd client && npm install && cd ..
```

### Development

```bash
# Run both frontend and backend concurrently
npm run dev
```

This will:
- Start the Express server on `http://localhost:5000`
- Start the React dev server on `http://localhost:3000`
- The React app proxies API requests to the backend

### Individual Commands

```bash
npm run server    # Run backend only (nodemon)
npm run client    # Run frontend only
npm start         # Run production server
npm test          # Run all tests
npm run build     # Build React app for production
```

## API Endpoints

- `GET /api/comments` - Fetch all comments
- `POST /api/comments` - Create a new comment (requires `author` and `content`)
- `DELETE /api/comments/:id` - Delete a comment by ID

## Features

- Real-time comment posting and deletion
- Futuristic purple gradient theme with animations
- Responsive design
- Error handling and loading states
- Jest tests for components and API

## Tech Stack

- **Frontend**: React 18, react-scripts
- **Backend**: Express, cors, body-parser
- **Testing**: Jest, React Testing Library
- **Dev Tools**: nodemon, concurrently

## Definition of Done

- Running `npm run dev` starts both servers
- Navigate to `http://localhost:3000` to see the AnyFourm interface
- Can post and delete comments successfully
- All tests pass with `npm test`