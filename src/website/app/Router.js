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
import startCase from 'lodash.startcase';
import ComponentDocExample from './ComponentDocExample';
import Home from './pages/Home';
import Page from './Page';
import sections from './pages';
import ComponentDoc from './pages/ComponentDoc';

type Props = {
  demos: Object
};

const getPageHeader = (heading: string, title: string) => {
  return `${heading}

# ${title}`;
};

export default function Router({ demos }: Props) {
  const routes = sections
    .map((section, sectionIndex) => {
      return section.pages.map((page, pageIndex) => (
        <Route
          key={`page-${sectionIndex}-${pageIndex}`}
          path={page.path}
          render={() => {
            const pageMeta = {
              title: `${page.title} | Mineral UI`,
              canonicalLink: `https://mineral-ui.com${page.path}`
            };
            const pageProps = {
              headerContent: getPageHeader(section.heading, page.title),
              demos,
              pageMeta,
              type: sectionIndex
            };
            return (
              <Page {...pageProps}>
                <page.component />
              </Page>
            );
          }}
        />
      ));
    })
    // Flatten array of routes arrays
    .reduce((acc, routes) => {
      return [...acc, ...routes];
    }, []);

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      {routes}
      <Route
        path="/components/:componentId/:exampleId"
        render={route => {
          const { componentId, exampleId } = route.match.params;
          const selectedDemo = demos[componentId];
          const selectedExample = selectedDemo.examples.find(
            example => example.id === exampleId
          );
          const chromeless = route.location.search === '?chromeless';
          const pageMeta = {
            title: `${selectedDemo.title} ${startCase(
              selectedExample.id
            )} | Mineral UI`,
            canonicalLink: `https://mineral-ui.com/components/${selectedDemo.title.toLowerCase()}/${selectedExample.id}`
          };
          const pageProps = {
            chromeless,
            demos,
            pageMeta
          };
          const exampleProps = {
            chromeless,
            componentName: selectedDemo.title,
            demos,
            standalone: true,
            ...selectedExample
          };

          return (
            <Page {...pageProps}>
              <ComponentDocExample {...exampleProps} />
            </Page>
          );
        }}
      />
      <Route
        path="/components/:componentId"
        render={route => {
          const componentId = route.match.params.componentId;
          const selectedDemo = demos[componentId];
          const pageMeta = {
            title: `${selectedDemo.title} | Mineral UI`,
            canonicalLink: `https://mineral-ui.com/components/${selectedDemo.title.toLowerCase()}`
          };
          const pageProps = {
            demos,
            headerContent: getPageHeader('Components', selectedDemo.title),
            pageMeta
          };
          return (
            <Page {...pageProps}>
              <ComponentDoc {...selectedDemo} />
            </Page>
          );
        }}
      />
    </Switch>
  );
}
