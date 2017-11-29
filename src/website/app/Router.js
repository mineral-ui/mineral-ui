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
import ComponentDocExample from './ComponentDocExample';
import Page from './Page';
import sections from './pages';
import ComponentDoc from './pages/ComponentDoc';
import Loadable from './Loadable';

type Props = {
  demoRoutes: { [string]: DemoRoute }
};

type DemoRoute = { slug: string, title: string, description: string };

const AsyncHome = Loadable({
  loader: () => import('./pages/Home')
});

const getPageHeader = (heading: string, title: string) => {
  return `${heading}

# ${title}`;
};

export default function Router({ demoRoutes }: Props) {
  const routes = sections
    .map((section, sectionIndex) => {
      return section.pages.map((page, pageIndex) => (
        <Route
          key={`page-${sectionIndex}-${pageIndex}`}
          path={page.path}
          render={() => {
            const pageMeta = {
              canonicalLink: `https://mineral-ui.com${page.path}`,
              description: page.description,
              title: `${page.title} | Mineral UI`
            };
            const pageProps = {
              headerContent: getPageHeader(section.heading, page.title),
              demoRoutes,
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
      <Route path="/" exact component={AsyncHome} />
      {routes}
      <Route
        path="/components/:componentId/:exampleId"
        render={route => {
          const { componentId, exampleId } = route.match.params;
          const selectedDemo = demoRoutes[componentId || 'button'];
          const chromeless = route.location.search === '?chromeless';
          const pageProps = {
            chromeless,
            demoRoutes,
            pageMeta: {
              description: selectedDemo.description,
              title: `${selectedDemo.title} | Mineral UI`
            }
          };

          const AsyncComponentDocExample = Loadable({
            loader: () => import('./demos/index'),
            render({ default: fullDemos }: Object) {
              const selectedFullDemo = fullDemos[componentId];
              const selectedExample = selectedFullDemo.examples.find(
                example => example.id === exampleId
              );

              const exampleProps = {
                chromeless,
                componentName: selectedFullDemo.title,
                standalone: true,
                ...selectedExample
              };

              return <ComponentDocExample {...exampleProps} />;
            }
          });

          return (
            <Page {...pageProps}>
              <AsyncComponentDocExample />
            </Page>
          );
        }}
      />
      <Route
        path="/components/:componentId"
        render={route => {
          const componentId = route.match.params.componentId || 'button';
          const selectedDemo = demoRoutes[componentId];
          const pageMeta = {
            canonicalLink: `https://mineral-ui.com/components/${selectedDemo.title.toLowerCase()}`,
            description: selectedDemo.description,
            title: `${selectedDemo.title} | Mineral UI`
          };
          const pageProps = {
            demoRoutes,
            headerContent: getPageHeader('Components', selectedDemo.title),
            pageMeta
          };

          const AsyncComponentDoc = Loadable({
            loader: () => import('./demos/index'),
            render({ default: fullDemos }: Object) {
              return <ComponentDoc {...fullDemos[componentId]} />;
            }
          });

          return (
            <Page {...pageProps}>
              <AsyncComponentDoc />
            </Page>
          );
        }}
      />
    </Switch>
  );
}
