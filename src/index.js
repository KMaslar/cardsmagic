import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Main from './components/Main';
import HomeButton from './components/HomeButtom';
import App from './App';
import { Router } from 'react-router-dom';
import FilterType from './components/FilterType';



ReactDOM.render(
  // <Router>
  //   <App/>
  // </Router>
  //<FilterType/>
  <Main/>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
