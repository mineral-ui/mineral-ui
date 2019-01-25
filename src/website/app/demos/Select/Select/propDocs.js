/* @flow */
import Select from '../../../../../library/Select';
import {
  PLACEMENT,
  SIZE,
  VARIANT
} from '../../../../../library/Select/constants';
import joinQuoted from '../../../utils/joinQuoted';

import type { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

const propDocs: ComponentPropDocs = {
  data: {
    description:
      'Data from which the [Menu](/components/menu#data) will be constructed (see [example](#data))',
    type: 'MenuItems',
    required: true
  },
  defaultHighlightedIndex: {
    description:
      'Index of item to be highlighted upon initialization. Primarily for use with uncontrolled components.',
    type: 'number'
  },
  defaultIsOpen: {
    description:
      'Open the Select upon initialization. Primarily for use with uncontrolled components.',
    type: 'boolean'
  },
  defaultSelectedItem: {
    description:
      'Item selected upon initialization. Primarily for use with uncontrolled components.',
    type: 'MenuItem'
  },
  disabled: {
    description: 'Disables the control',
    type: 'boolean'
  },
  highlightedIndex: {
    description:
      'Index of the highlighted item. For use with controlled components.',
    type: 'number'
  },
  id: {
    description: 'Id of the Select',
    type: 'string'
  },
  invalid: {
    description: 'Indicates that the value of the element is invalid',
    type: 'boolean'
  },
  isOpen: {
    description:
      'Determines whether the Select is open. For use with controlled components.',
    type: 'boolean'
  },
  item: {
    description:
      'Provides custom rendering control for the items. See the [custom item example](/components/select#custom-item) and our [render props guide](/render-props).',
    type: {
      name: 'function',
      value: '(props?: RenderProps) => React$Node'
    }
  },
  itemKey: {
    description:
      'Specifies a key in the item data that gives an item its unique identity. See the [React docs](https://reactjs.org/docs/lists-and-keys.html#keys).',
    type: 'string',
    defaultValue: `'${Select.defaultProps.itemKey}'`
  },
  menu: {
    description:
      'Provides custom rendering control for the menu. See the [custom menu example](/components/select#custom-menu) and our [render props guide](/render-props).',
    type: {
      name: 'function',
      value: '(props?: RenderProps) => React$Node'
    }
  },
  modifiers: {
    description:
      'Plugins that are used to alter behavior. See [PopperJS docs](https://popper.js.org/popper-documentation.html#modifiers) for options.',
    type: 'Object'
  },
  name: {
    description: 'Name of the field when submitted in a form',
    type: 'string'
  },
  onChange: {
    description:
      'Called when an item is selected and it is different than the previously selected item.',
    type: {
      name: 'function',
      value: '(item: MenuItem, event: SyntheticEvent<>) => void'
    }
  },
  onClose: {
    description: 'Called when Select is closed',
    type: {
      name: 'function',
      value: '(event: SyntheticEvent<>) => void'
    }
  },
  onOpen: {
    description: 'Called when Select is opened',
    type: {
      name: 'function',
      value: '(event: SyntheticEvent<>) => void'
    }
  },
  onSelect: {
    description: 'Called when an item is selected',
    type: {
      name: 'function',
      value: '(item: MenuItem, event: SyntheticEvent<>) => void'
    }
  },
  placeholder: {
    description: 'Text displayed when there is no item selected',
    type: 'string',
    defaultValue: `'${Select.defaultProps.placeholder}'`
  },
  placement: {
    description: 'Placement of the Select menu',
    type: {
      name: 'union',
      value: joinQuoted(Object.values(PLACEMENT))
    },
    defaultValue: `'${Select.defaultProps.placement}'`
  },
  positionFixed: {
    description: 'Apply fixed positioning to the menu',
    type: 'boolean'
  },
  readOnly: {
    description:
      'Indicates that the user cannot modify the value of the control',
    type: 'boolean'
  },
  required: {
    description:
      'Indicates that the user must select a value before submitting a form',
    type: 'boolean'
  },
  selectedItem: {
    description: 'The selected item. For use with controlled components.',
    type: 'MenuItem'
  },
  size: {
    description: '',
    type: {
      name: 'union',
      value: joinQuoted(Object.values(SIZE))
    },
    defaultValue: `'${Select.defaultProps.size}'`
  },
  trigger: {
    description:
      'Provides custom rendering control for the trigger. See the [custom trigger example](/components/select#custom-trigger) and our [render props guide](/render-props).',
    type: {
      name: 'function',
      value: '(props?: RenderProps) => React$Node'
    }
  },
  triggerRef: {
    description: 'Ref for the trigger',
    type: {
      name: 'function',
      value: '(node: ?React$Component<*, *>) => void'
    }
  },
  usePortal: {
    description:
      'Use a Portal to render the Select menu to the body rather than as a sibling to the trigger',
    type: 'boolean'
  },
  variant: {
    description: 'Available variants',
    type: {
      name: 'union',
      value: joinQuoted(Object.values(VARIANT))
    }
  }
};

export default propDocs;
