/* @flow */
import { PLACEMENT, SIZE, VARIANT } from './constants';

import type { MenuItemType, MenuItems, MenuItemGroups } from '../Menu/types';
import type {
  ComponentTheme,
  ComponentThemeFn,
  ThemeValue
} from '../themes/types';

type Placement = $Keys<typeof PLACEMENT>;
type Size = $Keys<typeof SIZE>;
type Variant = $Keys<typeof VARIANT>;

export type SelectProps = {
  data: MenuItems | MenuItemGroups,
  defaultHighlightedIndex?: number,
  defaultIsOpen?: boolean,
  defaultSelectedItem?: MenuItemType,
  disabled?: boolean,
  highlightedIndex?: number,
  id?: string,
  invalid?: boolean,
  isOpen?: boolean,
  item?: SelectRenderFn,
  itemKey?: string,
  menu?: SelectRenderFn,
  modifiers?: Object,
  name?: string,
  onChange?: (item: MenuItemType, event: SyntheticEvent<>) => void,
  onClose?: (event: SyntheticEvent<>) => void,
  onOpen?: (event: SyntheticEvent<>) => void,
  onSelect?: (item: MenuItemType, event: SyntheticEvent<>) => void,
  placeholder?: string,
  placement?: Placement,
  readOnly?: boolean,
  required?: boolean,
  selectedItem?: MenuItemType,
  size?: Size,
  trigger?: SelectRenderFn,
  triggerRef?: (node: ?React$Component<*, *>) => void,
  usePortal?: boolean,
  variant?: Variant
};

export type SelectDefaultProps = {
  itemKey: string,
  placeholder: string,
  placement: Placement,
  size: Size
};

export type SelectState = {
  highlightedIndex: ?number,
  isOpen: boolean,
  selectedItem: ?MenuItemType
};

type SelectHelpers = {
  close: (event: SyntheticEvent<>) => void,
  focusTrigger: () => void,
  open: (event: SyntheticEvent<>) => void
};

export type SelectStateAndHelpers = {
  state: SelectState,
  helpers: SelectHelpers
};

export type SelectPropGetter = (props?: Object) => Object;
export type SelectRenderFn = (props?: SelectRenderProps) => React$Node;
type SelectRenderProps = {
  props: Object
} & SelectStateAndHelpers;

export type SelectTriggerProps = {
  disabled?: boolean,
  isOpen?: boolean,
  name?: string,
  placeholder?: string,
  readOnly?: boolean,
  required?: boolean,
  item?: MenuItemType,
  size?: Size,
  triggerRef?: () => void,
  variant?: Variant
};

export type SelectThemeFn = ComponentThemeFn<SelectTheme>;
export type SelectTheme = ComponentTheme<SelectThemeKeys>;
type SelectThemeKeys = {|
  SelectContent_backgroundColor: ThemeValue,
  SelectContent_borderColor: ThemeValue,
  SelectContent_borderRadius: ThemeValue,
  SelectContent_boxShadow: ThemeValue,
  SelectContent_margin: ThemeValue,
  SelectContent_zIndex: ThemeValue
|} & SelectTriggerThemeKeys;

export type SelectTriggerThemeFn = ComponentThemeFn<SelectTriggerTheme>;
export type SelectTriggerTheme = ComponentTheme<SelectTriggerThemeKeys>;
type SelectTriggerThemeKeys = {|
  Select_backgroundColor: ThemeValue,
  Select_borderColor: ThemeValue,
  Select_borderColor_active: ThemeValue,
  Select_borderColor_focus: ThemeValue,
  Select_borderColor_hover: ThemeValue,
  Select_borderRadius: ThemeValue,
  Select_borderWidth: ThemeValue,
  Select_boxShadow_active: ThemeValue,
  Select_boxShadow_focus: ThemeValue,
  Select_color: ThemeValue,
  Select_color_placeholder: ThemeValue,
  Select_color_readOnly: ThemeValue,
  Select_fontSize: ThemeValue,
  Select_fontSize_small: ThemeValue,
  Select_height_small: ThemeValue,
  Select_height_medium: ThemeValue,
  Select_height_large: ThemeValue,
  Select_height_jumbo: ThemeValue,
  Select_paddingHorizontal: ThemeValue,
  Select_paddingHorizontal_small: ThemeValue,
  SelectIcon_color: ThemeValue,
  SelectIcon_marginHorizontal: ThemeValue
|};
