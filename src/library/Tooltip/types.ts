/* @flow */
import { PLACEMENT } from './constants';

import { ComponentTheme, ComponentThemeFn, ThemeValue } from '../themes/types';

type Placement = keyof typeof PLACEMENT;

export interface TooltipProps {
  children: React.ReactNode;
  cursor?: string;
  content: string;
  defaultIsOpen?: boolean;
  disabled?: boolean;
  hasArrow?: boolean;
  id?: string;
  isOpen?: boolean;
  modifiers?: object;
  onClose?: (event: React.SyntheticEvent) => void;
  onOpen?: (event: React.SyntheticEvent) => void;
  placement?: Placement;
  positionFixed?: boolean;
  subtitle?: any;
  title?: any;
  usePortal?: boolean;
}

export interface TooltipDefaultProps {
  hasArrow: boolean;
  placement: Placement;
}

export interface TooltipState {
  isOpen: boolean;
}

export type TooltipPropGetter = (props?: object) => object;
export type TooltipRenderFn = (props?: TooltipRenderProps) => React.ReactNode;
interface TooltipRenderProps {
  props: object;
}

export type TooltipThemeFn = ComponentThemeFn<TooltipTheme>;
export type TooltipTheme = ComponentTheme<TooltipThemeKeys>;
interface TooltipThemeKeys {
  TooltipArrow_backgroundColor: ThemeValue;
  TooltipArrow_borderColor: ThemeValue;
  TooltipContent_backgroundColor: ThemeValue;
  TooltipContent_borderColor: ThemeValue;
  TooltipContent_borderRadius: ThemeValue;
  TooltipContent_boxShadow: ThemeValue;
  TooltipContent_color: ThemeValue;
  TooltipContent_maxWidth: ThemeValue;
  TooltipContent_paddingVertical: ThemeValue;
  TooltipContent_zIndex: ThemeValue;
  TooltipContentBlock_marginVertical: ThemeValue;
  TooltipContentBlock_paddingHorizontal: ThemeValue;
  TooltipTriggerText_borderStyle: ThemeValue;
  TooltipTriggerText_borderColor: ThemeValue;
  TooltipTriggerText_borderWidth: ThemeValue;
}
