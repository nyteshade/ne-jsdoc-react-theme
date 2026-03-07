# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A modern JSDoc theme built with React and Radix UI, inspired by AuthKit. Generates a single-page React app from JSDoc data with dark theme, search (⌘K), responsive sidebar, and Radix UI components (Dialog, Table, Card, Tabs, Badge, ScrollArea, etc.).

## Commands

- `npm run build` — Bundle the React app with esbuild → `dist/`
- `npm run build:prod` — Minified production bundle
- `npm run dev` — Watch mode for development
- `npx jsdoc test/sample.js -t . -d test/output` — Test the theme against sample fixture
- `node bin/cli.js <source-dirs> -o <output>` — CLI wrapper (auto-configures JSDoc)

## Architecture

### Two-phase pipeline

1. **Build phase** (`build.js`): esbuild bundles `src/index.jsx` → `dist/index.js` + `dist/index.css`. This bundles React, Radix UI Themes, highlight.js, and all custom components into a self-contained SPA.

2. **Publish phase** (`publish.js`): JSDoc calls `exports.publish(taffyData, opts)`. This processes doclets via `src/process.js` into a JSON-serializable structure, renders README with `marked`, embeds the JSON into `index.html` as `window.__JSDOC_DATA__`, and copies the pre-built `dist/` assets alongside it.

### Key files

- `publish.js` — JSDoc template entry point (CommonJS, required by JSDoc)
- `src/process.js` — Transforms JSDoc's TaffyDB into structured JSON (CommonJS, used by publish.js)
- `src/index.jsx` — React entry point, mounts App with data from `window.__JSDOC_DATA__`
- `src/App.jsx` — Root component with Radix Theme provider, hash-based routing
- `src/Layout.jsx` — Sidebar navigation, ⌘K search dialog (Radix Dialog), mobile menu
- `src/EntityPage.jsx` — Renders class/module/namespace/global pages with Radix Tabs
- `src/DocEntry.jsx` — Renders individual documented items (methods, properties, typedefs) using Radix Card, Table, Badge; includes highlight.js for code examples
- `src/HomePage.jsx` — Landing page with README content
- `src/styles.css` — Custom CSS on top of Radix Themes (layout, code highlighting, nav)
- `bin/cli.js` — CLI that wraps JSDoc with auto-generated config

### Data flow

`JSDoc TaffyDB` → `process.js` serializes doclets → `publish.js` embeds as JSON in HTML → React app reads `window.__JSDOC_DATA__` → hash routing (`#slug`) selects page → Radix components render

### Process.js data structure

```
{ packageInfo, readme, nav: [{ title, items: [{ name, slug }] }],
  pages: [{ slug, kind, title, doclet: {...}, members: { classes, methods, staticMethods, properties, staticProperties, events, typedefs } }] }
```

Each doclet is serialized with: name, longname, kind, scope, access, description, params, returns, exceptions, properties, examples, type, meta, augments, etc.

## Integration (for users)

```bash
npm install jsdoc-react-theme
npx jsdoc-react src/          # Zero-config CLI
# or: npx jsdoc -t ./node_modules/jsdoc-react-theme -d docs src/
```

## Notes

- `dist/` must be built before the theme can be used — `publish.js` checks for this
- JSDoc loads `publish.js` via `require()`, so it and `process.js` must be CommonJS
- The React components use JSX with esbuild's automatic JSX transform
- Radix Themes accent color is `red`, gray is `slate`, appearance is `dark`
- Sidebar is resizable (drag handle on right edge, double-click to reset), width persisted to localStorage
- `dist/` is committed to git and included in npm package via `files` field (sourcemaps excluded)
- `prepublishOnly` script auto-rebuilds before `npm publish`
