/* @flow */
import { PLACEMENT } from './constants';

import { PopperProps } from 'react-popper/lib/cjs/Popper';
import {
  ComponentTheme,
  ComponentThemeFn,
  ThemeObj,
  ThemeValue
} from '../themes/types';

type Placement = keyof typeof PLACEMENT;

export type PopoverProps = {
  children: React.ReactNode | PopoverRenderFn,
  content: $FlowFixMe | PopoverRenderFn, // TODO: Why not same as children?
  cursor?: string,
  defaultIsOpen?: boolean,
  disabled?: boolean,
  focusTriggerOnClose?: boolean,
  hasArrow?: boolean,
  id?: string,
  isOpen?: boolean,
  modifiers?: object,
  onClose?: (event: React.SyntheticEvent) => void,
  onOpen?: (event: React.SyntheticEvent) => void,
  placement?: Placement,
  positionFixed?: boolean,
  subtitle?: React.ReactNode,
  title?: React.ReactNode,
  triggerRef?: (node: HTMLElement | null | undefined) => void,
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
  close: (event: React.SyntheticEvent) => void,
  focusTrigger: () => void,
  open: (event: React.SyntheticEvent) => void
};

export type PopoverStateAndHelpers = {
  state: PopoverState,
  helpers: PopoverHelpers
};

export type PopoverRenderMethod = (props: object) => React.ReactNode;
export type PopoverPropGetter = (props?: object) => object;
export type PopoverRenderFn = (props?: PopoverRenderProps) => React.ReactNode;
type PopoverRenderProps = {
  props: object
} & PopoverStateAndHelpers;

export type PopoverArrowProps = {
  size: string,
  placement?: Placement
};

export type PopoverContentProps = {
  children: React.ReactNode,
  forwardedRef?: (node: HTMLElement | null | undefined) => void,
  modifiers?: object,
  hasArrow?: boolean,
  placement?: Placement,
  positionFixed?: boolean,
  subtitle?: React.ReactNode,
  title?: React.ReactNode
};

export type PopoverTriggerProps = {
  children: React.ReactNode,
  cursor?: string,
  forwardedRef: (node: HTMLElement | null | undefined) => void
};

export type RtlPopperProps = PopperProps & {
  placement?: Placement,
  theme: ThemeObj
};

export type PopoverArrowThemeFn = ComponentThemeFn<PopoverArrowTheme>;
export type PopoverArrowTheme = ComponentTheme<PopoverArrowThemeKeys>;
type PopoverArrowThemeKeys = {
  PopoverArrow_backgroundColor: ThemeValue,
  PopoverArrow_borderColor: ThemeValue
};

export type PopoverContentThemeFn = ComponentThemeFn<PopoverContentTheme>;
export type PopoverContentTheme = ComponentTheme<PopoverContentThemeKeys>;
type PopoverContentThemeKeys = {
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
};

export type PopoverThemeFn = ComponentThemeFn<PopoverTheme>;
export type PopoverTheme = ComponentTheme<PopoverThemeKeys>;
type PopoverThemeKeys = PopoverArrowThemeKeys & PopoverContentThemeKeys;
