/* @flow */
import { createStyledComponent, getNormalizedValue, pxToEm } from '../styles';
import { createThemedComponent } from '../themes';
import Flex, { FlexItem } from '../Flex';

import type { CreateHeaderTitleLogoNode } from './types';

const ThemedFlex = createThemedComponent(Flex, ({ theme: baseTheme }) => {
  const theme = baseTheme;

  // TODO: This is copied from primaryNavItemTheme...
  return {
    borderColor_theme_focus: baseTheme.color_theme_20,
    boxShadow_focusInner: baseTheme.backgroundColor_themePrimary,

    Button_backgroundColor: 'transparent',
    Button_backgroundColor_active: baseTheme.color_theme_80,
    Button_backgroundColor_focus: 'transparent',
    Button_backgroundColor_hover: baseTheme.color_theme_70,
    Button_backgroundColor_minimal: 'transparent',
    Button_backgroundColor_minimal_active: baseTheme.color_gray_10,
    Button_backgroundColor_minimal_focus: 'transparent',
    Button_backgroundColor_minimal_hover: 'transparent',
    Button_borderColor: 'transparent',
    Button_borderColor_active: 'transparent',
    Button_borderColor_focus: baseTheme.color_theme_20,
    Button_borderColor_hover: 'transparent',
    Button_borderColor_minimal: 'transparent',
    Button_borderColor_minimal_active: 'transparent',
    Button_borderColor_minimal_focus: baseTheme.color_theme_40,
    Button_borderColor_minimal_hover: 'transparent',
    Button_color: baseTheme.color_themePrimary,
    Button_color_disabled: baseTheme.color_theme_40,
    Button_color_hover: baseTheme.color_themePrimary,
    Button_color_minimal: baseTheme.color_gray_80,
    Button_color_minimal_hover: baseTheme.color_theme_60,

    ButtonIcon_color: 'inherit'
  };
});

export const HeaderRoot = createStyledComponent(
  ThemedFlex,
  ({ minimal, theme: baseTheme }) => {
    const theme = baseTheme;

    return minimal
      ? {
          borderBottom: `1px solid ${theme.borderColor}`
        }
      : {
          backgroundColor: theme.backgroundColor_themePrimary
          // TODO: This doesn't work because we wrap children in FlexItems
          // color: theme.color_themePrimary
        };
  },
  {
    withProps: { alignItems: 'center' }
  }
);

export const HeaderTitleRoot = createStyledComponent(
  Flex,
  ({ minimal, theme: baseTheme }) => {
    const theme = baseTheme;

    return {
      color: !minimal && theme.color_themePrimary
    };
  },
  {
    withProps: { alignItems: 'center' }
  }
);

export const createHeaderTitleLogoNode: CreateHeaderTitleLogoNode = (
  component
) =>
  createStyledComponent(component, ({ theme: baseTheme }) => {
    const theme = baseTheme;
    const size = pxToEm(48);

    return {
      boxSizing: 'content-box',
      height: size,
      width: size,
      padding: theme.space_inset_sm
    };
  });

export const HeaderTitleTitle = createStyledComponent(
  'h1',
  ({ theme: baseTheme }) => {
    const theme = baseTheme;
    const fontSize = theme.fontSize_ui;

    return {
      fontSize,
      fontWeight: theme.fontWeight_semiBold,
      width: getNormalizedValue(pxToEm(160), fontSize)
    };
  }
);
