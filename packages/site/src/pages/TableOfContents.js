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
import { createStyledComponent } from '@mineral-ui/component-utils';
import _Link from '@mineral-ui/link';
import { Link as RouterLink } from 'react-router-dom';
import Header from '../components/Header';
import pages from './pages';

const styles = {
  container: {},
  content: {
    maxWidth: '50rem',
    margin: '0 auto'
  },
  nav: {},
  page: {
    listStyle: 'none'
  },
  pageTitle: (props, theme) => ({
    '& > a': {
      textTransform: 'capitalize',
      textDecoration: 'none',
      fontSize: `${3 * theme.fontSize_base}px`,
      fontWeight: 'bold',
      color: '#333'
    }
  }),
  section: {
    display: 'block',
    textDecoration: 'none',
    paddingLeft: '2rem',
    borderLeft: '5px solid transparent',
    '&:hover': {
      borderLeft: '5px solid #eee'
    },
    '& > p': {
      color: '#333'
    }
  },
  title: (props, theme) => ({
    fontSize: `${4 * theme.fontSize_base}px`,
    fontWeight: 900,
    color: '#333'
  })
};

const Root = createStyledComponent('div', styles.container);
const Content = createStyledComponent('section', styles.content);
const Nav = createStyledComponent('nav', styles.nav);
const Page = createStyledComponent('li', styles.page);
const PageTitle = createStyledComponent('h2', styles.pageTitle);
const Section = createStyledComponent(_Link, styles.section);
const Title = createStyledComponent('h1', styles.title);

export default function TableOfContents() {
  return (
    <Root>
      <Header />
      <Content>
        <Title>Table of Contents</Title>
        <p>
          Apollonius of Perga decipherment across the centuries galaxies quasar
          billions upon billions Euclid billions upon billions, globular star
          cluster, trillion courage of our questions! Science and billions upon
          billions upon billions upon billions upon billions upon billions.
        </p>
        <Nav>
          {pages.map((page, i) => {
            return (
              <Page key={`page-${i}`}>
                <PageTitle>
                  <_Link to={page.path} element={RouterLink}>
                    {page.title}
                  </_Link>
                </PageTitle>
                {Array.isArray(page.sections)
                  ? page.sections.map((section, j) => {
                      const path = section.id
                        ? `${page.path}#${section.id}`
                        : section.path;
                      return (
                        <Section
                          key={`section-${j}`}
                          to={path}
                          element={RouterLink}>
                          <h3>{section.title}</h3>
                          <p>{section.desc}</p>
                        </Section>
                      );
                    })
                  : <p>{page.desc}</p>}
              </Page>
            );
          })}
        </Nav>
      </Content>
    </Root>
  );
}
