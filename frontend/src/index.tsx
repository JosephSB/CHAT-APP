import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthContextProvider } from '@/contexts/Auth.context';
import './index.css';
import RootRouter from './router/root.router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <RootRouter />
    </AuthContextProvider>
  </React.StrictMode>
);

