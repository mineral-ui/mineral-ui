/* @flow */
import { createThemedComponent, mapComponentThemes } from '../themes';
import OverflowList, {
  componentTheme as overflowListComponentTheme
} from '../OverflowList/OverflowList';

export const componentTheme = (baseTheme: Object) =>
  mapComponentThemes(
    {
      name: 'OverflowList',
      theme: overflowListComponentTheme(baseTheme)
    },
    {
      name: 'NavList',
      theme: {}
    },
    baseTheme
  );

const NavList = createThemedComponent(OverflowList, ({ theme: baseTheme }) =>
  mapComponentThemes(
    {
      name: 'NavList',
      theme: componentTheme(baseTheme)
    },
    {
      name: 'OverflowList',
      theme: {}
    },
    baseTheme
  )
);

export default NavList;
