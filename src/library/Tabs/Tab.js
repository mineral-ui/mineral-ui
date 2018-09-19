/* @flow */
import React, { Component } from 'react';
import { createStyledComponent } from '../styles';
import { createThemedComponent } from '../themes';
import Button from '../Button';
import Truncate from '../Truncate';

type Props = {
  /** Content of the tab panel */
  children?: React$Node,
  /** Disables Tab */
  disabled?: boolean,
  /** Icon placed before the title */
  icon?: React$Element<*>,
  /** Id of Tab */
  id?: string,
  /** @Private Index of Tab */
  index?: number,
  /** Maximum width of Tab */
  maxWidth?: number | string,
  /** @Private Id of the tab panel */
  panelId?: string,
  /** @Private Selected state of Tab */
  selected?: boolean,
  /** Tab title */
  title: React$Node
};

export const componentTheme = (baseTheme: Object) => ({
  Tab_backgroundColor_selected: baseTheme.backgroundColor_theme_selected,
  Tab_borderColor_focus: baseTheme.borderColor_theme_focus,
  Tab_borderWidth_focus: 1,
  Tab_color: baseTheme.color_gray_80,
  Tab_color_selected: baseTheme.color_theme_70,
  Tab_color_selectedHover: baseTheme.color_theme,

  TabIndicator_thickness: 2,

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
    Button_color_minimal: theme.Tab_color
  };
});

const Anchor = createStyledComponent(ThemedButton, styles.anchor, {
  displayName: 'Tab',
  filterProps: ['title'],
  withProps: {
    element: 'a',
    fullWidth: true,
    role: 'tab',
    size: 'medium'
  }
});

/**
 * Tab is used within [Tabs](/components/tabs) to define a tab title and panel
 * content.
 */
export default class Tab extends Component<Props> {
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
      tabIndex: selected ? 0 : -1,
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
