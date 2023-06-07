import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { Provider } from 'react-redux';
import { ToasterProvider } from './utils/toast-provider';
import store from './redux/store';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
  palette: {
    primary: {
      main: '#d32f2f',
      ena: '#f44336',
    },
    secondary: {
      main: grey[50],
    },
  },
});
root.render(
  <React.StrictMode>
    <ToasterProvider />
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
