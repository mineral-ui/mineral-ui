/* @flow */
import { PLACEMENT } from './constants';

import { ComponentTheme, ComponentThemeFn, ThemeValue } from '../themes/types';
import { MenuItems } from '../Menu/types';
import { PopoverProps } from '../Popover/types';
import { HTMLAttributes } from 'react';

type Placement = keyof typeof PLACEMENT;

export interface DropdownProps extends PopoverProps {
  children: React.ReactElement<any> | DropdownRenderFn;
  data: MenuItems;
  defaultHighlightedIndex?: number;
  highlightedIndex?: number;
  item?: DropdownRenderFn;
  itemKey?: string;
  menu?: DropdownRenderFn;
  placement?: Placement;
  wide?: boolean;
}

export interface DropdownDefaultProps {
  itemKey: string;
  placement: Placement;
}

export interface DropdownState {
  highlightedIndex: number | null | undefined;
  isOpen: boolean;
}

interface DropdownHelpers {
  close: (event: React.SyntheticEvent) => void;
  focusTrigger: () => void;
  open: (event: React.SyntheticEvent) => void;
}

export interface DropdownStateAndHelpers {
  state: DropdownState;
  helpers: DropdownHelpers;
}

export type DropdownPropGetter<T = {}> = (
  props?: (Partial<T> & HTMLAttributes<any>) | null | undefined
) => T;

export type DropdownRenderFn = (props?: DropdownRenderProps) => React.ReactNode;

type DropdownRenderProps = {
  props: object;
} & DropdownStateAndHelpers;

export interface DropdownContentProps {
  children: React.ReactNode;
  forwardedRef?: (node: HTMLElement | null | undefined) => void;
  id: string;
  modifiers?: object;
  placement?: Placement;
  positionFixed?: boolean;
  wide?: boolean;
}

export type DropdownThemeFn = ComponentThemeFn<DropdownTheme>;
export type DropdownTheme = ComponentTheme<DropdownThemeKeys>;
type DropdownThemeKeys = DropdownContentThemeKeys;

export type DropdownContentThemeFn = ComponentThemeFn<DropdownContentTheme>;
export type DropdownContentTheme = ComponentTheme<DropdownContentThemeKeys>;
interface DropdownContentThemeKeys {
  DropdownContent_backgroundColor: ThemeValue;
  DropdownContent_borderColor: ThemeValue;
  DropdownContent_borderRadius: ThemeValue;
  DropdownContent_boxShadow: ThemeValue;
  DropdownContent_margin: ThemeValue;
  DropdownContent_zIndex: ThemeValue;
}
