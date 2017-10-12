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
import { Route, Switch } from 'react-router-dom';
import IconArrowBack from '../../Icon/IconArrowBack';
import ComponentDoc from './pages/ComponentDoc';
import ComponentDocExample from './ComponentDocExample';
import Link from './Link';
import LiveProvider from './LiveProvider';
import sections from './pages';

type Props = {
  demos: Object
};

export default function Router({ demos }: Props) {
  const routes = sections
    .map(section => section.pages)
    // flatten array of pages arrays
    .reduce((acc, pages) => {
      return [...acc, ...pages];
    }, [])
    .map((page, index) => {
      return (
        <Route
          key={`page-${index}`}
          path={page.path}
          render={() => <page.component />}
        />
      );
    });

  return (
    <Switch>
      {routes}
      <Route
        path="/components/:componentId/:exampleId"
        render={route => {
          const { componentId, exampleId } = route.match.params;
          const selectedDemo = demos[componentId];
          const selectedExample = selectedDemo.examples.filter(
            example => example.id === exampleId
          )[0];
          const chromeless = route.location.search === '?chromeless';
          return chromeless ? (
            <LiveProvider
              hideSource={true}
              chromeless={true}
              scope={selectedExample.scope}
              source={selectedExample.source}
            />
          ) : (
            <div>
              <Link to="../">
                <IconArrowBack color="currentColor" size="small" />{' '}
                {selectedDemo.title}
              </Link>
              <ComponentDocExample {...selectedExample} />
            </div>
          );
        }}
      />
      <Route
        path="/components/:componentId"
        render={route => {
          const componentId = route.match.params.componentId;
          const selectedDemo = demos[componentId];
          return <ComponentDoc {...selectedDemo} />;
        }}
      />
    </Switch>
  );
}
