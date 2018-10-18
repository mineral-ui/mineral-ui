/* @flow */
import HorizontalNavigation, {
  NavLink
} from '../../../../../../library/Navigation';
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
          <NavLink title="علامة التبويب 1" />
          <NavLink title="علامة التبويب 2" />
          <NavLink title="علامة التبويب 3" />
        </HorizontalNavigation>
      </ThemeProvider>
    </div>
  `
};
