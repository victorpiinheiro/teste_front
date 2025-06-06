import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from './styles/GlobalStyles.jsx';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GlobalStyles />
    <App />
    </BrowserRouter>
  </StrictMode>,
)
