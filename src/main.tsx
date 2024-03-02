import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import '@assets/styles/index.css';
import '@assets/styles/fonts.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <h1 className="text-purple-400 font-abhaya text-2xl">Cypheryard</h1>
    </HelmetProvider>
  </React.StrictMode>
);
