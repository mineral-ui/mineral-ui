/* @flow */
import { ACTIONS_SIZE, APPEARANCE, ELEMENT, SIZE, VARIANT } from './constants';

import {
  ComponentTheme,
  ComponentThemeFn,
  ThemeValue
} from '../themes/types';

type ActionsSize = keyof typeof ACTIONS_SIZE;
type Appearance = keyof typeof APPEARANCE;
type Element = keyof typeof ELEMENT;
type Size = keyof typeof SIZE;
type Variant = keyof typeof VARIANT;

export type ModifiersContextType = object | typeof undefined;

export type DialogProps = {
  actions?: Array<{
    text: string,
    size?: ActionsSize
  }>,
  appSelector?: string,
  'aria-label'?: string,
  children?: React.ReactNode,
  closeButtonLabel?: string,
  closeOnClickOutside?: boolean,
  closeOnEscape?: boolean,
  disableFocusOnOpen?: boolean,
  disableFocusTrap?: boolean,
  hideOverlay?: boolean,
  id?: string,
  isOpen?: boolean,
  modeless?: boolean,
  onClose?: () => void,
  onOpen?: () => void,
  preventCloseButtonClose?: boolean,
  showCloseButton?: boolean,
  size?: Size,
  title?: string | React.ReactElement<any>,
  usePortal?: boolean,
  variant?: Variant
};

export type DialogDefaultProps = {
  closeButtonLabel: string,
  closeOnClickOutside: boolean,
  closeOnEscape: boolean,
  size: Size,
  usePortal: boolean
};

export type DialogState = {
  isExited: boolean,
  isExiting: boolean
};

export type DialogActionsProps = {
  children?: React.ReactElement<any> | Array<React.ReactElement<any>>,
  variant?: Variant
};

export type DialogBodyProps = {
  children?: React.ReactNode
};

export type DialogFooterProps = {
  children?: React.ReactNode
};

export type DialogHeaderProps = {
  children?: React.ReactNode,
  closeButton?: React.ReactNode,
  titleProps?: object
};

export type DialogRowProps = {
  children?: React.ReactNode
};

export type DialogTitleProps = {
  appearance?: Appearance,
  as?: Element,
  children: React.ReactNode,
  id?: string,
  theme: object,
  variant?: Variant
};

export type DialogTitleDefaultProps = {
  appearance: Appearance
};

export type DialogThemeFn = ComponentThemeFn<DialogTheme>;
export type DialogTheme = ComponentTheme<DialogThemeKeys>;
type DialogThemeKeys = {
  Dialog_transitionDuration: ThemeValue,
  Dialog_zIndex: ThemeValue,
  DialogCloseButton_margin: ThemeValue,
  DialogContent_backgroundColor: ThemeValue,
  DialogContent_borderColor: ThemeValue,
  DialogContent_borderRadius: ThemeValue,
  DialogContent_boxShadow: ThemeValue,
  DialogContent_maxHeight: ThemeValue,
  DialogContent_maxHeight_small: ThemeValue,
  DialogContent_maxHeight_medium: ThemeValue,
  DialogContent_maxHeight_large: ThemeValue,
  DialogContent_maxWidth_small: ThemeValue,
  DialogContent_maxWidth_medium: ThemeValue,
  DialogContent_maxWidth_large: ThemeValue,
  DialogContent_minWidth: ThemeValue,
  DialogContent_offsetVertical: ThemeValue,
  DialogContent_width_small: ThemeValue,
  DialogContent_width_medium: ThemeValue,
  DialogContent_width_large: ThemeValue,
  DialogOverlay_backgroundColor: ThemeValue,
  DialogRow_fontSize: ThemeValue,
  DialogRow_paddingHorizontal: ThemeValue,
  DialogRow_marginVertical: ThemeValue
};

export type DialogActionsThemeFn = ComponentThemeFn<DialogActionsTheme>;
export type DialogActionsTheme = ComponentTheme<DialogActionsThemeKeys>;
type DialogActionsThemeKeys = {
  DialogActionsItem_margin: ThemeValue
};

export type DialogBodyThemeFn = ComponentThemeFn<DialogBodyTheme>;
export type DialogBodyTheme = ComponentTheme<DialogBodyThemeKeys>;
type DialogBodyThemeKeys = {
  DialogBody_outline_focus: ThemeValue,
  DialogBody_boxShadowBottom: ThemeValue,
  DialogBody_boxShadowLeft: ThemeValue,
  DialogBody_boxShadowRight: ThemeValue,
  DialogBody_boxShadowTop: ThemeValue
};

export type DialogRowThemeFn = ComponentThemeFn<DialogRowTheme>;
export type DialogRowTheme = ComponentTheme<DialogRowThemeKeys>;
type DialogRowThemeKeys = {
  DialogRow_fontSize: ThemeValue,
  DialogRow_paddingHorizontal: ThemeValue,
  DialogRow_marginVertical: ThemeValue
};

export type DialogTitleThemeFn = ComponentThemeFn<DialogTitleTheme>;
export type DialogTitleTheme = ComponentTheme<DialogTitleThemeKeys>;
type DialogTitleThemeKeys = {
  DialogTitle_color: ThemeValue,
  DialogTitle_fontSize: ThemeValue,
  DialogTitle_fontWeight: ThemeValue,
  DialogTitleIcon_margin: ThemeValue,
  DialogTitleIcon_size: ThemeValue
};
