/* @flow */
import { PLACEMENT } from './constants';

import type {
  ComponentTheme,
  ComponentThemeFn,
  ThemeValue
} from '../themes/types';

type Placement = $Keys<typeof PLACEMENT>;

export type TooltipProps = {
  children: React$Node,
  cursor?: string,
  content: string,
  defaultIsOpen?: boolean,
  disabled?: boolean,
  hasArrow?: boolean,
  id?: string,
  isOpen?: boolean,
  modifiers?: Object,
  onClose?: (event: SyntheticEvent<>) => void,
  onOpen?: (event: SyntheticEvent<>) => void,
  placement?: Placement,
  positionFixed?: boolean,
  subtitle?: any,
  title?: any,
  usePortal?: boolean
};

export type TooltipDefaultProps = {
  hasArrow: boolean,
  placement: Placement
};

export type TooltipState = {
  isOpen: boolean
};

export type TooltipPropGetter = (props?: Object) => Object;
export type TooltipRenderFn = (props?: TooltipRenderProps) => React$Node;
type TooltipRenderProps = {
  props: Object
};

export type TooltipThemeFn = ComponentThemeFn<TooltipTheme>;
export type TooltipTheme = ComponentTheme<TooltipThemeKeys>;
type TooltipThemeKeys = {|
  TooltipArrow_backgroundColor: ThemeValue,
  TooltipArrow_borderColor: ThemeValue,
  TooltipContent_backgroundColor: ThemeValue,
  TooltipContent_borderColor: ThemeValue,
  TooltipContent_borderRadius: ThemeValue,
  TooltipContent_boxShadow: ThemeValue,
  TooltipContent_color: ThemeValue,
  TooltipContent_maxWidth: ThemeValue,
  TooltipContent_paddingVertical: ThemeValue,
  TooltipContent_zIndex: ThemeValue,
  TooltipContentBlock_marginVertical: ThemeValue,
  TooltipContentBlock_paddingHorizontal: ThemeValue,
  TooltipTriggerText_borderStyle: ThemeValue,
  TooltipTriggerText_borderColor: ThemeValue,
  TooltipTriggerText_borderWidth: ThemeValue
|};
