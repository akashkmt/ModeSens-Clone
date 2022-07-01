import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthContextProvider from './context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import { positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const root = ReactDOM.createRoot(document.getElementById('root'));
const options = {
  timeout: 3000,
  position: positions.TOP_CENTER
};
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <AlertProvider template={AlertTemplate} {...options}>
        <Provider store={store}>
          <App />
        </Provider>
      </AlertProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
