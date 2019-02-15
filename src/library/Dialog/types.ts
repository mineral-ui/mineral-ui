/* @flow */
import { ACTIONS_SIZE, APPEARANCE, ELEMENT, SIZE, VARIANT } from './constants';

import { ComponentTheme, ComponentThemeFn, ThemeValue } from '../themes/types';

type ActionsSize = keyof typeof ACTIONS_SIZE;
type Appearance = keyof typeof APPEARANCE;
type Element = keyof typeof ELEMENT;
type Size = keyof typeof SIZE;
type Variant = keyof typeof VARIANT;

export type ModifiersContextType = object | typeof undefined;

export interface DialogProps {
  actions?: Array<{
    text: string;
    size?: ActionsSize;
  }>;
  appSelector?: string;
  'aria-label'?: string;
  children?: React.ReactNode;
  closeButtonLabel?: string;
  closeOnClickOutside?: boolean;
  closeOnEscape?: boolean;
  disableFocusOnOpen?: boolean;
  disableFocusTrap?: boolean;
  hideOverlay?: boolean;
  id?: string;
  isOpen?: boolean;
  modeless?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  preventCloseButtonClose?: boolean;
  showCloseButton?: boolean;
  size?: Size;
  title?: string | React.ReactElement<any>;
  usePortal?: boolean;
  variant?: Variant;
}

export interface DialogStyleProps
  extends Pick<DialogProps, 'modeless' | 'size'> {}

export interface DialogDefaultProps {
  closeButtonLabel: string;
  closeOnClickOutside: boolean;
  closeOnEscape: boolean;
  size: Size;
  usePortal: boolean;
}

export interface DialogState {
  isExited: boolean;
  isExiting: boolean;
}

export interface DialogActionsProps {
  children?: React.ReactElement<any> | Array<React.ReactElement<any>>;
  variant?: Variant;
}

export interface DialogAnimateStyleProps {
  state?: string;
}

export interface DialogBodyProps extends DialogRowProps {}

export interface DialogFooterProps extends DialogRowProps {}

export interface DialogHeaderProps {
  children?: React.ReactNode;
  closeButton?: React.ReactNode;
  titleProps?: object;
}

export interface DialogRowProps {
  children?: React.ReactNode;
}

export interface DialogTitleProps {
  appearance?: Appearance;
  as?: Element;
  children: React.ReactNode;
  id?: string;
  theme: object;
  variant?: Variant;
}

export interface DialogTitleDefaultProps {
  appearance: Appearance;
}

export type DialogThemeFn = ComponentThemeFn<DialogTheme>;
export type DialogTheme = ComponentTheme<DialogThemeKeys>;
interface DialogThemeKeys {
  Dialog_transitionDuration: ThemeValue;
  Dialog_zIndex: ThemeValue;
  DialogCloseButton_margin: ThemeValue;
  DialogContent_backgroundColor: ThemeValue;
  DialogContent_borderColor: ThemeValue;
  DialogContent_borderRadius: ThemeValue;
  DialogContent_boxShadow: ThemeValue;
  DialogContent_maxHeight: ThemeValue;
  DialogContent_maxHeight_small: ThemeValue;
  DialogContent_maxHeight_medium: ThemeValue;
  DialogContent_maxHeight_large: ThemeValue;
  DialogContent_maxWidth_small: ThemeValue;
  DialogContent_maxWidth_medium: ThemeValue;
  DialogContent_maxWidth_large: ThemeValue;
  DialogContent_minWidth: ThemeValue;
  DialogContent_offsetVertical: ThemeValue;
  DialogContent_width_small: ThemeValue;
  DialogContent_width_medium: ThemeValue;
  DialogContent_width_large: ThemeValue;
  DialogOverlay_backgroundColor: ThemeValue;
  DialogRow_fontSize: ThemeValue;
  DialogRow_paddingHorizontal: ThemeValue;
  DialogRow_marginVertical: ThemeValue;
}

export type DialogActionsThemeFn = ComponentThemeFn<DialogActionsTheme>;
export type DialogActionsTheme = ComponentTheme<DialogActionsThemeKeys>;
interface DialogActionsThemeKeys {
  DialogActionsItem_margin: ThemeValue;
}

export type DialogBodyThemeFn = ComponentThemeFn<DialogBodyTheme>;
export type DialogBodyTheme = ComponentTheme<DialogBodyThemeKeys>;
interface DialogBodyThemeKeys {
  DialogBody_outline_focus: ThemeValue;
  DialogBody_boxShadowBottom: ThemeValue;
  DialogBody_boxShadowLeft: ThemeValue;
  DialogBody_boxShadowRight: ThemeValue;
  DialogBody_boxShadowTop: ThemeValue;
}

export type DialogRowThemeFn = ComponentThemeFn<DialogRowTheme>;
export type DialogRowTheme = ComponentTheme<DialogRowThemeKeys>;
interface DialogRowThemeKeys {
  DialogRow_fontSize: ThemeValue;
  DialogRow_paddingHorizontal: ThemeValue;
  DialogRow_marginVertical: ThemeValue;
}

export type DialogTitleThemeFn = ComponentThemeFn<DialogTitleTheme>;
export type DialogTitleTheme = ComponentTheme<DialogTitleThemeKeys>;
interface DialogTitleThemeKeys {
  DialogTitle_color: ThemeValue;
  DialogTitle_fontSize: ThemeValue;
  DialogTitle_fontWeight: ThemeValue;
  DialogTitleIcon_margin: ThemeValue;
  DialogTitleIcon_size: ThemeValue;
}
