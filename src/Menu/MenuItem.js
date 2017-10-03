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
import React, { cloneElement } from 'react';
import { withTheme } from 'glamorous';
import { createStyledComponent, getNormalizedValue, pxToEm } from '../utils';
import IconDanger from '../Icon/custom/IconDanger';
import IconSuccess from '../Icon/custom/IconSuccess';
import IconWarning from '../Icon/custom/IconWarning';

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
  /** Item data (see example below) */
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
  variant?: 'regular' | 'danger' | 'success' | 'warning'
};

type Item = {
  iconEnd?: React$Element<*>,
  iconStart?: React$Element<*>,
  disabled?: boolean,
  divider?: boolean,
  onClick?: (event: SyntheticEvent<>) => void,
  render?: (item: Object, props: Object, theme: Object) => React$Element<*>,
  secondaryText?: React$Node,
  text?: React$Node,
  variant?: 'regular' | 'danger' | 'success' | 'warning'
};

// Some of these values (all of the paddings and the content fontSize) come
// from Button
export const componentTheme = (baseTheme: Object) => ({
  MenuItem_backgroundColor_active: baseTheme.color_gray_40,
  MenuItem_backgroundColor_focus: baseTheme.color_gray_20,
  MenuItem_backgroundColor_hover: baseTheme.color_gray_20,
  MenuItem_color_text: baseTheme.color_text,
  MenuItem_fontWeight: baseTheme.fontWeight_regular,
  MenuItem_padding: pxToEm(8),

  MenuItemContent_fontSize: baseTheme.fontSize_ui,
  MenuItemContent_padding: pxToEm(6),

  MenuItemIcon_padding: pxToEm(4),

  MenuItemSecondaryText_color_text: baseTheme.color_caption,
  MenuItemSecondaryText_fontSize: pxToEm(12),

  ...baseTheme
});

// These styles are based off of Button, with significant changes
const styles = {
  content: props => {
    let theme = componentTheme(props.theme);

    const fontSize = theme.MenuItemContent_fontSize;
    const paddingBottom = getNormalizedValue(pxToEm(4), fontSize);
    const paddingHorizontal = getNormalizedValue(
      theme.MenuItemContent_padding,
      fontSize
    );
    const paddingTop = getNormalizedValue(pxToEm(3), fontSize);

    return {
      display: 'flex',
      flex: '1 1 auto',
      flexWrap: 'wrap',
      fontSize,
      justifyContent: 'space-between',
      padding: `${paddingTop} ${paddingHorizontal} ${paddingBottom}`,
      whiteSpace: 'normal',
      wordBreak: 'break-all'
    };
  },
  inner: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  menuItem: props => {
    const { disabled, isHighlighted, variant } = props;
    let theme = componentTheme(props.theme);

    if (variant !== 'regular') {
      // prettier-ignore
      theme = {
        ...theme,
        MenuItem_backgroundColor_active: theme[`backgroundColor_${variant}_activeMuted`],
        MenuItem_color_text: theme[`color_text_${variant}`]
      };
    }

    return {
      backgroundColor: isHighlighted && theme.MenuItem_backgroundColor_hover,
      color: disabled ? theme.color_text_disabled : theme.MenuItem_color_text,
      cursor: disabled ? 'default' : 'pointer',
      fontWeight: theme.MenuItem_fontWeight,
      padding: theme.MenuItem_padding,

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

      '& [role="icon"]': {
        boxSizing: 'content-box',
        display: 'block',
        fill:
          disabled || variant !== 'regular'
            ? 'currentColor'
            : theme.color_theme_70,
        flex: '0 0 auto',
        padding: theme.MenuItemIcon_padding
      }
    };
  },
  secondaryText: props => {
    let theme = componentTheme(props.theme);

    return {
      color: theme.MenuItemSecondaryText_color_text,
      fontSize: theme.MenuItemSecondaryText_fontSize,
      // The regular text fontSize is larger than that of the secondary text.
      // This magic number re-aligns both sets of text vertically.
      paddingTop: getNormalizedValue(
        pxToEm(3),
        theme.MenuItemSecondaryText_fontSize
      ),
      wordBreak: 'break-word'
    };
  },
  text: props => {
    let theme = componentTheme(props.theme);

    const margin = getNormalizedValue(
      theme.spacing_single,
      theme.MenuItemContent_fontSize
    );

    return {
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
  event: SyntheticEvent<>
) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    onClick && onClick(event);
  }
};

const variantIcons = {
  danger: <IconDanger size="medium" />,
  success: <IconSuccess size="medium" />,
  warning: <IconWarning size="medium" />
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

  let startIcon =
    variant !== undefined && variant !== 'regular' && variantIcons[variant];
  if (iconStart) {
    startIcon = cloneElement(iconStart, { size: 'medium' });
  }

  const endIcon = iconEnd && cloneElement(iconEnd, { size: 'medium' });

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
 * Menu item component
 */
export default function MenuItem({
  tabIndex = 0,
  variant = 'regular',
  ...restProps
}: Props) {
  const rootProps = {
    tabIndex,
    variant,
    ...restProps
  };

  if (rootProps.render) {
    return customRender(rootProps);
  } else {
    return defaultRender(rootProps);
  }
}
