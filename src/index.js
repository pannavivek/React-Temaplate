import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
//import '../node_modules/owl.carousel/dist/assets/owl.carousel.css';

import './css/animate.min.css';
import './css/magnific-popup.min.css';
//import './css/meanmenu.min.css';
import './css/responsive.css';
import './css/flaticon.css';
import './css/style.css';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

ReactDOM.render(
  <>
      <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </>,
  document.getElementById('root')
);


