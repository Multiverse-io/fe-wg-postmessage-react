import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('react-app'));
root.render(
  createElement('h1', {}, 'Hello from React!')
);
