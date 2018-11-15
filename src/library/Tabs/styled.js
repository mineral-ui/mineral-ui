/* @flow */
import React from 'react';
import { createStyledComponent, pxToEm } from '../styles';
import { createThemedComponent } from '../themes';
import { onlyIEAndEdge } from '../utils/cssSelectors';
import Button from '../Button';
import OverflowContainer, {
  OverflowContainerWithShadows
} from '../OverflowContainer';
import { tabTheme, tabListTheme, tabPanelTheme } from './themes';

export const TabsRoot = createStyledComponent(
  'div',
  ({ height, position }) => {
    const flexDirection = {
      bottom: 'column-reverse',
      end: 'row-reverse',
      start: 'row',
      top: 'column'
    };

    return {
      display: 'flex',
      flexDirection: flexDirection[position],
      height
    };
  },
  {
    displayName: 'Tabs',
    includeStyleReset: true
  }
);

const TabThemedButton = createThemedComponent(
  Button,
  ({ theme: baseTheme }) => {
    const theme = tabTheme(baseTheme);
    return {
      Button_backgroundColor_minimal_active: null,
      Button_backgroundColor_minimal_hover: null,
      Button_borderRadius: null,
      Button_borderWidth: 0,
      Button_boxShadow_focus: null,
      Button_color_minimal: theme.Tab_color
    };
  }
);

export const TabAnchor = createStyledComponent(
  TabThemedButton,
  ({ disabled, maxWidth, position = 'top', selected, theme: baseTheme }) => {
    const theme = tabTheme(baseTheme);
    const rtl = theme.direction === 'rtl';

    const justifyContent = {
      end: 'flex-start',
      start: 'flex-end',
      top: undefined
    };
    const boxShadow = (borderWidth) => ({
      top: `0 ${-borderWidth}px`,
      start: rtl ? `${borderWidth}px 0` : `${-borderWidth}px 0`,
      bottom: `0 ${borderWidth}px`,
      end: rtl ? `${-borderWidth}px 0` : `${borderWidth}px 0`
    });

    return {
      maxWidth,

      '&:hover': {
        color: !disabled && theme.Tab_color_selectedHover
      },

      // Truncate
      '&:active > span > span > span > span > span:focus': {
        outline: 'none'
      },

      ...(selected && {
        backgroundColor: theme.Tab_backgroundColor_selected,
        color: theme.Tab_color_selected,
        // prettier-ignore
        boxShadow:
        `inset ${boxShadow(theme.TabIndicator_thickness)[position]} ${theme.Tab_borderColor_focus}`,

        '&:focus, &:active': {
          color: theme.Tab_color_selected,
          outline: `${theme.Tab_borderWidth_focus}px solid ${
            theme.Tab_borderColor_focus
          }`,
          outlineOffset: `-${theme.Tab_borderWidth_focus}px`
        }
      }),

      // Button's Inner
      '& > span': {
        justifyContent: justifyContent[position],

        // Content
        '& > span': {
          // Tooltip & TooltipTrigger & Truncate
          '& > span, & > span > span, & > span > span > span': {
            display: 'block'
          }
        }
      }
    };
  },
  {
    displayName: 'Tab',
    filterProps: ['title'],
    withProps: {
      element: 'a',
      fullWidth: true,
      role: 'tab',
      size: 'medium'
    }
  }
);

const TabListThemedButton = createThemedComponent(
  Button,
  ({ theme: baseTheme }) => {
    const theme = tabListTheme(baseTheme);
    return {
      Button_backgroundColor_minimal_active: null,
      Button_backgroundColor_minimal_hover: null,
      Button_borderRadius: 0,
      Button_borderWidth: 0,
      Button_boxShadow_focus: null,
      Button_paddingIconOnly_medium: 0,
      ButtonIcon_color: theme.TabListArrow_color,

      Icon_size_medium: pxToEm(20)
    };
  }
);

const TabListThemedOverflowContainerWithShadows = createThemedComponent(
  OverflowContainerWithShadows,
  ({ theme: baseTheme }) => {
    const theme = tabListTheme(baseTheme);
    // prettier-ignore
    return {
      OverflowContainerWithShadows_boxShadowBottom:
        `inset 0 -24px 22px -14px ${theme.TabListOverflowContainer_boxShadowColor}`,
      OverflowContainerWithShadows_boxShadowLeft:
        `inset 24px 0 22px -14px ${theme.TabListOverflowContainer_boxShadowColor}`,
      OverflowContainerWithShadows_boxShadowRight:
        `inset -24px 0 22px -14px ${theme.TabListOverflowContainer_boxShadowColor}`,
      OverflowContainerWithShadows_boxShadowTop:
        `inset 0 24px 22px -14px ${theme.TabListOverflowContainer_boxShadowColor}`
    };
  }
);

