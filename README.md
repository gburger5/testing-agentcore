# AnyFourm - Local Forum Management Platform

A simple, lightweight forum management system that runs entirely in your browser. No server, no deployment, no account required.

## Features

- **Create Forums** - Start new discussion forums with titles, descriptions, and categories
- **Browse Forums** - View all forums in an organized grid layout
- **Add Posts** - Contribute to forums with text posts
- **Search & Filter** - Find forums by keyword or category
- **Local Storage** - All data persists in your browser's localStorage
- **Offline Ready** - Works completely offline once loaded

## Getting Started

### For Users

1. **Open the app**: Double-click `index.html` or open it in your web browser
2. **Create a forum**: Click "Create Forum" and fill out the form
3. **Browse forums**: Navigate to "Browse Forums" to see all created forums
4. **Add posts**: Click on any forum to view it and add posts

### For Developers

#### File Structure

```
/
├── index.html              # Main landing page
├── CLAUDE.md              # Developer documentation
├── README.md              # This file
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

#### Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Flexbox, Grid
- **JavaScript (ES6+)** - Modern vanilla JavaScript
- **LocalStorage API** - Data persistence

#### Development

No build tools or dependencies required. Simply:

1. Edit HTML/CSS/JS files
2. Refresh your browser to see changes
3. Use browser DevTools to inspect localStorage

#### Code Conventions

- **JavaScript**: camelCase for variables/functions, JSDoc comments
- **CSS**: BEM methodology (Block__Element--Modifier)
- **Indentation**: 2 spaces
- **Mobile-First**: Responsive design approach

## Data Model

### Forum
```javascript
{
  id: "uuid-string",
  title: "Forum Title",
  description: "Forum description...",
  category: "Technology",
  author: "John Doe",
  createdAt: 1234567890,
  posts: [...]
}
```

### Post
```javascript
{
  id: "uuid-string",
  author: "Jane Smith",
  content: "Post content...",
  createdAt: 1234567890
}
```

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

Requires localStorage support (available in all modern browsers).

## Data Management

### Clearing Data

To reset the application and remove all forums:

1. Open browser DevTools (F12)
2. Go to Application/Storage tab
3. Find localStorage for your domain
4. Delete all entries or clear localStorage

### Export/Import (Manual)

1. Open DevTools Console
2. Export: `console.log(localStorage.getItem('anyfourn_forums'))`
3. Copy the JSON string
4. Import: `localStorage.setItem('anyfourn_forums', 'PASTE_JSON_HERE')`

## Troubleshooting

**Forums not persisting?**
- Check if localStorage is enabled in your browser
- Ensure you're not in private/incognito mode
- Check browser storage limits (usually 5-10MB)

**Styles not loading?**
- Ensure all CSS files are in the `css/` directory
- Check browser console for 404 errors
- Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

## Future Enhancements

- Rich text editor for posts
- User profiles (localStorage-based)
- Forum categories and tags
- Sorting options (date, title, popularity)
- Export/import functionality (JSON files)
- Markdown support
- Reply threading
- Like/upvote system

## License

This project is open source and available for personal and educational use.

## Contributing

Since this is a local application, feel free to modify and extend it for your needs!

---

**Built with ❤️ using pure HTML, CSS, and JavaScript**
