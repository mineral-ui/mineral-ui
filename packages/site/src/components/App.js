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
import React from 'react';
import HelloApp from '../../../hello/src/__demo__/App';
import WorldApp from '../../../world/src/__demo__/App';
import HelloWorldApp from '../../../hello-world/src/__demo__/App';
import Footer from './Footer';
import Nav from './Nav';
import './app.scss';

export default function App() {
  return (
    <div className="mnr-App">
      <Nav className="mnr-App-nav" />
      <main className="mnr-App-main">
        <HelloApp />
        <WorldApp />
        <HelloWorldApp />
        <Footer />
      </main>
    </div>
  );
}
