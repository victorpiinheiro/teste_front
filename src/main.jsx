import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {ToastContainer} from 'react-toastify'

import { GlobalStyles } from './styles/GlobalStyles.jsx';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GlobalStyles />
    <App />
    <ToastContainer autoClose={2500} position='top-left' />
    </BrowserRouter>
  </StrictMode>,
)
