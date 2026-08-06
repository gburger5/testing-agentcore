# AnyFourm

A futuristic local SaaS forum application with a clean purple design. Built with React frontend and Node.js backend.

## Features

- 🚀 Modern, futuristic UI with purple gradient design
- 💬 Post and view comments in real-time
- 🗑️ Delete comments
- 📱 Fully responsive design
- 💾 In-memory storage (no database required)
- ✅ Comprehensive test suite with Jest

## Tech Stack

### Frontend
- React 18
- CSS3 with modern animations
- Responsive design
- Testing Library (Jest + React Testing Library)

### Backend
- Node.js
- Express.js
- In-memory data storage
- RESTful API

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

2. Install root dependencies:
```bash
npm install
```

3. Install client dependencies:
```bash
cd client
npm install
cd ..
```

### Running the Application

#### Development Mode (with hot reload)
```bash
npm run dev
```

This will start:
- Backend server on http://localhost:5000
- Frontend dev server on http://localhost:3002

#### Production Mode
```bash
# Build the frontend
cd client
npm run build
cd ..

# Start the server (serves built frontend)
NODE_ENV=production npm start
```

Visit http://localhost:5000 in your browser.

### Running Tests

#### Run all tests:
```bash
npm test
```

#### Run tests in watch mode:
```bash
npm run test:watch
```

#### Run frontend tests only:
```bash
cd client
npm test
```

## Project Structure

```
testing-agentcore/
├── client/                    # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/        # React components
│   │   │   ├── CommentForm.js
│   │   │   ├── CommentForm.css
│   │   │   ├── CommentList.js
│   │   │   ├── CommentList.css
│   │   │   └── __tests__/     # Component tests
│   │   │       ├── CommentForm.test.js
│   │   │       └── CommentList.test.js
│   │   ├── App.js             # Main app component
│   │   ├── App.css
│   │   ├── index.js           # React entry point
│   │   ├── index.css          # Global styles
│   │   └── __tests__/         # App tests
│   │       └── App.test.js
│   └── package.json
├── server/                    # Node.js backend
│   ├── index.js              # Express server
│   └── __tests__/            # API tests
│       └── api.test.js
├── package.json              # Root package.json
├── jest.setup.js             # Jest configuration
├── CLAUDE.md                 # Project documentation for AI agents
└── README.md                 # This file
```

## API Endpoints

### GET /api/comments
Returns all comments.

**Response:**
```json
[
  {
    "id": 1,
    "author": "John Doe",
    "content": "This is a comment",
    "timestamp": "2026-08-06T10:00:00.000Z"
  }
]
```

### POST /api/comments
Creates a new comment.

**Request Body:**
```json
{
  "author": "John Doe",
  "content": "This is a comment"
}
```

**Response:**
```json
{
  "id": 2,
  "author": "John Doe",
  "content": "This is a comment",
  "timestamp": "2026-08-06T10:00:00.000Z"
}
```

### DELETE /api/comments/:id
Deletes a comment by ID.

**Response:** 204 No Content

## Design Features

- **Color Scheme:** Purple gradients (#7c3aed, #a855f7, #c084fc)
- **Animations:** Smooth transitions, glow effects, hover states
- **Responsive:** Mobile-first design
- **Accessibility:** High contrast, clear focus states
- **Modern UI:** Glass morphism, backdrop filters, gradient text

## Contributing

This is a local development project. Feel free to modify and extend as needed.

## License

MIT
