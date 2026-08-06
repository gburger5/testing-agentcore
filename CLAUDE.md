# testing-agentcore

## Project

**AnyFourm** - A local SaaS application for creating and managing forums.

## Overview

AnyFourm is a web-based forum management system that allows users to:
- Upload and create forum posts
- Browse existing forums
- View forum details and discussions
- Manage forum content locally (no deployment/server required)

## Architecture

### Frontend
- **Pure HTML/CSS/JavaScript** - No build tools or frameworks required
- **Local Storage** - All data persists in browser's localStorage
- **Responsive Design** - Mobile-friendly interface

### File Structure

```
/
├── index.html              # Main landing page
├── CLAUDE.md              # This file - project documentation
├── README.md              # User-facing documentation
├── css/
│   ├── main.css           # Global styles and layout
│   ├── components.css     # Reusable component styles
│   └── theme.css          # Color scheme and theming
├── js/
│   ├── app.js             # Main application logic
│   ├── storage.js         # LocalStorage management
│   ├── forum.js           # Forum CRUD operations
│   └── utils.js           # Utility functions
└── pages/
    ├── create.html        # Create new forum page
    ├── browse.html        # Browse all forums page
    └── view.html          # View single forum page
```

## Requirements

### Functional Requirements
- **Create Forums**: Users can create new forums with title, description, and category
- **Browse Forums**: Display all forums in a grid/list view
- **View Forums**: Show individual forum details and discussions
- **Local Persistence**: All data stored in browser localStorage
- **Search**: Basic search/filter functionality for forums

### Technical Requirements
- Pure HTML/CSS/JavaScript (no frameworks)
- Works offline - no server required
- Responsive design for mobile/tablet/desktop
- Clean, maintainable code structure
- Cross-browser compatible (modern browsers)

## Data Model

### Forum Object
```javascript
{
  id: string,           // Unique identifier (UUID)
  title: string,        // Forum title
  description: string,  // Forum description
  category: string,     // Forum category (e.g., "Technology", "General")
  author: string,       // Forum creator name
  createdAt: timestamp, // Creation timestamp
  posts: []            // Array of post objects
}
```

### Post Object
```javascript
{
  id: string,          // Unique identifier
  author: string,      // Post author name
  content: string,     // Post content
  createdAt: timestamp // Creation timestamp
}
```

## Components

### Navigation
- Consistent header across all pages
- Links to: Home, Browse Forums, Create Forum

### Forum Card
- Displays forum summary (title, description, category)
- Click to view full forum

### Forum Form
- Input fields for title, description, category, author
- Validation and error handling

### Forum View
- Display full forum details
- Show all posts
- Add new post functionality

## Conventions

### Code Style
- **Naming**: camelCase for variables/functions, PascalCase for classes
- **Indentation**: 2 spaces
- **Comments**: JSDoc style for functions, inline for complex logic
- **File Organization**: Modular structure, single responsibility

### CSS
- **BEM Methodology**: Block__Element--Modifier naming
- **Variables**: Use CSS custom properties for colors, spacing
- **Mobile-First**: Start with mobile styles, add desktop enhancements

### JavaScript
- **ES6+**: Modern JavaScript syntax
- **Modules**: Logical separation of concerns
- **Error Handling**: Try-catch blocks for localStorage operations
- **Constants**: UPPERCASE for configuration values

## Definition of Done

- [ ] All HTML pages render correctly
- [ ] Forums can be created with valid data
- [ ] Forums are stored in localStorage and persist on refresh
- [ ] Browse page displays all forums
- [ ] Individual forum view shows details and posts
- [ ] Users can add posts to forums
- [ ] Search/filter works on browse page
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] No console errors
- [ ] Code is clean, commented, and follows conventions

## Getting Started

### For Users
1. Open `index.html` in a web browser
2. Click "Create Forum" to add your first forum
3. Browse and view forums from the homepage

### For Developers
1. Clone the repository
2. Open `index.html` in a browser - no build step needed
3. Make changes to HTML/CSS/JS files
4. Refresh browser to see changes
5. Use browser DevTools to inspect localStorage

## Future Enhancements

- User authentication (localStorage-based)
- Rich text editor for posts
- Forum categories/tags
- Sorting and advanced filtering
- Export/import forum data (JSON)
- Markdown support for posts
- Like/reply functionality for posts
