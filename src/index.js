import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import PropTypes from "prop-types";
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/Theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