const TabListArrowButton = createStyledComponent(
  TabListThemedButton,
  ({ theme: baseTheme }) => {
    const theme = tabListTheme(baseTheme);

    return {
      flexShrink: 0,

      '&:hover': {
        '& [role="img"]': {
          color: theme.TabListArrow_color_hover
        }
      },

      '& > span': {
        height: '100%'
      }
    };
  },
  {
    displayName: 'ArrowButton'
  }
);

export const TabListInner = createStyledComponent(
  TabListThemedOverflowContainerWithShadows,
  ({ position, theme: baseTheme, vertical }) => {
    const theme = {
      ...tabListTheme(baseTheme),
      ...tabPanelTheme(baseTheme)
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
      display: 'flex',
      // See: https://css-tricks.com/flexbox-truncated-text/#comment-1611744
      ...(vertical ? { minHeight: '0%' } : { minWidth: '0%' }),

      // This component should not apply this style unless used within Tabs
      ...(theme.TabList_border
        ? {
            // OverflowContainerWithShadows > Shadows
            '&::before': {
              [edgeProperty]: theme.TabList_border.split('px')[0]
            }
          }
        : undefined)
    };
  },
  {
    displayName: 'Inner',
    withProps: {
      hideScrollbars: true,
      // We handle our own "scroll with the keyboard" interaction in Tabs, so
      // null tabIndex is to prevent an extraneous tab stop
      tabIndex: null
    }
  }
);

export const TabListList = createStyledComponent(
  'ul',
  ({ align, count, theme: baseTheme, vertical }) => {
    const theme = tabListTheme(baseTheme);
    const rtl = theme.direction === 'rtl';

    const childMarginProperty = vertical
      ? 'marginBottom'
      : rtl
        ? 'marginLeft'
        : 'marginRight';

    return {
      display: 'flex',
      flexDirection: vertical ? 'column' : undefined,
      flexGrow: 1,
      justifyContent: align
        ? align === 'center'
          ? align
          : `flex-${align}`
        : undefined,
      listStyle: 'none',
      margin: 0,
      padding: 0,
      whiteSpace: 'nowrap',

      // Tab
      '& > *': {
        ...(align === 'justify'
          ? vertical
            ? {
                display: 'flex',
                flexGrow: 1,

                // Anchor in Tab
                '& > *': { display: 'flex', height: 'auto' }
              }
            : {
                // prettier-ignore
                width: `calc(${(1 / count) * 100}% - ${theme.TabList_gutterHorizontal})`
              }
          : undefined),

        '&:not(:last-child)': {
          [childMarginProperty]: vertical
            ? theme.TabList_gutterVertical
            : theme.TabList_gutterHorizontal
        }
      }
    };
  }
);

export const TabListRoot = createStyledComponent(
  'div',
  ({ height, vertical }) => ({
    display: 'flex',
    flex: '0 0 auto',
    flexDirection: vertical ? 'column' : undefined,
    position: 'relative',

    ...(vertical && height
      ? {
          [onlyIEAndEdge]: {
            height
          }
        }
      : undefined)
  }),
  {
    displayName: 'TabList'
  }
);

// eslint-disable-next-line react/display-name
export const TabListIncrementButton = ({
  icon,
  ...restProps
}: {
  icon: React$Element<*>
}) => (
  <TabListArrowButton
    aria-hidden
    iconStart={icon}
    minimal
    size="medium"
    tabIndex={-1}
    {...restProps}
  />
);

export const TabPanelOverflowContainer = createStyledComponent(
  OverflowContainer,
  {
    flex: '1 1 auto',

    '& > :first-child': {
      marginTop: 0
    },

    '& > :last-child': {
      marginBottom: 0
    }
  },
  {
    withProps: {
      scrollY: true,
      // We always want the panel content to be focusable, for ease of keyboard users
      tabIndex: 0
    }
  }
);

export const TabPanelRoot = createStyledComponent(
  'div',
  ({ position, theme: baseTheme }) => {
    const theme = tabPanelTheme(baseTheme);
    const rtl = theme.direction === 'rtl';

    const orientation = {
      bottom: 'Bottom',
      end: rtl ? 'Left' : 'Right',
      start: rtl ? 'Right' : 'Left',
      top: 'Top'
    };
    const borderProperty = `border${orientation[position]}`;
    const marginProperty = `margin${orientation[position]}`;
    const paddingProperty = `padding${orientation[position]}`;

    return {
      [borderProperty]: theme.TabList_border,
      display: 'flex',
      flex: '1 1 auto',
      [marginProperty]:
        theme.TabList_border && -theme.TabList_border.split('px')[0],
      minHeight: '0%', // See: https://css-tricks.com/flexbox-truncated-text/#comment-1611744
      [paddingProperty]: theme.TabPanel_gap
    };
  },
  {
    displayName: 'TabPanel',
    withProps: {
      role: 'tabpanel'
    }
  }
);
