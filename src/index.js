import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthContextProvider from './context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthContextProvider>
  </BrowserRouter>
);
