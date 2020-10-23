import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.hydrate(
  <React.StrictMode>
      <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

