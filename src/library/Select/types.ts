/* @flow */
import { PLACEMENT, SIZE, VARIANT } from './constants';

import { MenuItemType, MenuItems } from '../Menu/types';
import { ComponentTheme, ComponentThemeFn, ThemeValue } from '../themes/types';

type Placement = keyof typeof PLACEMENT;
type Size = keyof typeof SIZE;
type Variant = keyof typeof VARIANT;

export interface SelectProps {
  data: MenuItems;
  defaultHighlightedIndex?: number;
  defaultIsOpen?: boolean;
  defaultSelectedItem?: MenuItemType;
  disabled?: boolean;
  highlightedIndex?: number;
  id?: string;
  invalid?: boolean;
  isOpen?: boolean;
  item?: SelectRenderFn;
  itemKey?: string;
  menu?: SelectRenderFn;
  modifiers?: object;
  name?: string;
  onChange?: (item: MenuItemType, event: React.SyntheticEvent) => void;
  onClose?: (event: React.SyntheticEvent) => void;
  onOpen?: (event: React.SyntheticEvent) => void;
  onSelect?: (item: MenuItemType, event: React.SyntheticEvent) => void;
  placeholder?: string;
  placement?: Placement;
  positionFixed?: boolean;
  readOnly?: boolean;
  required?: boolean;
  selectedItem?: MenuItemType;
  size?: Size;
  trigger?: SelectRenderFn;
  triggerRef?: (node: HTMLElement | null | undefined) => void;
  usePortal?: boolean;
  variant?: Variant;
}

export interface SelectDefaultProps {
  itemKey: string;
  placeholder: string;
  placement: Placement;
  size: Size;
}

export interface SelectState {
  highlightedIndex: number | null | undefined;
  isOpen: boolean;
  selectedItem: MenuItemType | null | undefined;
}

interface SelectHelpers {
  close: (event: React.SyntheticEvent) => void;
  focusTrigger: () => void;
  open: (event: React.SyntheticEvent) => void;
}

export interface SelectStateAndHelpers {
  state: SelectState;
  helpers: SelectHelpers;
}

export type SelectPropGetter = (props?: object) => object;
export type SelectRenderFn = (props?: SelectRenderProps) => React.ReactNode;
type SelectRenderProps = {
  props: object;
} & SelectStateAndHelpers;

export interface SelectTriggerProps {
  disabled?: boolean;
  isOpen?: boolean;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  item?: MenuItemType;
  size?: Size;
  triggerRef?: (node: HTMLElement | null | undefined) => void;
  variant?: Variant;
}

export type SelectThemeFn = ComponentThemeFn<SelectTheme>;
export type SelectTheme = ComponentTheme<SelectThemeKeys>;
type SelectThemeKeys = {
  SelectContent_backgroundColor: ThemeValue;
  SelectContent_borderColor: ThemeValue;
  SelectContent_borderRadius: ThemeValue;
  SelectContent_boxShadow: ThemeValue;
  SelectContent_margin: ThemeValue;
  SelectContent_zIndex: ThemeValue;
} & SelectTriggerThemeKeys;

export type SelectTriggerThemeFn = ComponentThemeFn<SelectTriggerTheme>;
export type SelectTriggerTheme = ComponentTheme<SelectTriggerThemeKeys>;
interface SelectTriggerThemeKeys {
  Select_backgroundColor: ThemeValue;
  Select_borderColor: ThemeValue;
  Select_borderColor_active: ThemeValue;
  Select_borderColor_focus: ThemeValue;
  Select_borderColor_hover: ThemeValue;
  Select_borderRadius: ThemeValue;
  Select_borderWidth: ThemeValue;
  Select_boxShadow_active: ThemeValue;
  Select_boxShadow_focus: ThemeValue;
  Select_color: ThemeValue;
  Select_color_placeholder: ThemeValue;
  Select_color_readOnly: ThemeValue;
  Select_fontSize: ThemeValue;
  Select_fontSize_small: ThemeValue;
  Select_height_small: ThemeValue;
  Select_height_medium: ThemeValue;
  Select_height_large: ThemeValue;
  Select_height_jumbo: ThemeValue;
  Select_paddingHorizontal: ThemeValue;
  Select_paddingHorizontal_small: ThemeValue;
  SelectIcon_color: ThemeValue;
  SelectIcon_marginHorizontal: ThemeValue;
}
