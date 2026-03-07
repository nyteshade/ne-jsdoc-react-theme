import React from 'react';
import { createRoot } from 'react-dom/client';
import '@radix-ui/themes/styles.css';
import './styles.css';
import { App } from './App';

const data = window.__JSDOC_DATA__;
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>
);
