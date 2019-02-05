/* @flow */
import { pxToEm } from '../styles';

import type {
  CardThemeFn,
  CardActionsThemeFn,
  CardBlockThemeFn,
  CardDividerThemeFn,
  CardFooterThemeFn,
  CardStatusThemeFn,
  CardTitleThemeFn
} from './types';

// prettier-ignore
export const cardTheme: CardThemeFn = (baseTheme) => ({
  Card_backgroundColor: baseTheme.panel_backgroundColor,
  Card_borderColor: baseTheme.panel_borderColor,
  Card_borderRadius: baseTheme.borderRadius_1,
  Card_boxShadow: baseTheme.boxShadow_2,
  Card_boxShadow_focus: `0 0 0 2px ${baseTheme.borderColor_theme_focus}, ${baseTheme.boxShadow_1}`,

  CardRow_marginVertical: baseTheme.space_stack_md,
  CardRow_marginVerticalLast: baseTheme.space_stack_lg,
  CardRow_paddingHorizontal: baseTheme.space_inset_md,

  ...baseTheme
});

export const cardActionsTheme: CardActionsThemeFn = (baseTheme) => ({
  CardActionsAction_spaceInline: baseTheme.space_inline_sm,

  ...baseTheme
});

export const cardBlockTheme: CardBlockThemeFn = (baseTheme) => ({
  CardBlock_fontSize: baseTheme.fontSize_ui,
  CardBlock_lineHeight: baseTheme.lineHeight_prose,

  ...baseTheme
});

export const cardDividerTheme: CardDividerThemeFn = (baseTheme) => ({
  CardDivider_borderColor: baseTheme.borderColor,
  CardDivider_borderWidth: '1px',

  ...baseTheme
});

export const cardFooterTheme: CardFooterThemeFn = (baseTheme) => ({
  CardFooter_backgroundColor: baseTheme.well_backgroundColor,
  CardFooter_borderColor: baseTheme.borderColor,

  CardFooterRow_marginVertical: baseTheme.space_stack_sm,
  CardFooterRow_marginVerticalLast: baseTheme.space_stack_md,

  CardFooterTitle_color: baseTheme.h5_color,
  CardFooterTitle_fontSize: baseTheme.h5_fontSize,
  CardFooterTitle_fontWeight: baseTheme.h5_fontWeight,

  ...baseTheme
});

export const cardStatusTheme: CardStatusThemeFn = (baseTheme) => ({
  CardStatus_fontSize: baseTheme.fontSize_ui,
  CardStatus_fontWeight: baseTheme.fontWeight_regular,

  CardStatusIcon_margin: baseTheme.space_inline_sm,
  CardStatusIcon_size: pxToEm(12),

  ...baseTheme
});

export const cardTitleTheme: CardTitleThemeFn = (baseTheme) => ({
  CardTitle_color: baseTheme.h4_color,
  CardTitle_fontSize: baseTheme.h4_fontSize,
  CardTitle_fontWeight: baseTheme.h4_fontWeight,

  CardTitleAvatar_margin: baseTheme.space_inline_sm,
  CardTitleAvatarSize: baseTheme.size_small,
  CardTitleAvatarSize_large: baseTheme.size_large,

  CardTitleIcon_margin: baseTheme.space_inline_sm,

  CardTitleSecondaryText_color: baseTheme.color_mouse,
  CardTitleSecondaryText_fontSize: baseTheme.fontSize_mouse,
  CardTitleSecondaryText_fontWeight: baseTheme.fontWeight_regular,

  CardSubtitle_color: baseTheme.color_mouse,
  CardSubtitle_fontSize: baseTheme.fontSize_mouse,
  CardSubtitle_fontWeight: baseTheme.fontWeight_regular,
  CardSubtitle_marginTop: baseTheme.space_stack_sm,

  ...baseTheme
});
