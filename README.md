# AnyFourm

A futuristic local forum application with a clean, purple-themed design. Users can post and delete comments on a community board with real-time updates.

## Tech Stack

- **Frontend**: React 18, CSS3
- **Backend**: Node.js, Express
- **Storage**: LocalStorage (frontend), In-memory (backend)
- **Testing**: Jest, React Testing Library, Supertest

## Features

- 🎨 Futuristic purple gradient design with glowing effects
- 💬 Post comments to a community board
- 🗑️ Delete comments
- 💾 Persistent storage using localStorage
- 📱 Responsive design for mobile and desktop
- ✨ Smooth animations and transitions
- 🧪 Comprehensive test coverage

## Project Structure

```
anyfourm/
├── frontend/               # React frontend application
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── CommentForm.js
│   │   │   ├── CommentForm.css
│   │   │   ├── CommentForm.test.js
│   │   │   ├── CommentList.js
│   │   │   ├── CommentList.css
│   │   │   └── CommentList.test.js
│   │   ├── App.js          # Main app component
│   │   ├── App.css         # Main app styles
│   │   ├── App.test.js     # Main app tests
│   │   ├── index.js        # App entry point
│   │   ├── index.css       # Global styles
│   │   └── setupTests.js   # Jest configuration
│   └── package.json
├── backend/                # Node.js backend
│   ├── server.js           # Express server
│   ├── server.test.js      # Server tests
│   └── package.json
├── package.json            # Root package.json
├── .gitignore
└── README.md
```

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd testing-agentcore
```

2. Install all dependencies:
```bash
npm run install:all
```

Or install manually:
```bash
npm install
cd frontend && npm install
cd ../backend && npm install
```

## Running the Application

### Development Mode (Frontend + Backend)

Run both frontend and backend concurrently:
```bash
npm run dev
```

- Frontend: http://localhost:3000
- Backend: http://localhost:3001

### Run Frontend Only
```bash
npm run dev:frontend
```

### Run Backend Only
```bash
npm run dev:backend
```

## Testing

### Run All Tests
```bash
npm test
```

### Run Frontend Tests Only
```bash
npm run test:frontend
```

### Run Backend Tests Only
```bash
npm run test:backend
```

### Test Coverage

The application includes comprehensive test coverage:

**Frontend Tests:**
- App integration tests (comment lifecycle, localStorage persistence)
- CommentForm unit tests (input validation, submission)
- CommentList unit tests (rendering, deletion, empty states)

**Backend Tests:**
- Health check endpoint
- GET /api/comments (retrieve comments)
- POST /api/comments (create comments with validation)
- DELETE /api/comments/:id (delete comments with error handling)

## API Endpoints

### Backend API (Port 3001)

- **GET /api/health** - Health check
  - Response: `{ status: 'ok', message: 'AnyFourm backend is running' }`

- **GET /api/comments** - Get all comments
  - Response: `{ comments: [...] }`

- **POST /api/comments** - Create a new comment
  - Body: `{ text: string, author?: string }`
  - Response: `{ comment: {...} }`

- **DELETE /api/comments/:id** - Delete a comment
  - Response: `{ message: 'Comment deleted successfully' }`

## Design Features

### Color Palette
- Primary Purple: `#a855f7`
- Dark Purple: `#7c3aed`
- Light Purple: `#c084fc`
- Background: Dark gradient from `#0a0015` to `#2d0052`

### Visual Effects
- Gradient text with glow effects
- Smooth hover transitions
- Glass-morphism design (backdrop blur)
- Animated button glows
- Pulsing logo animation

## Current Implementation

**Note:** The current version uses **localStorage** on the frontend for data persistence. The backend is set up with API endpoints and in-memory storage, but the frontend is not yet connected to it. This allows the app to work fully offline as a local application.

### To connect frontend to backend (future enhancement):
1. Replace localStorage calls in `App.js` with fetch/axios calls
2. Use the existing API endpoints in `backend/server.js`
3. Add error handling for network requests

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
