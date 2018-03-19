/* @flow */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { simulations } from 'glamor';
import 'babel-polyfill';
import ThemeProvider from '../library/themes/ThemeProvider';
import App from './app/App';
import demoRoutes from './app/demos/routes';
require('./index.css');

// Enable Glamor simulate helper
simulations(true);

render(
  <BrowserRouter>
    <ThemeProvider>
      <App demoRoutes={demoRoutes} />
    </ThemeProvider>
  </BrowserRouter>,
  global.document.getElementById('app')
);
