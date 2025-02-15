import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LimitProvider } from "./context/limitContext";
import { ThemeProvider } from "@material-tailwind/react";
import { UserProvider } from './context';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import React from 'react';
import './index.css';


const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <UserProvider>
          <LimitProvider>
            <App />
          </LimitProvider>
        </UserProvider>
      </ThemeProvider>

    </QueryClientProvider>
  </React.StrictMode>
);
