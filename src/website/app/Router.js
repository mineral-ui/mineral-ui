/* @flow */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import flatten from 'lodash/flatten';
import createKeyMap from './utils/createKeyMap';
import ComponentDocExample from './ComponentDocExample';
import Page from './Page';
import sections from './pages';
import ComponentDoc from './pages/ComponentDoc';
import Loadable from './Loadable';

type Props = {
  demoRoutes: Array<DemoRoute>
};

type DemoRoute = {
  description: string,
  slug: string,
  title: string
};

const AsyncHome = Loadable({
  loader: () => import('./pages/Home')
});

const getPageHeader = (heading: string, title: string) => {
  return `${heading}

# ${title}`;
};

export default function Router({ demoRoutes }: Props) {
  const flatDemoRoutes = createKeyMap(flatten(demoRoutes), 'slug');

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
              demoRoutes,
              headerContent: getPageHeader(section.heading, page.title),
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
          // $FlowFixMe
          const selectedDemo = flatDemoRoutes[componentId || 'button'];
          const chromeless = route.location.search === '?chromeless';
          const pageProps = {
            chromeless,
            demoRoutes,
            pageMeta: {
              description: selectedDemo.description,
              title: `${selectedDemo.title} | Mineral UI`
            },
            slug: selectedDemo.slug
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
          // $FlowFixMe
          const selectedDemo = flatDemoRoutes[componentId];

          if (selectedDemo.redirect) {
            return <Redirect to={`/components/${selectedDemo.redirect}`} />;
          }

          const pageMeta = {
            canonicalLink: `https://mineral-ui.com/components/${selectedDemo.title.toLowerCase()}`,
            description: selectedDemo.description,
            title: `${selectedDemo.title} | Mineral UI`
          };
          const pageProps = {
            demoRoutes,
            headerContent: getPageHeader('Components', selectedDemo.title),
            pageMeta,
            slug: selectedDemo.slug
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
