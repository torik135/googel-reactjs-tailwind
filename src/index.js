import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

// context
import { ResultContextProvider } from './contexts/ResultContextProvider'

ReactDOM.render(
  <ResultContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ResultContextProvider>,
  document.getElementById('root')
);
