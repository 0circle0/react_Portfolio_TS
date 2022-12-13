import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
