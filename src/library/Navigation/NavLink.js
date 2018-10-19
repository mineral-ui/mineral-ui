/* @flow */
import React, { Component } from 'react';
import { createStyledComponent } from '../styles';
import { createThemedComponent } from '../themes';
import Button from '../Button';
import Truncate from '../Truncate';

type Props = {
  /** Content of the navLink panel */
  children?: React$Node,
  /** Disables NavLink */
  disabled?: boolean,
  /** Icon placed before the title */
  icon?: React$Element<*>,
  /** Id of NavLink */
  id?: string,
  /** @Private Index of NavLink */
  index?: number,
  /** Maximum width of NavLink */
  maxWidth?: number | string,
  /** @Private Id of the navLink panel */
  panelId?: string,
  /** @Private Selected state of NavLink */
  selected?: boolean
};

export const componentTheme = (baseTheme: Object) => ({
  NavLink_backgroundColor_selected: baseTheme.backgroundColor_theme_selected,
  NavLink_borderColor_focus: baseTheme.borderColor_theme_focus,
  NavLink_borderWidth_focus: 1,
  NavLink_color: baseTheme.color_gray_80,
  NavLink_color_selected: baseTheme.color_theme_70,
  NavLink_color_selectedHover: baseTheme.color_theme,

  NavLinkIndicator_thickness: 2,

  ...baseTheme
});

const styles = {
  anchor: ({
    disabled,
    maxWidth,
    position = 'top',
    selected,
    theme: baseTheme
  }) => {
    const theme = componentTheme(baseTheme);
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
        color: !disabled && theme.NavLink_color_selectedHover
      },

      // Truncate
      '&:active > span > span > span > span > span:focus': {
        outline: 'none'
      },

      ...(selected && {
        backgroundColor: theme.NavLink_backgroundColor_selected,
        color: theme.NavLink_color_selected,
        // prettier-ignore
        boxShadow:
          `inset ${boxShadow(theme.NavLinkIndicator_thickness)[position]} ${theme.NavLink_borderColor_focus}`,

        '&:focus, &:active': {
          color: theme.NavLink_color_selected,
          outline: `${theme.NavLink_borderWidth_focus}px solid ${
            theme.NavLink_borderColor_focus
          }`,
          outlineOffset: `-${theme.NavLink_borderWidth_focus}px`
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
  }
};

const ThemedButton = createThemedComponent(Button, ({ theme: baseTheme }) => {
  const theme = componentTheme(baseTheme);
  return {
    Button_backgroundColor_minimal_active: null,
    Button_backgroundColor_minimal_hover: null,
    Button_borderRadius: null,
    Button_borderWidth: 0,
    Button_boxShadow_focus: null,
    Button_color_minimal: theme.NavLink_color
  };
});

const Anchor = createStyledComponent(ThemedButton, styles.anchor, {
  displayName: 'NavLink',
  withProps: {
    element: 'a',
    fullWidth: true,
    role: 'navLink',
    size: 'medium'
  }
});

/**
 * TODO
 */
export default class NavLink extends Component<Props> {
  render() {
    const {
      children,
      disabled,
      icon,
      index,
      panelId,
      selected,
      ...restProps
    } = this.props;
    const anchorProps = {
      'aria-controls': panelId,
      'aria-disabled': disabled,
      'aria-selected': selected,
      'data-index': index,
      disabled,
      href: panelId && `#${panelId}`,
      iconStart: icon,
      minimal: true,
      selected,
      navLinkIndex: selected ? 0 : -1,
      ...restProps
    };

    return (
      <li role="presentation">
        <Anchor {...anchorProps}>
          <Truncate>{children}</Truncate>
        </Anchor>
      </li>
    );
  }
}
