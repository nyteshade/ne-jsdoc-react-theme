import React from 'react';
import { createRoot } from 'react-dom/client';
import '@radix-ui/themes/styles.css';
import './styles.css';
import { App } from './App';

const docs = globalThis[Symbol.for('jsdoc.content')];
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App docs={docs} />
  </React.StrictMode>
);
