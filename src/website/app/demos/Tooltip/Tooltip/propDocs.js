/* @flow */
import Tooltip from '../../../../../library/Tooltip';
import { PLACEMENT } from '../../../../../library/Tooltip/constants';
import joinQuoted from '../../../utils/joinQuoted';

import type { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

const propDocs: ComponentPropDocs = {
  children: {
    description: 'Trigger for the Tooltip',
    type: 'React$Node',
    required: true
  },
  cursor: {
    description:
      'Cursor applied when hovering the tooltip trigger; accepts any [valid CSS value](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)',
    type: 'string'
  },
  content: {
    description: 'Content of the Tooltip',
    type: 'string',
    required: true
  },
  defaultIsOpen: {
    description:
      'Open the Tooltip upon initialization. Primarily for use with uncontrolled components.',
    type: 'boolean'
  },
  disabled: {
    description: 'Disables the Tooltip',
    type: 'boolean'
  },
  hasArrow: {
    description:
      'Include an arrow on the Tooltip content pointing to the trigger',
    type: 'boolean',
    defaultValue: Tooltip.defaultProps.hasArrow.toString()
  },
  id: {
    description: 'Id of the Tooltip',
    type: 'string'
  },
  isOpen: {
    description:
      'Determines whether the Tooltip is open. For use with controlled components.',
    type: 'boolean'
  },
  modifiers: {
    description:
      'Plugins that are used to alter behavior. See [PopperJS docs](https://popper.js.org/popper-documentation.html#modifiers) for options.',
    type: 'Object'
  },
  onClose: {
    description: 'Called when Tooltip is closed',
    type: {
      name: 'function',
      value: '(event: SyntheticEvent<>) => void'
    }
  },
  onOpen: {
    description: 'Called when Tooltip is opened',
    type: {
      name: 'function',
      value: '(event: SyntheticEvent<>) => void'
    }
  },
  placement: {
    description: 'Placement of the Tooltip',
    type: {
      name: 'union',
      value: joinQuoted(Object.values(PLACEMENT))
    },
    defaultValue: `'${Tooltip.defaultProps.placement}'`
  },
  positionFixed: {
    description: 'Apply fixed positioning to the content',
    type: 'boolean'
  },
  usePortal: {
    description:
      'Use a Portal to render the Tooltip to the body rather than as a sibling to the trigger.',
    type: 'boolean'
  }
};

export default propDocs;
