/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { simulations } from 'glamor';
import 'babel-polyfill';
import { ThemeProvider } from '../themes';
import App from './app/App';
import demos from './app/demos';
require('./index.css');
require('react-live/react-live.css');

// Enable Glamor simulate helper
simulations(true);

render(
  <BrowserRouter>
    <ThemeProvider>
      <App demos={demos} />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('app')
);
