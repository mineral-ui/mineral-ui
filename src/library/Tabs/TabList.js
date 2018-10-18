/* @flow */
import { createStyledComponent, pxToEm } from '../styles';
import { createThemedComponent, mapComponentThemes } from '../themes';
import OverflowList, {
  componentTheme as overflowListComponentTheme
} from '../OverflowList/OverflowList';
import { componentTheme as tabPanelComponentTheme } from './TabPanel';

export const componentTheme = (baseTheme: Object) =>
  mapComponentThemes(
    {
      name: 'OverflowList',
      theme: overflowListComponentTheme(baseTheme)
    },
    {
      name: 'TabList',
      theme: {}
    },
    baseTheme
  );

const ThemedOverflowList = createThemedComponent(
  OverflowList,
  ({ theme: baseTheme }) =>
    mapComponentThemes(
      {
        name: 'TabList',
        theme: componentTheme(baseTheme)
      },
      {
        name: 'OverflowList',
        theme: {}
      },
      baseTheme
    )
);

const TabList = createStyledComponent(
  ThemedOverflowList,
  ({ position, theme: baseTheme }) => {
    const theme = {
      ...componentTheme(baseTheme),
      ...tabPanelComponentTheme(baseTheme)
    };
    const rtl = theme.direction === 'rtl';
    const edge = {
      bottom: 'top',
      end: rtl ? 'right' : 'left',
      start: rtl ? 'left' : 'right',
      top: 'bottom'
    };
    const edgeProperty = edge[position];

    return {
      ...(theme.TabList_border
        ? {
            // OverflowList > Inner > Shadows
            '& > div::before': {
              [edgeProperty]: theme.TabList_border.split('px')[0]
            }
          }
        : undefined)
    };
  }
);

export default TabList;
