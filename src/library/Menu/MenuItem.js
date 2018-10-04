/* @flow */
import React, { cloneElement, PureComponent } from 'react';
import { createStyledComponent, pxToRem } from '../styles';
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
  /** Item index - provided to render callback */
  index?: number,
  /** Display the item in an active style */
  isHighlighted?: boolean,
  /** Item data - provided to render callback */
  item?: Item,
  /** Called with the click event */
  onClick?: (event: SyntheticEvent<>) => void,
  /**
   * Provides custom rendering control. See the
   * [custom item example](/components/menu#custom-item) and
   * our [render props guide](/render-props).
   */
  render?: RenderFn,
  /** Secondary text */
  secondaryText?: React$Node,
  /** Available variants */
  variant?: 'danger' | 'success' | 'warning'
};

type PropGetter = (props?: Object) => Object;
type RenderFn = (props?: RenderProps) => React$Node;
type RenderProps = {
  props: Object
};

// Some of these values (all of the margins & paddings and the content fontSize)
// come from Button (large)
// prettier-ignore
export const componentTheme = (baseTheme: Object) => ({
  MenuItem_backgroundColor_active: baseTheme.gray_20,
  MenuItem_backgroundColor_focus: baseTheme.gray_10,
  MenuItem_backgroundColor_hover: baseTheme.gray_10,
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
  content: ({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: `${pxToRem(3, theme)} 0 ${pxToRem(4, theme)}`,
    whiteSpace: 'normal',
    wordBreak: 'break-all'
  }),
  inner: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  root: ({ disabled, isHighlighted, theme: baseTheme, variant }) => {
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
          [`margin${theme.rtlEnd}`]: theme.MenuItemIcon_margin
        },

        '&:last-child': {
          [`margin${theme.rtlStart}`]: theme.MenuItemIcon_margin
        }
      }
    };
  },
  secondaryText: ({ theme: baseTheme }) => {
    let theme = componentTheme(baseTheme);

    return {
      color: theme.MenuItemSecondaryText_color,
      fontSize: theme.MenuItemSecondaryText_fontSize,
      // The regular text fontSize is larger than that of the secondary text.
      // This magic number (optically) re-aligns both sets of text vertically.
      paddingTop: pxToRem(2, theme),
      wordBreak: 'break-word'
    };
  },
  text: ({ theme: baseTheme }) => {
    let theme = componentTheme(baseTheme);

    return {
      fontSize: theme.MenuItemContent_fontSize,
      [`margin${theme.rtlEnd}`]: theme.space_inline_sm,
      wordBreak: 'break-word'
    };
  }
};

const Content = createStyledComponent('span', styles.content);
const Inner = createStyledComponent('span', styles.inner);
const Root = createStyledComponent('div', styles.root, {
  displayName: 'MenuItem'
});
const SecondaryText = createStyledComponent('span', styles.secondaryText);
const Text = createStyledComponent('span', styles.text);

const variantIcons = {
  danger: <IconDanger size={pxToRem(24)} />,
  success: <IconSuccess size={pxToRem(24)} />,
  warning: <IconWarning size={pxToRem(24)} />
};

/**
 * A MenuItem represents an option in a [Menu](/components/menu). They can be
 * used to trigger actions or navigate to a new location. MenuItems provide
 * context through optional variants, secondary text, or
 * [Icons](/components/icon).
 *
 * A custom rendering hook is exposed to enable any extra functionality your app
 * requires.
 */
export default class MenuItem extends PureComponent<Props> {
  render() {
    const {
      children,
      iconEnd,
      iconStart,
      render,
      secondaryText,
      variant
    } = this.props;

    if (render) {
      return render({
        props: this.getItemProps(this.props)
      });
    }

    const rootProps = this.getItemProps(this.props);

    let startIcon = variant !== undefined && variant && variantIcons[variant];
    if (iconStart) {
      startIcon = cloneElement(iconStart, {
        size: pxToRem(24),
        key: 'iconStart'
      });
    }
    const endIcon =
      iconEnd && cloneElement(iconEnd, { size: pxToRem(24), key: 'iconEnd' });

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
  }

  getItemProps: PropGetter = (props = {}) => {
    const { disabled, onClick, render, ...restProps } = props;

    return {
      ...(render ? restProps : {}),
      disabled,
      tabIndex: disabled ? '-1' : 0,
      ...(!render ? restProps : {}),
      ...(!disabled ? { onClick, onKeyDown: this.onKeyDown } : {})
    };
  };

  onKeyDown = (event: SyntheticKeyboardEvent<>) => {
    const { onClick } = this.props;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick && onClick(event);
    }
  };
}
