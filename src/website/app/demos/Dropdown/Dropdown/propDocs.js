/* @flow */
import Dropdown from '../../../../../library/Dropdown';
import { PLACEMENT } from '../../../../../library/Dropdown/constants';
import joinQuoted from '../../../utils/joinQuoted';

import type { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

const propDocs: ComponentPropDocs = {
  children: {
    description:
      'Trigger for the Dropdown. Optionally provides custom rendering control. See the [custom trigger example](/components/dropdown#custom-trigger) and our [render props guide](/render-props).',
    type: {
      name: 'union',
      value: 'React$Node | RenderFn'
    },
    required: true
  },
  data: {
    description:
      'Data from which the [Menu](/components/menu#data) will be constructed (see [example](#data))',
    type: {
      name: 'union',
      value: 'Items | ItemGroups'
    },
    required: true
  },
  defaultHighlightedIndex: {
    description:
      'Index of item to be highlighted upon initialization. Primarily for use with uncontrolled components.',
    type: 'number'
  },
  defaultIsOpen: {
    description:
      'Open the Dropdown upon initialization. Primarily for use with uncontrolled components.',
    type: 'boolean'
  },
  disabled: {
    description: 'Disable the Dropdown',
    type: 'boolean'
  },
  highlightedIndex: {
    description:
      'Index of the highlighted item. For use with controlled components.',
    type: 'number'
  },
  id: {
    description: 'Id of the Dropdown',
    type: 'string'
  },
  isOpen: {
    description:
      'Determines whether the Dropdown is open. For use with controlled components.',
    type: 'boolean'
  },
  item: {
    description:
      'Provides custom rendering control for the items. See the [custom item example](/components/dropdown#custom-item) and our [render props guide](/render-props).',
    type: {
      name: 'function',
      value: '(props?: RenderProps) => React$Node'
    }
  },
  itemKey: {
    description:
      'Specifies a key in the item data that gives an item its unique identity. See the [React docs](https://reactjs.org/docs/lists-and-keys.html#keys).',
    type: 'string',
    defaultValue: `'${Dropdown.defaultProps.itemKey}'`
  },
  menu: {
    description:
      'Provides custom rendering control for the menu. See the [custom menu example](/components/dropdown#custom-menu) and our [render props guide](/render-props).',
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
  onClose: {
    description: 'Called when Dropdown is closed',
    type: {
      name: 'function',
      value: '(event: SyntheticEvent<>) => void'
    }
  },
  onOpen: {
    description: 'Called when Dropdown is opened',
    type: {
      name: 'function',
      value: '(event: SyntheticEvent<>) => void'
    }
  },
  placement: {
    description: 'Placement of the Dropdown menu',
    type: {
      name: 'union',
      value: joinQuoted(Object.values(PLACEMENT))
    },
    defaultValue: `'${Dropdown.defaultProps.placement}'`
  },
  usePortal: {
    description:
      'Use a Portal to render the Dropdown menu to the body rather than as a sibling to the trigger',
    type: 'boolean'
  },
  wide: {
    description: 'Display a wider Dropdown menu',
    type: 'boolean'
  }
};

export default propDocs;
