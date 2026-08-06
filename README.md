# AnyForum

A fully local SaaS forum application with a futuristic purple design, built with React and Node.js.

## Features

- 🎨 Futuristic purple-themed UI with gradient effects
- 💬 Post and delete comments in real-time
- 🚀 Fully local - no external database required
- ⚡ Fast and responsive React frontend
- 🧪 Comprehensive test coverage with Jest
- 📱 Fully responsive design

## Tech Stack

**Frontend:**
- React 18.2.0
- CSS3 with gradient effects and animations
- Responsive design

**Backend:**
- Node.js with Express
- In-memory data store
- RESTful API

**Testing:**
- Jest for backend tests
- React Testing Library for frontend tests

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd testing-agentcore
```

2. Install all dependencies (root and frontend):
```bash
npm run install-all
```

### Running the Application

Start both backend and frontend servers concurrently:
```bash
npm start
```

This will start:
- Backend server on `http://localhost:5000`
- Frontend development server on `http://localhost:3000`

The frontend will automatically open in your browser.

### Running Tests

Run backend tests:
```bash
npm test
```

Run frontend tests:
```bash
cd frontend
npm test
```

## Project Structure

```
testing-agentcore/
├── backend/
│   ├── server.js          # Express server with API endpoints
│   └── server.test.js     # Backend API tests
├── frontend/
│   ├── public/
│   │   └── index.html     # HTML template
│   ├── src/
│   │   ├── components/
│   │   │   ├── CommentForm.js       # Form for posting comments
│   │   │   ├── CommentForm.css      # Form styling
│   │   │   ├── CommentForm.test.js  # Form component tests
│   │   │   ├── CommentList.js       # List of comments
│   │   │   ├── CommentList.css      # List styling
│   │   │   └── CommentList.test.js  # List component tests
│   │   ├── App.js         # Main application component
│   │   ├── App.css        # Main application styling
│   │   ├── App.test.js    # App component tests
│   │   ├── index.js       # React entry point
│   │   ├── index.css      # Global styles
│   │   └── setupTests.js  # Jest configuration
│   └── package.json       # Frontend dependencies
├── package.json           # Root dependencies and scripts
├── CLAUDE.md             # Project documentation for AI agents
└── README.md             # This file
```

## API Endpoints

### GET /api/health
Health check endpoint
- **Response**: `{ status: 'ok', timestamp: '...' }`

### GET /api/comments
Retrieve all comments
- **Response**: Array of comment objects

### POST /api/comments
Create a new comment
- **Request Body**: `{ author: string, content: string }`
- **Response**: Created comment object

### DELETE /api/comments/:id
Delete a comment by ID
- **Response**: 204 No Content

## Design Features

- **Futuristic Theme**: Purple gradients (#7c3aed to #a855f7) with glow effects
- **Smooth Animations**: Hover effects, transitions, and loading states
- **Glass-morphism**: Backdrop blur effects on cards and forms
- **Responsive Layout**: Works seamlessly on mobile, tablet, and desktop
- **Accessibility**: ARIA labels and semantic HTML

## License

MIT
