/* @flow */
import { VARIANT } from './constants';

import { ComponentTheme, ComponentThemeFn, ThemeValue } from '../themes/types';
import { DropdownProps } from '../Dropdown/types';

type Variant = keyof typeof VARIANT;

export interface CardProps {
  children: React.ReactNode;
  onClick?: (event: React.SyntheticEvent) => void;
}

export interface CardRowProps {
  children: React.ReactNode;
}

export interface CardActionsProps extends CardRowProps {}

export interface CardBlockProps extends CardRowProps {}

export interface CardDividerProps {}

export interface CardFooterProps {
  children?: React.ReactNode;
  defaultIsOpen?: boolean;
  expandable?: boolean;
  isOpen?: boolean;
  onClose?: (event: React.SyntheticEvent) => void;
  onOpen?: (event: React.SyntheticEvent) => void;
  title?: string | React.ReactElement<any>;
  triggerTitle?: (isOpen: boolean) => string;
  variant?: Variant;
}

export interface CardFooterStyleProps
  extends Pick<CardFooterProps, 'variant'> {}

export interface CardFooterDefaultProps {
  triggerTitle: (isOpen: boolean) => string;
}

export interface CardFooterState {
  isOpen?: boolean;
}

export interface CardImageProps {}

export interface CardStatusProps extends CardRowProps {
  variant: Variant;
}

export interface CardTitleProps extends CardRowProps {
  actions?: React.ReactNode;
  avatar?: string | React.ReactElement<any>;
  secondaryText?: string | React.ReactElement<any>;
  subtitle?: React.ReactNode;
  variant?: Variant;
}

export interface CardTitleMenuProps extends DropdownProps {
  triggerTitle?: string;
}

export interface CardTitleMenuDefaultProps {
  triggerTitle: string;
}

export type CardThemeFn = ComponentThemeFn<CardTheme>;
export type CardTheme = ComponentTheme<CardThemeKeys>;
interface CardThemeKeys {
  Card_backgroundColor: ThemeValue;
  Card_borderColor: ThemeValue;
  Card_borderRadius: ThemeValue;
  Card_boxShadow: ThemeValue;
  Card_boxShadow_focus: ThemeValue;
  CardRow_marginVertical: ThemeValue;
  CardRow_marginVerticalLast: ThemeValue;
  CardRow_paddingHorizontal: ThemeValue;
}

export type CardActionsThemeFn = ComponentThemeFn<CardActionsTheme>;
export type CardActionsTheme = ComponentTheme<CardActionsThemeKeys>;
interface CardActionsThemeKeys {
  CardActionsAction_spaceInline: ThemeValue;
}

export type CardBlockThemeFn = ComponentThemeFn<CardBlockTheme>;
export type CardBlockTheme = ComponentTheme<CardBlockThemeKeys>;
interface CardBlockThemeKeys {
  CardBlock_fontSize: ThemeValue;
  CardBlock_lineHeight: ThemeValue;
}

export type CardDividerThemeFn = ComponentThemeFn<CardDividerTheme>;
export type CardDividerTheme = ComponentTheme<CardDividerThemeKeys>;
interface CardDividerThemeKeys {
  CardDivider_borderColor: ThemeValue;
  CardDivider_borderWidth: ThemeValue;
}

export type CardFooterThemeFn = ComponentThemeFn<CardFooterTheme>;
export type CardFooterTheme = ComponentTheme<CardFooterThemeKeys>;
interface CardFooterThemeKeys {
  CardFooter_backgroundColor: ThemeValue;
  CardFooter_borderColor: ThemeValue;
  CardFooterRow_marginVertical: ThemeValue;
  CardFooterRow_marginVerticalLast: ThemeValue;
  CardFooterTitle_color: ThemeValue;
  CardFooterTitle_fontSize: ThemeValue;
  CardFooterTitle_fontWeight: ThemeValue;
}

export type CardStatusThemeFn = ComponentThemeFn<CardStatusTheme>;
export type CardStatusTheme = ComponentTheme<CardStatusThemeKeys>;
interface CardStatusThemeKeys {
  CardStatus_fontSize: ThemeValue;
  CardStatus_fontWeight: ThemeValue;
  CardStatusIcon_margin: ThemeValue;
  CardStatusIcon_size: ThemeValue;
}

export type CardTitleThemeFn = ComponentThemeFn<CardTitleTheme>;
export type CardTitleTheme = ComponentTheme<CardTitleThemeKeys>;
interface CardTitleThemeKeys {
  CardTitle_color: ThemeValue;
  CardTitle_fontSize: ThemeValue;
  CardTitle_fontWeight: ThemeValue;
  CardTitleAvatar_margin: ThemeValue;
  CardTitleAvatarSize: ThemeValue;
  CardTitleAvatarSize_large: ThemeValue;
  CardTitleIcon_margin: ThemeValue;
  CardTitleSecondaryText_color: ThemeValue;
  CardTitleSecondaryText_fontSize: ThemeValue;
  CardTitleSecondaryText_fontWeight: ThemeValue;
  CardSubtitle_color: ThemeValue;
  CardSubtitle_fontSize: ThemeValue;
  CardSubtitle_fontWeight: ThemeValue;
  CardSubtitle_marginTop: ThemeValue;
}
