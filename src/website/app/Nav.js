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
import { NavLink } from 'react-router-dom';
import { createStyledComponent, pxToEm } from '../../styles';
import { ThemeProvider } from '../../themes';
import _Logo from './Logo';
import Heading from './SiteHeading';
import _Link from './SiteLink';
import siteColors from './siteColors';
import sections from './pages';

type Props = {
  demos: Object,
  contextualTheme?: Object
};

const styles = {
  heading: {
    margin: 0
  },
  link: ({ theme }) => ({
    display: 'block',
    // top & bottom: results of `getNormalizedValue(pxToEm(5), theme.fontSize_ui)`
    // (6px for bottom), rounded down for baseline alignment
    padding: '0.35em 0 0.4em',

    '&.active': {
      color: theme.color_text_primary
    }
  }),
  list: {
    listStyle: 'none',
    margin: `0 0 ${pxToEm(44)}`, // to baseline
    paddingLeft: '0'
  },
  listItem: ({ theme }) => ({
    fontSize: theme.fontSize_ui,

    '& > a:focus': {
      outlineOffset: 0
    }
  }),
  // [1] to align first SectionHeading with baseline of third intro line
  logoHeading: {
    fontSize: '1em',
    margin: `0 0 ${pxToEm(9)}`, // [1]

    '& svg': {
      width: 29, // 36px tall is the important dimension

      '& .band-1': { fill: siteColors.yellow },
      '& .band-2': { fill: siteColors.orange },
      '& .band-3': { fill: siteColors.slate }
    }
  }
};

const Link = createStyledComponent(_Link, styles.link).withProps({
  element: NavLink
});
const List = createStyledComponent('ol', styles.list);
const ListItem = createStyledComponent('li', styles.listItem);
const SectionHeading = createStyledComponent(
  Heading,
  styles.heading
).withProps({
  as: 'h2',
  level: 4
});
const LogoHeading = createStyledComponent(
  Heading,
  styles.logoHeading
).withProps({
  level: 1
});

const Logo = () => (
  <LogoHeading>
    <Link exact to="/">
      <_Logo />
    </Link>
  </LogoHeading>
);

const pages = sections.map((section, index) => {
  return (
    <div key={index}>
      <SectionHeading>{section.heading}</SectionHeading>
      <List>
        {section.pages.map(page => {
          return (
            !page.hiddenInNav && (
              <ListItem key={page.title}>
                <Link to={page.path}>{page.title}</Link>
              </ListItem>
            )
          );
        })}
      </List>
    </div>
  );
});

export default function Nav({ demos, contextualTheme, ...restProps }: Props) {
  const rootProps = { ...restProps };

  const demoLinks = Object.keys(demos).map(slug => {
    const demo = demos[slug];
    return (
      <ListItem key={slug} isSubcomponent={demo.subcomponent}>
        <Link to={`/components/${slug}`}>{demo.title}</Link>
      </ListItem>
    );
  });

  return (
    <ThemeProvider theme={contextualTheme}>
      <nav {...rootProps}>
        <Logo />
        {pages}
        <SectionHeading>Components</SectionHeading>
        <List>{demoLinks}</List>
      </nav>
    </ThemeProvider>
  );
}
