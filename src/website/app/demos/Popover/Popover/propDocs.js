/* @flow */
import Popover from '../../../../../library/Popover';
import { PLACEMENT } from '../../../../../library/Popover/constants';
import joinQuoted from '../../../utils/joinQuoted';

import type { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

const propDocs: ComponentPropDocs = {
  children: {
    description:
      'Trigger for the Popover. Optionally provides custom rendering control. See the [custom trigger example](/components/popover#custom-trigger) and our [render props guide](/render-props).',
    type: {
      name: 'union',
      value: 'React$Node | RenderFn'
    },
    required: true
  },
  content: {
    description:
      'Content of the Popover. Optionally provides custom rendering control. See the [custom content example](/components/popover#custom-content) and our [render props guide](/render-props).',
    type: 'React$Node | RenderFn',
    required: true
  },
  defaultIsOpen: {
    description:
      'Open the Popover upon initialization. Primarily for use with uncontrolled components.',
    type: 'boolean'
  },
  disabled: {
    description: 'Disables the Popover',
    type: 'boolean'
  },
  focusTriggerOnClose: {
    description:
      'Determines whether focus will be set to the trigger when the Popover is closed.',
    type: 'boolean',
    defaultValue: Popover.defaultProps.focusTriggerOnClose.toString()
  },
  hasArrow: {
    description:
      'Include an arrow on the Popover content pointing to the trigger',
    type: 'boolean',
    defaultValue: Popover.defaultProps.hasArrow.toString()
  },
  id: {
    description: 'Id of the Popover',
    type: 'string'
  },
  isOpen: {
    description:
      'Determines whether the Popover is open. For use with controlled components.',
    type: 'boolean'
  },
  modifiers: {
    description:
      'Plugins that are used to alter behavior. See [PopperJS docs](https://popper.js.org/popper-documentation.html#modifiers) for options.',
    type: 'Object'
  },
  onClose: {
    description: 'Called when Popover is closed',
    type: {
      name: 'function',
      value: '(event: SyntheticEvent<>) => void'
    }
  },
  onOpen: {
    description: 'Called when Popover is opened',
    type: {
      name: 'function',
      value: '(event: SyntheticEvent<>) => void'
    }
  },
  placement: {
    description: 'Placement of the Popover',
    type: {
      name: 'union',
      value: joinQuoted(Object.values(PLACEMENT))
    },
    defaultValue: `'${Popover.defaultProps.placement}'`
  },
  subtitle: {
    description: 'Subtitle displayed under the title',
    type: 'React$Node'
  },
  title: {
    description: 'Title of the Popover',
    type: 'React$Node'
  },
  usePortal: {
    description:
      'Use a Portal to render the Popover to the body rather than as a sibling to the trigger',
    type: 'boolean'
  }
};

export default propDocs;
