/* @flow */
import React, { cloneElement } from 'react';
import { withTheme } from 'glamorous';
import { createStyledComponent, getNormalizedValue, pxToEm } from '../styles';
import IconDanger from '../Icon/IconDanger';
import IconSuccess from '../Icon/IconSuccess';
import IconWarning from '../Icon/IconWarning';

import type { Item } from './Menu';

type Props = {
  /** Rendered content of the component */
  children?: React$Node,
  /** Disable the menu item */
  disabled?: boolean,
  /** Icon that goes after the children*/
  iconEnd?: React$Element<*>,
  /** Icon that goes before the children */
  iconStart?: React$Element<*>,
  /** Display the item in an active style */
  isHighlighted?: boolean,
  /** Item data (see [example](/components/menu#data)) */
  item?: Item,
  /** Called with the click event */
  onClick?: (event: SyntheticEvent<>) => void,
  /** Custom render function */
  render?: (item: Item, props: Object, theme: Object) => React$Element<*>,
  /** Secondary text */
  secondaryText?: React$Node,
  /** Determines if the item can be focused */
  tabIndex?: number,
  /** Available variants */
  variant?: 'danger' | 'success' | 'warning'
};

// Some of these values (all of the margins & paddings and the content fontSize)
// come from Button (large)
// prettier-ignore
export const componentTheme = (baseTheme: Object) => ({
  MenuItem_backgroundColor_active: baseTheme.backgroundColor_active,
  MenuItem_backgroundColor_focus: baseTheme.backgroundColor_focus,
  MenuItem_backgroundColor_hover: baseTheme.backgroundColor_hover,
  MenuItem_backgroundColor_selected: baseTheme.backgroundColor_theme_selected,
  MenuItem_backgroundColor_selectedActive: baseTheme.backgroundColor_theme_selectedActive,
  MenuItem_backgroundColor_selectedHover: baseTheme.backgroundColor_theme_selectedHover,
  MenuItem_color: baseTheme.color,
  MenuItem_fontWeight: baseTheme.fontWeight_regular,
  MenuItem_fontWeight_selected: baseTheme.fontWeight_bold,
  MenuItem_paddingHorizontal: baseTheme.space_inset_md,
  MenuItem_paddingVertical: baseTheme.space_inset_sm,

  MenuItemContent_fontSize: baseTheme.fontSize_ui,

  MenuItemIcon_color: baseTheme.icon_color_theme,
  MenuItemIcon_margin: baseTheme.space_inset_sm,

  MenuItemSecondaryText_color: baseTheme.color_mouse,
  MenuItemSecondaryText_fontSize: baseTheme.fontSize_mouse,

  ...baseTheme
});

// These styles are based off of Button, with significant changes
const styles = {
  content: {
    display: 'flex',
    flex: '1 1 auto',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: `${pxToEm(3)} 0 ${pxToEm(4)}`,
    whiteSpace: 'normal',
    wordBreak: 'break-all'
  },
  inner: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  menuItem: ({ disabled, isHighlighted, theme: baseTheme, variant }) => {
    let theme = componentTheme(baseTheme);

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
      fontWeight: theme.MenuItem_fontWeight,
      padding: `${theme.MenuItem_paddingVertical} ${
        theme.MenuItem_paddingHorizontal
      }`,

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

        '&:first-child': {
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
  secondaryText: (props) => {
    let theme = componentTheme(props.theme);

    const fontSize = theme.MenuItemSecondaryText_fontSize;

    return {
      color: theme.MenuItemSecondaryText_color,
      fontSize,
      // The regular text fontSize is larger than that of the secondary text.
      // This magic number (optically) re-aligns both sets of text vertically.
      paddingTop: getNormalizedValue(pxToEm(2), fontSize),
      wordBreak: 'break-word'
    };
  },
  text: (props) => {
    let theme = componentTheme(props.theme);

    const fontSize = theme.MenuItemContent_fontSize;
    const margin = getNormalizedValue(theme.space_inline_sm, fontSize);

    return {
      fontSize,
      marginLeft: theme.direction === 'rtl' && margin,
      marginRight: theme.direction === 'ltr' && margin,
      wordBreak: 'break-word'
    };
  }
};

const Root = createStyledComponent('div', styles.menuItem, {
  displayName: 'MenuItem'
});

const CustomRoot = withTheme(
  ({ item, itemProps, render, theme: baseTheme }: Object) => {
    const theme = componentTheme(baseTheme);
    return render(item, itemProps, theme);
  }
);

const Content = createStyledComponent('span', styles.content);
const Inner = createStyledComponent('span', styles.inner);
const SecondaryText = createStyledComponent('span', styles.secondaryText);
const Text = createStyledComponent('span', styles.text);

const onKeyDown = (
  onClick: (event: SyntheticEvent<>) => void,
  event: SyntheticKeyboardEvent<>
) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    onClick && onClick(event);
  }
};

const variantIcons = {
  danger: <IconDanger size={pxToEm(24)} />,
  success: <IconSuccess size={pxToEm(24)} />,
  warning: <IconWarning size={pxToEm(24)} />
};

const defaultRender = ({
  children,
  disabled,
  iconEnd,
  iconStart,
  onClick,
  secondaryText,
  variant,
  tabIndex,
  ...restProps
}: Props) => {
  const rootProps = {
    disabled,
    onClick: disabled ? undefined : onClick,
    onKeyDown: onClick ? onKeyDown.bind(null, onClick) : undefined,
    tabIndex: disabled ? '-1' : tabIndex,
    variant,
    ...restProps
  };

  let startIcon = variant !== undefined && variant && variantIcons[variant];
  if (iconStart) {
    startIcon = cloneElement(iconStart, { size: pxToEm(24), key: 'iconStart' });
  }

  const endIcon =
    iconEnd && cloneElement(iconEnd, { size: pxToEm(24), key: 'iconEnd' });

  // This structure is based on Button
  return (
    <Root {...rootProps}>
      <Inner>
        {startIcon}
        {(children || secondaryText) && (
          <Content>
            <Text>{children}</Text>
            {SecondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
          </Content>
        )}
        {endIcon}
      </Inner>
    </Root>
  );
};

const customRender = ({ render, item, ...restProps }: Props) => {
  const customRootProps = {
    item,
    itemProps: {
      onKeyDown:
        item && item.onClick ? onKeyDown.bind(null, item.onClick) : undefined,
      tabIndex: item && item.disabled && '-1',
      ...restProps
    },
    render
  };
  return <CustomRoot {...customRootProps} />;
};

/**
 * A MenuItem represents an option in a [Menu](/components/menu).
 * They can be used to trigger actions or navigate to a new location.
 * MenuItems provide context through optional variants, secondary text, or [Icons](/components/icon).
 *
 * A custom rendering hook is exposed to enable any extra functionality your app requires.
 */
export default function MenuItem({ tabIndex = 0, ...restProps }: Props) {
  const rootProps = {
    tabIndex,
    ...restProps
  };

  if (rootProps.render) {
    return customRender(rootProps);
  } else {
    return defaultRender(rootProps);
  }
}
