import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthContextProvider } from '@/contexts/Auth.context';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);

