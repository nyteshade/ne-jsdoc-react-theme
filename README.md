# jsdoc-react-theme

A modern, dark-themed JSDoc template built with [React](https://react.dev) and [Radix UI](https://www.radix-ui.com/themes), inspired by [AuthKit](https://authkit.com).

Generates beautiful API documentation as a single-page React app with full-text search, resizable sidebar navigation, syntax-highlighted code blocks, and responsive design.

## Features

- **Radix UI components** — Dialog, Card, Table, Tabs, Badge, ScrollArea, and more
- **Dark theme** — Radix Themes with red accent, slate gray scale
- **⌘K search** — Full-text search across all documented items
- **Resizable sidebar** — Drag to resize, double-click to reset, persists across sessions
- **Syntax highlighting** — highlight.js with Radix-aligned color tokens
- **Responsive** — Collapsible sidebar on mobile
- **Zero-config CLI** — One command, no jsdoc.json needed
- **Single-page app** — Hash-based routing, no page reloads

## Installation

```bash
npm install jsdoc-react-theme
```

Or install directly from GitHub:

```bash
npm install github:YOUR_USERNAME/jsdoc-react-theme
```

## Quick Start

The fastest way to generate docs — no config file needed:

```bash
npx jsdoc-react src/
```

This will:
1. Find all `.js`, `.jsx`, `.mjs`, `.cjs` files in `src/` recursively
2. Auto-detect your `README.md`
3. Output documentation to `docs/`

## Usage

### CLI (recommended)

```bash
# Basic usage — document a source directory
npx jsdoc-react src/

# Multiple source directories
npx jsdoc-react src/ lib/

# Custom output directory
npx jsdoc-react src/ -o api-docs

# Specify a README explicitly
npx jsdoc-react src/ -r docs/API.md

# Use an existing jsdoc config (theme is auto-applied)
npx jsdoc-react -c jsdoc.json
```

#### CLI Options

| Option | Description | Default |
|--------|-------------|---------|
| `<source-dirs...>` | Source files or directories to document | *(required)* |
| `-o, --output <dir>` | Output directory | `docs` |
| `-r, --readme <file>` | README file to include as the home page | Auto-detected |
| `-c, --config <file>` | Existing JSDoc config file (theme is injected) | — |
| `-h, --help` | Show help | — |

### Direct JSDoc Usage

If you prefer using JSDoc directly, pass the theme as the template:

```bash
npx jsdoc src/ -t ./node_modules/jsdoc-react-theme -d docs
```

Or add it to your `jsdoc.json`:

```json
{
  "source": {
    "include": ["src/"],
    "includePattern": ".+\\.(js|jsx|mjs|cjs)$"
  },
  "opts": {
    "destination": "docs",
    "template": "./node_modules/jsdoc-react-theme",
    "recurse": true,
    "readme": "README.md"
  },
  "plugins": ["plugins/markdown"]
}
```

Then run:

```bash
npx jsdoc -c jsdoc.json
```

### npm Scripts

Add it to your project's `package.json` for easy access:

```json
{
  "scripts": {
    "docs": "jsdoc-react src/ -o docs",
    "docs:open": "jsdoc-react src/ -o docs && open docs/index.html"
  }
}
```

## What Gets Documented

The theme generates pages for:

- **Modules** (`@module`) — with their exported members
- **Classes** (`@class`) — with constructor, methods, static methods, properties, events
- **Interfaces** (`@interface`)
- **Namespaces** (`@namespace`)
- **Mixins** (`@mixin`)
- **Global functions and constants** — anything not inside a module/class

Each documented item supports:

- `@param` — rendered as a Radix Table with type badges
- `@returns` / `@throws` — with type badges
- `@example` — syntax-highlighted code blocks
- `@type` — type annotation badges
- `@deprecated` — warning notice
- `@since` — version badge
- `@access` (`@private`, `@protected`) — access badge
- `@async`, `@static`, `@readonly`, `@generator` — modifier badges
- `@see` — see-also links
- `@augments` / `@implements` — inheritance display
- `{@link}` — cross-reference links between documented items

## Output

The theme generates a single `index.html` file with:
- `index.html` — the documentation SPA
- `index.js` — bundled React + Radix UI app
- `index.css` — Radix Themes + custom styles

The documentation data is embedded directly in the HTML, so all three files work together offline — no server required. Just open `index.html` in a browser.

## Example

Given a source file:

```javascript
/**
 * Represents a user in the system.
 * @class
 * @example
 * const user = new User('john', 'john@example.com');
 */
class User {
  /**
   * Create a new User.
   * @param {string} name - Display name
   * @param {string} email - Email address
   * @param {Object} [options] - Additional options
   * @param {string} [options.role='user'] - User role
   */
  constructor(name, email, options = {}) {
    this.name = name;
    this.email = email;
  }

  /**
   * Update the user's profile.
   * @param {Object} data - Fields to update
   * @returns {User} The updated user
   * @throws {Error} If no fields provided
   */
  updateProfile(data) { /* ... */ }

  /**
   * Create a User from a plain object.
   * @static
   * @param {Object} data - Source data
   * @returns {User} New User instance
   */
  static fromJSON(data) { /* ... */ }
}
```

Run:

```bash
npx jsdoc-react src/user.js -o docs
open docs/index.html
```

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `⌘K` / `Ctrl+K` | Open search |
| `↑` / `↓` | Navigate search results |
| `Enter` | Go to selected result |
| `Escape` | Close search |

## Browser Support

The generated documentation works in all modern browsers (Chrome, Firefox, Safari, Edge). No server required — works with `file://` protocol.

## Development

To work on the theme itself:

```bash
git clone https://github.com/YOUR_USERNAME/jsdoc-react-theme.git
cd jsdoc-react-theme
npm install

# Build the React app
npm run build

# Watch mode (rebuilds on changes)
npm run dev

# Test against the sample fixture
npx jsdoc test/sample.js -t . -d test/output
open test/output/index.html

# Production build (minified)
npm run build:prod
```

### Architecture

The theme uses a two-phase pipeline:

1. **Build phase** — esbuild bundles `src/index.jsx` (React + Radix UI + highlight.js) into `dist/index.js` + `dist/index.css`
2. **Publish phase** — JSDoc calls `publish.js`, which processes doclets into JSON via `src/process.js`, embeds the JSON into `index.html` as `window.__JSDOC_DATA__`, and copies the pre-built `dist/` assets

The React app reads the embedded data and renders everything client-side with hash-based routing.

## License

ISC
