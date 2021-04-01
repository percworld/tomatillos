import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css'
import './index.css';
import App from './Components/App/App.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'; 

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
