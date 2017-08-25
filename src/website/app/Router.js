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
import { Redirect, Route, Switch } from 'react-router-dom';
import ComponentDoc from './pages/ComponentDoc';
import pages from './pages';

type Props = {|
  demos: Object
|};

export default function Router({ demos }: Props) {
  const routes = [];

  pages.map((page, i) => {
    if (page.sections) {
      page.sections.map((section, j) => {
        if (section.path) {
          routes.push(
            <Route
              key={`section-${j}`}
              path={section.path}
              render={() => <section.component />}
            />
          );
        }
      });
    }
    routes.push(
      <Route
        key={`page-${i}`}
        path={page.path}
        render={() => <page.component />}
      />
    );
  });

  return (
    <Switch>
      {routes}
      <Route
        path="/components/:componentId"
        render={route => {
          const componentId = route.match.params.componentId;
          const selectedDemo = demos[componentId];
          return <ComponentDoc {...selectedDemo} />;
        }}
      />
      <Redirect from="/" to="/getting-started" />
    </Switch>
  );
}
