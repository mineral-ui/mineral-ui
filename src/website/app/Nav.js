/* @flow */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { darken, rgba } from 'polished';
import {
  createStyledComponent,
  getNormalizedValue,
  pxToEm
} from '../../library/styles';
import { mineralTheme, ThemeProvider } from '../../library/themes';
import _Logo from './Logo';
import Heading from './SiteHeading';
import _Link from './SiteLink';
import siteColors from './siteColors';
import sections from './pages';

type Props = {
  currentDemo?: string,
  demoRoutes: Array<DemoRoute>,
  wide?: Boolean
};

type DemoRoute = {
  description: string,
  slug: string,
  title: string
};

const navTheme = {
  Heading_color_4: mineralTheme.color_gray_30,

  SiteLink_borderColor_focus: mineralTheme.color_white,
  SiteLink_color: mineralTheme.color_gray_30,
  SiteLink_color_focus: mineralTheme.color_white,
  SiteLink_color_hover: mineralTheme.color_white
};

const navThemeWide = {
  Heading_color_4: siteColors.slateDarker,

  SiteLink_borderColor_focus: siteColors.slateDarker_focus,
  SiteLink_color: siteColors.slateDarker,
  SiteLink_color_active: siteColors.slateDarker_active,
  SiteLink_color_focus: siteColors.slateDarker_focus,
  SiteLink_color_hover: siteColors.slateDarker_hover
};

const styles = {
  heading: ({ theme, wide }) => ({
    margin: 0,
    paddingRight: wide ? getNormalizedValue(pxToEm(8), theme.h4_fontSize) : null
  }),
  link: ({ theme, wide }) => {
    const fontSize = theme.fontSize_ui;
    const styles = [
      {
        display: 'block',
        fontWeight: theme.fontWeight_regular,
        // top & bottom: results of `getNormalizedValue(pxToEm(5), fontSize)`
        // (6px for bottom), rounded down for baseline alignment
        padding: '0.35em 0 0.4em',
        textDecoration: 'none'
      }
    ];

    styles.push(
      wide
        ? {
            paddingLeft: getNormalizedValue(pxToEm(8), fontSize),
            paddingRight: getNormalizedValue(pxToEm(8), fontSize),

            '&.active': {
              backgroundColor: rgba(theme.color_theme, 0.15),
              color: darken(0.1, theme.color_theme),
              position: 'relative',

              '&::before': {
                backgroundColor: theme.color_theme,
                bottom: 0,
                content: '""',
                position: 'absolute',
                right: `-${getNormalizedValue(pxToEm(3), fontSize)}`,
                top: 0,
                width: getNormalizedValue(pxToEm(3), fontSize)
              }
            }
          }
        : {
            '&.active': {
              color: theme.navLink_color_active_narrow,
              position: 'relative',

              '&::before': {
                backgroundColor: theme.navLink_color_active_narrow,
                bottom: 0,
                content: '""',
                left: `-${getNormalizedValue(pxToEm(18), fontSize)}`,
                position: 'absolute',
                top: 0,
                width: getNormalizedValue(pxToEm(6), fontSize)
              }
            }
          }
    );

    return styles;
  },
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
  logoHeading: ({ theme, wide }) => ({
    fontSize: '1em',
    margin: `0 0 ${pxToEm(9)}`, // [1]
    paddingRight: wide
      ? getNormalizedValue(pxToEm(8), theme.h4_fontSize)
      : null,

    '& svg': {
      width: 29, // 36px tall is the important dimension

      '& .band-1': { fill: siteColors.yellow },
      '& .band-2': { fill: siteColors.orange },
      '& .band-3': { fill: siteColors.slate }
    }
  }),
  subList: ({ open, theme, wide }) => {
    const styles = [
      {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        position: 'relative'
      }
    ];

    if (open) {
      styles.push(
        wide
          ? {
              '&::before': {
                backgroundColor: rgba(theme.color_theme, 0.25),
                bottom: 0,
                content: '""',
                position: 'absolute',
                right: `-${getNormalizedValue(pxToEm(3), theme.fontSize_ui)}`,
                top: 0,
                width: getNormalizedValue(pxToEm(3), theme.fontSize_ui)
              }
            }
          : {
              '&::before': {
                backgroundColor: rgba(theme.color_theme, 0.5),
                bottom: 0,
                content: '""',
                left: `-${pxToEm(18)}`,
                position: 'absolute',
                top: 0,
                width: pxToEm(6)
              }
            }
      );
    }

    return styles;
  }
};

const Link = createStyledComponent(_Link, styles.link, {
  filterProps: ['wide']
}).withProps({
  element: NavLink
});
const List = createStyledComponent('ol', styles.list);
const ListItem = createStyledComponent('li', styles.listItem);
const SectionHeading = createStyledComponent(Heading, styles.heading).withProps(
  {
    as: 'h2',
    level: 4
  }
);
const SubList = createStyledComponent('ol', styles.subList);
const LogoHeading = createStyledComponent(
  Heading,
  styles.logoHeading
).withProps({
  level: 1
});

const Logo = (wide) => (
  <LogoHeading wide={wide}>
    <Link exact to="/">
      <_Logo />
    </Link>
  </LogoHeading>
);

const pages = (wide) => {
  return sections.map((section, index) => {
    return (
      <div key={index}>
        <SectionHeading wide={wide}>{section.heading}</SectionHeading>
        <List>
          {section.pages.map((page) => {
            return (
              !page.hiddenInNav && (
                <ListItem key={page.title}>
                  <Link to={page.path} wide={wide}>
                    {page.title}
                  </Link>
                </ListItem>
              )
            );
          })}
        </List>
      </div>
    );
  });
};

const renderItem = (slug, title, wide) => (
  <ListItem key={slug}>
    <Link to={`/components/${slug}`} wide={wide}>
      {title}
    </Link>
  </ListItem>
);

export default function Nav({
  currentDemo,
  demoRoutes,
  wide,
  ...restProps
}: Props) {
  const rootProps = { ...restProps };

  const demoLinks = demoRoutes.map((route) => {
    if (Array.isArray(route)) {
      const open = route.filter((subRoute) => subRoute.slug === currentDemo)
        .length;
      const subListProps = {
        key: route[0].slug,
        open,
        wide
      };
      return (
        <SubList {...subListProps}>
          {route.map((subRoute, index) => {
            const { slug, title } = subRoute;
            return index === 0 || open ? renderItem(slug, title, wide) : null;
          })}
        </SubList>
      );
    } else {
      const { slug, title } = route;
      return renderItem(slug, title, wide);
    }
  });

  return (
    <ThemeProvider theme={wide ? navThemeWide : navTheme}>
      <nav {...rootProps}>
        <Logo wide={wide} />
        {pages(wide)}
        <SectionHeading wide={wide}>Components</SectionHeading>
        <List>{demoLinks}</List>
      </nav>
    </ThemeProvider>
  );
}
