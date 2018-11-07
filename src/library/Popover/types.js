/* @flow */
import { PLACEMENT } from './constants';

import type {
  ComponentTheme,
  ComponentThemeFn,
  ThemeObj,
  ThemeValue
} from '../themes/types';

type Placement = $Keys<typeof PLACEMENT>;

export type PopoverProps = {
  children: React$Node | PopoverRenderFn,
  content: $FlowFixMe | PopoverRenderFn, // TODO: Why not same as children?
  cursor?: string,
  defaultIsOpen?: boolean,
  disabled?: boolean,
  focusTriggerOnClose?: boolean,
  hasArrow?: boolean,
  id?: string,
  isOpen?: boolean,
  modifiers?: Object,
  onClose?: (event: SyntheticEvent<>) => void,
  onOpen?: (event: SyntheticEvent<>) => void,
  placement?: Placement,
  subtitle?: React$Node,
  title?: React$Node,
  triggerRef?: (node: ?React$Component<*, *>) => void,
  usePortal?: boolean
};

export type PopoverDefaultProps = {
  focusTriggerOnClose: boolean,
  hasArrow: boolean,
  placement: Placement
};

export type PopoverState = {
  isOpen: boolean
};

type PopoverHelpers = {
  close: (event: SyntheticEvent<>) => void,
  focusTrigger: () => void,
  open: (event: SyntheticEvent<>) => void
};

export type PopoverStateAndHelpers = {
  state: PopoverState,
  helpers: PopoverHelpers
};

export type PopoverPropGetter = (props?: Object) => Object;
export type PopoverRenderFn = (props?: PopoverRenderProps) => React$Node;
type PopoverRenderProps = {
  props: Object
} & PopoverStateAndHelpers;

export type PopoverArrowProps = {
  size: string,
  placement?: Placement
};

export type PopoverContentProps = {
  children: React$Node,
  modifiers?: Object,
  hasArrow?: boolean,
  placement?: Placement,
  subtitle?: React$Node,
  title?: React$Node
};

export type PopoverTriggerProps = {
  children: React$Node,
  cursor?: string
};

export type RtlPopperProps = {
  placement?: Placement,
  theme: ThemeObj
};

export type PopoverArrowThemeFn = ComponentThemeFn<PopoverArrowTheme>;
export type PopoverArrowTheme = ComponentTheme<PopoverArrowThemeKeys>;
type PopoverArrowThemeKeys = {|
  PopoverArrow_backgroundColor: ThemeValue,
  PopoverArrow_borderColor: ThemeValue
|};

export type PopoverContentThemeFn = ComponentThemeFn<PopoverContentTheme>;
export type PopoverContentTheme = ComponentTheme<PopoverContentThemeKeys>;
type PopoverContentThemeKeys = {|
  PopoverContent_backgroundColor: ThemeValue,
  PopoverContent_borderColor: ThemeValue,
  PopoverContent_borderRadius: ThemeValue,
  PopoverContent_boxShadow: ThemeValue,
  PopoverContent_color: ThemeValue,
  PopoverContent_paddingVertical: ThemeValue,
  PopoverContent_maxWidth: ThemeValue,
  PopoverContent_zIndex: ThemeValue,
  PopoverContentBlock_marginVertical: ThemeValue,
  PopoverContentBlock_paddingHorizontal: ThemeValue
|};

export type PopoverThemeFn = ComponentThemeFn<PopoverTheme>;
export type PopoverTheme = ComponentTheme<PopoverThemeKeys>;
type PopoverThemeKeys = PopoverArrowThemeKeys & PopoverContentThemeKeys;
