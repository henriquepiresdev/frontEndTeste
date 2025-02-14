import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from "@material-tailwind/react";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { UserProvider } from './context';

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </ThemeProvider>

    </QueryClientProvider>
  </React.StrictMode>
);
