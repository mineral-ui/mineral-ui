/* @flow */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'babel-polyfill';
import App from './app/App';
import demoRoutes from './app/demos/routes';
require('./index.css');

render(
  <BrowserRouter>
    <App demoRoutes={demoRoutes} />
  </BrowserRouter>,
  global.document.getElementById('app')
);
