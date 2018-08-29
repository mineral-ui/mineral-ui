/* @flow */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import flatten from 'lodash/flatten';
import createKeyMap from './utils/createKeyMap';
import demoRoutes from './demos/routes';
import ComponentDocExample from './ComponentDocExample';
import Page from './Page';
import sections from './pages';
import ComponentDoc from './pages/ComponentDoc';
import NotFound from './pages/NotFound';
import Loadable from './Loadable';
import ScrollToIdOnMount from './ScrollToIdOnMount';

const AsyncHome = Loadable({
  loader: () => import('./pages/Home')
});

const getPageHeader = (heading: string, title: string) => {
  return `${heading}

# ${title}`;
};

export default function Router() {
  const flatDemoRoutes = flatten(demoRoutes);
  const keyedDemoRoutes = createKeyMap(flatDemoRoutes, 'slug');
  const firstDemoSlug = flatDemoRoutes[0].slug;

  const routes = sections
    .map((section, sectionIndex) => {
      return section.pages.map((page, pageIndex) => (
        <Route
          key={`page-${sectionIndex}-${pageIndex}`}
          path={page.path}
          render={({ location }) => {
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

            const AsyncPage = Loadable({
              loader: () => import(`./pages/${page.component}`),
              // eslint-disable-next-line react/display-name
              render: ({ default: Component }: Object) => (
                <ScrollToIdOnMount id={location.hash.replace('#', '')}>
                  <Component />
                </ScrollToIdOnMount>
              )
            });

            return (
              <Page {...pageProps}>
                <AsyncPage />
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
        render={(route) => {
          const { componentId, exampleId } = route.match.params;
          const selectedDemo = keyedDemoRoutes[componentId || firstDemoSlug];
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
                (example) => example.id === exampleId
              );

              if (!selectedExample) {
                return <Redirect to={`/components/${selectedDemo.slug}`} />;
              }

              const exampleProps = {
                chromeless,
                componentName: selectedFullDemo.title,
                slug: selectedDemo.slug,
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
        render={({ location, match }) => {
          const componentId =
            flatDemoRoutes.find(
              (route) => route.slug === match.params.componentId
            ) && match.params.componentId;

          if (!componentId) {
            return <Redirect to={`/components/${firstDemoSlug}`} />;
          }

          const selectedDemo = keyedDemoRoutes[componentId];

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
              const docProps = {
                slug: selectedDemo.slug,
                ...fullDemos[componentId]
              };
              return (
                <ScrollToIdOnMount id={location.hash.replace('#', '')}>
                  <ComponentDoc {...docProps} />
                </ScrollToIdOnMount>
              );
            }
          });

          return (
            <Page {...pageProps}>
              <AsyncComponentDoc />
            </Page>
          );
        }}
      />
      <Route
        path="/components"
        render={() => <Redirect to={`/components/${firstDemoSlug}`} />}
      />
      <Route
        path="*"
        render={() => {
          const pageMeta = {
            description: 'Page not found.',
            title: 'Page not found | Mineral UI'
          };
          const pageProps = {
            headerContent: getPageHeader('Error', '404'),
            demoRoutes,
            glitched: true,
            pageMeta
          };
          return (
            <Page {...pageProps}>
              <NotFound />
            </Page>
          );
        }}
      />
    </Switch>
  );
}
