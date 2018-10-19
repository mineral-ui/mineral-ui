/* @flow */
import HorizontalNavigation from '../../../../../../library/Navigation';
import NavLink from '../../components/NavLink';
import { ThemeProvider } from '../../../../../../library/themes';

export default {
  id: 'rtl',
  title: 'Bidirectionality',
  description: `HorizontalNavigation supports right-to-left (RTL) languages. The position and
alignment of [HorizontalNavigation](/components/tab) and panel content are reversed when the
\`direction\` theme variable is set to \`'rtl'\`.`,
  scope: {
    HorizontalNavigation,
    NavLink,
    ThemeProvider
  },
  source: `
    <div dir="rtl">
      <ThemeProvider theme={{direction: 'rtl'}}>
        <HorizontalNavigation label="علامات على القمة">
          <NavLink href="/page-1">علامة التبويب 1</NavLink>
          <NavLink href="/page-2">علامة التبويب 2</NavLink>
          <NavLink href="/page-3">علامة التبويب 3</NavLink>
        </HorizontalNavigation>
      </ThemeProvider>
    </div>
  `
};
