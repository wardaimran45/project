import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';
 import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
 
<BrowserRouter>
   <App />
</BrowserRouter>,
  document.getElementById('root')
);


