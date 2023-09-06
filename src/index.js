import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalContextProvider from './context/GlobalState';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>
);

