/* @flow */
import { createStyledComponent, getNormalizedValue, pxToEm } from '../styles';
import { menuDividerTheme, menuGroupTheme, menuItemTheme } from './themes';

import type { CreateRootNode } from '../styles/types';
import type { MenuItemDefaultProps, MenuItemProps } from './types';

export const MenuRoot = createStyledComponent(
  'div',
  {},
  {
    displayName: 'Menu',
    includeStyleReset: true
  }
);

export const MenuDividerRoot = createStyledComponent(
  'div',
  (props) => {
    const theme = menuDividerTheme(props.theme);

    return {
      backgroundColor: theme.MenuDivider_borderColor,
      height: theme.MenuDivider_borderWidth,
      margin: `${theme.MenuDivider_margin} 0`
    };
  },
  {
    displayName: 'MenuDivider'
  }
);

export const MenuGroupTitle = createStyledComponent(
  'h3',
  (props) => {
    const theme = {
      ...menuGroupTheme(props.theme),
      ...menuItemTheme(props.theme)
    };

    const paddingBottom = getNormalizedValue(
      theme.MenuGroupTitle_paddingBottom,
      theme.MenuGroupTitle_fontSize
    );

    const paddingTop = getNormalizedValue(
      theme.MenuGroupTitle_paddingTop,
      theme.MenuGroupTitle_fontSize
    );

    // We need to use MenuItem's padding, to match
    const paddingHorizontal = getNormalizedValue(
      theme.MenuItem_paddingHorizontal,
      theme.MenuGroupTitle_fontSize
    );

    const marginTop = getNormalizedValue(
      theme.MenuGroupTitle_marginTop,
      theme.MenuGroupTitle_fontSize
    );

    return {
      fontSize: theme.MenuGroupTitle_fontSize,
      fontWeight: theme.MenuGroupTitle_fontWeight,
      margin: 0,
      padding: `${paddingTop} ${paddingHorizontal} ${paddingBottom}`,

      '&:not(:first-of-type)': {
        marginTop
      }
    };
  },
  {
    displayName: 'MenuGroupTitle'
  }
);

export const createMenuItemRootNode: CreateRootNode<
  MenuItemProps,
  MenuItemDefaultProps
> = (props, defaultProps) => {
  const { element = defaultProps.element } = props;

  return createStyledComponent(
    element,
    // These styles are based off of Button, with significant changes
    ({ disabled, isHighlighted, theme: baseTheme, variant }) => {
      let theme = menuItemTheme(baseTheme);

      if (variant) {
        // prettier-ignore
        theme = {
          ...theme,
          MenuItem_backgroundColor_active: theme[`backgroundColor_${variant}_active`],
          MenuItem_backgroundColor_focus: theme[`backgroundColor_${variant}_focus`],
          MenuItem_backgroundColor_hover: theme[`backgroundColor_${variant}_hover`],
          MenuItem_color: theme[`color_${variant}`],
          MenuItemIcon_color: theme[`icon_color_${variant}`]
        };
      }

      return {
        backgroundColor: isHighlighted && theme.MenuItem_backgroundColor_hover,
        color: disabled ? theme.color_disabled : theme.MenuItem_color,
        cursor: disabled ? 'default' : 'pointer',
        display: 'block',
        fontWeight: theme.MenuItem_fontWeight,
        padding: `${theme.MenuItem_paddingVertical} ${
          theme.MenuItem_paddingHorizontal
        }`,
        textDecoration: 'none',

        '&:focus': {
          backgroundColor: !disabled && theme.MenuItem_backgroundColor_focus,
          outline: 0
        },

        '&:hover': {
          backgroundColor: !disabled && theme.MenuItem_backgroundColor_hover
        },

        '&:active': {
          backgroundColor: !disabled && theme.MenuItem_backgroundColor_active
        },

        '&[aria-selected="true"]': {
          backgroundColor: isHighlighted
            ? theme.MenuItem_backgroundColor_selectedHover
            : theme.MenuItem_backgroundColor_selected,
          fontWeight: theme.MenuItem_fontWeight_selected,

          '&:active': {
            backgroundColor:
              !disabled && theme.MenuItem_backgroundColor_selectedActive
          }
        },

        '& [role="img"]': {
          boxSizing: 'content-box',
          color: disabled ? null : theme.MenuItemIcon_color,
          display: 'block',
          flex: '0 0 auto',

          '&:first-of-type': {
            marginLeft:
              theme.direction === 'rtl' ? theme.MenuItemIcon_margin : null,
            marginRight:
              theme.direction === 'ltr' ? theme.MenuItemIcon_margin : null
          },

          '&:last-child': {
            marginLeft:
              theme.direction === 'ltr' ? theme.MenuItemIcon_margin : null,
            marginRight:
              theme.direction === 'rtl' ? theme.MenuItemIcon_margin : null
          }
        }
      };
    },
    {
      displayName: 'MenuItem',
      rootEl: element
    }
  );
};

export const MenuItemContent = createStyledComponent('span', {
  display: 'flex',
  flex: '1 1 auto',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  padding: `${pxToEm(3)} 0 ${pxToEm(4)}`,
  whiteSpace: 'normal',
  wordBreak: 'break-all'
});

export const MenuItemInner = createStyledComponent('span', {
  display: 'flex',
  justifyContent: 'space-between'
});

export const MenuItemSecondaryText = createStyledComponent('span', (props) => {
  let theme = menuItemTheme(props.theme);

  const fontSize = theme.MenuItemSecondaryText_fontSize;

  return {
    color: theme.MenuItemSecondaryText_color,
    fontSize,
    // The regular text fontSize is larger than that of the secondary text.
    // This magic number (optically) re-aligns both sets of text vertically.
    paddingTop: getNormalizedValue(pxToEm(2), fontSize),
    wordBreak: 'break-word'
  };
});

export const MenuItemText = createStyledComponent('span', (props) => {
  let theme = menuItemTheme(props.theme);

  const fontSize = theme.MenuItemContent_fontSize;
  const margin = getNormalizedValue(theme.space_inline_sm, fontSize);

  return {
    fontSize,
    marginLeft: theme.direction === 'rtl' && margin,
    marginRight: theme.direction === 'ltr' && margin,
    wordBreak: 'break-word'
  };
});
