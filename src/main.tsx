import App from './App';
import 'modern-normalize';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router basename="">
      <App />
    </Router>
  </React.StrictMode>
);
