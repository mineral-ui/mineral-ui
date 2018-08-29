/* @flow */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'babel-polyfill';
import App from './app/App';
require('./index.css');

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  global.document.getElementById('app')
);
