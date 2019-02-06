/* @flow */
import { VARIANT } from './constants';

import { MenuItems } from '../Menu/types';
import {
  ComponentTheme,
  ComponentThemeFn,
  ThemeValue
} from '../themes/types';

type Variant = keyof typeof VARIANT;

export type CardProps = {
  children: React.ReactNode,
  onClick?: (event: SyntheticEvent<>) => void
};

export type CardActionsProps = {
  children: React.ReactNode
};

export type CardBlockProps = {
  children: React.ReactNode
};

export type CardDividerProps = {};

export type CardFooterProps = {
  children?: React.ReactNode,
  defaultIsOpen?: boolean,
  expandable?: boolean,
  isOpen?: boolean,
  onClose?: (event: SyntheticEvent<>) => void,
  onOpen?: (event: SyntheticEvent<>) => void,
  title?: string | React$Element<*>,
  triggerTitle?: (isOpen: boolean) => string,
  variant?: Variant
};

export type CardFooterDefaultProps = {
  triggerTitle: (isOpen: boolean) => string
};

export type CardFooterState = {
  isOpen?: boolean
};

export type CardImageProps = {};

export type CardStatusProps = {
  children: string,
  variant: Variant
};

export type CardTitleProps = {
  actions?: React.ReactNode,
  avatar?: string | React$Element<*>,
  children: React.ReactNode,
  secondaryText?: string | React$Element<*>,
  subtitle?: React.ReactNode,
  variant?: Variant
};

export type CardTitleMenuProps = {
  data: MenuItems,
  triggerTitle?: string
};

export type CardTitleMenuDefaultProps = {
  triggerTitle: string
};

export type CardThemeFn = ComponentThemeFn<CardTheme>;
export type CardTheme = ComponentTheme<CardThemeKeys>;
type CardThemeKeys = {
  Card_backgroundColor: ThemeValue,
  Card_borderColor: ThemeValue,
  Card_borderRadius: ThemeValue,
  Card_boxShadow: ThemeValue,
  Card_boxShadow_focus: ThemeValue,
  CardRow_marginVertical: ThemeValue,
  CardRow_marginVerticalLast: ThemeValue,
  CardRow_paddingHorizontal: ThemeValue
};

export type CardActionsThemeFn = ComponentThemeFn<CardActionsTheme>;
export type CardActionsTheme = ComponentTheme<CardActionsThemeKeys>;
type CardActionsThemeKeys = {
  CardActionsAction_spaceInline: ThemeValue
};

export type CardBlockThemeFn = ComponentThemeFn<CardBlockTheme>;
export type CardBlockTheme = ComponentTheme<CardBlockThemeKeys>;
type CardBlockThemeKeys = {
  CardBlock_fontSize: ThemeValue,
  CardBlock_lineHeight: ThemeValue
};

export type CardDividerThemeFn = ComponentThemeFn<CardDividerTheme>;
export type CardDividerTheme = ComponentTheme<CardDividerThemeKeys>;
type CardDividerThemeKeys = {
  CardDivider_borderColor: ThemeValue,
  CardDivider_borderWidth: ThemeValue
};

export type CardFooterThemeFn = ComponentThemeFn<CardFooterTheme>;
export type CardFooterTheme = ComponentTheme<CardFooterThemeKeys>;
type CardFooterThemeKeys = {
  CardFooter_backgroundColor: ThemeValue,
  CardFooter_borderColor: ThemeValue,
  CardFooterRow_marginVertical: ThemeValue,
  CardFooterRow_marginVerticalLast: ThemeValue,
  CardFooterTitle_color: ThemeValue,
  CardFooterTitle_fontSize: ThemeValue,
  CardFooterTitle_fontWeight: ThemeValue
};

export type CardStatusThemeFn = ComponentThemeFn<CardStatusTheme>;
export type CardStatusTheme = ComponentTheme<CardStatusThemeKeys>;
type CardStatusThemeKeys = {
  CardStatus_fontSize: ThemeValue,
  CardStatus_fontWeight: ThemeValue,
  CardStatusIcon_margin: ThemeValue,
  CardStatusIcon_size: ThemeValue
};

export type CardTitleThemeFn = ComponentThemeFn<CardTitleTheme>;
export type CardTitleTheme = ComponentTheme<CardTitleThemeKeys>;
type CardTitleThemeKeys = {
  CardTitle_color: ThemeValue,
  CardTitle_fontSize: ThemeValue,
  CardTitle_fontWeight: ThemeValue,
  CardTitleAvatar_margin: ThemeValue,
  CardTitleAvatarSize: ThemeValue,
  CardTitleAvatarSize_large: ThemeValue,
  CardTitleIcon_margin: ThemeValue,
  CardTitleSecondaryText_color: ThemeValue,
  CardTitleSecondaryText_fontSize: ThemeValue,
  CardTitleSecondaryText_fontWeight: ThemeValue,
  CardSubtitle_color: ThemeValue,
  CardSubtitle_fontSize: ThemeValue,
  CardSubtitle_fontWeight: ThemeValue,
  CardSubtitle_marginTop: ThemeValue
};
