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
import './nav.scss';

type Props = {|
  className: string,
  demos: Array<Object>
|};

export default function Nav({ className, demos }: Props) {
  const demoLinks = demos.map((demo, idx) => {
    return (
      <li key={idx}>
        <a href={`#${demo.slug}`} className="mnr-Nav-link">
          {demo.title}
        </a>
      </li>
    );
  });

  return (
    <nav className={`mnr-Nav ${className}`}>
      <h1 className="mnr-Nav-title">Mineral UI</h1>
      <h2 className="mnr-Nav-heading">Components</h2>
      <ol className="mnr-Nav-list">
        {demoLinks}
      </ol>
    </nav>
  );
}
