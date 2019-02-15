/* @flow */
import Dialog from '../../../../../library/Dialog';
import {
  ACTIONS_SIZE,
  SIZE,
  VARIANT
} from '../../../../../library/Dialog/constants';
import { joinQuoted } from '../../../utils/propDocs';

import { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

const getDefaultBooleanValue = (prop) =>
  Dialog.defaultProps[prop] ? 'true' : 'false';

const propDocs: ComponentPropDocs = {
  actions: {
    description:
      'Configuration for the [Buttons](/components/button) rendered at the bottom of Dialog; accepts all Button props',
    type: {
      name: 'array',
      value: `Array<{
  text: string,
  size?: ${joinQuoted(Object.values(ACTIONS_SIZE))}
}>`
    }
  },
  appSelector: {
    description:
      'CSS selector matching the node(s) which will be accessibly hidden (unless `modeless`)',
    type: 'string'
  },
  children: {
    description:
      'Content of Dialog (see the [Basic](#basic) and [Alternate Syntax](#alternate) examples)',
    type: 'React$Node'
  },
  closeButtonLabel: {
    description: 'Accessible label for the close button',
    type: 'string',
    defaultValue: `'${Dialog.defaultProps.closeButtonLabel}'`
  },
  closeOnClickOutside: {
    description: 'Close Dialog by clicking outside of its content',
    type: 'boolean',
    defaultValue: getDefaultBooleanValue('closeOnClickOutside')
  },
  closeOnEscape: {
    description: "Close Dialog with the 'Escape' key",
    type: 'boolean',
    defaultValue: getDefaultBooleanValue('closeOnEscape')
  },
  disableFocusOnOpen: {
    description: 'Disable focus being placed on Dialog upon opening',
    type: 'boolean'
  },
  disableFocusTrap: {
    description: 'Disable focus being trapped within the Dialog when open',
    type: 'boolean'
  },
  hideOverlay: {
    description: 'Hide the overlay underneath Dialog',
    type: 'boolean'
  },
  id: {
    description: 'Id of the Dialog',
    type: 'string'
  },
  isOpen: {
    description: 'Dialog only renders its content when true',
    type: 'boolean'
  },
  modeless: {
    description:
      'Renders Dialog without modal behavior ([see example](#modeless))',
    type: 'boolean'
  },
  onClose: {
    description: 'Called when Dialog is closed',
    type: {
      name: 'function',
      value: '() => void'
    }
  },
  onOpen: {
    description: 'Called when Dialog is opened',
    type: {
      name: 'function',
      value: '() => void'
    }
  },
  showCloseButton: {
    description: 'Render a close button for Dialog',
    type: 'boolean'
  },
  size: {
    description: 'Available sizes',
    type: {
      name: 'union',
      value: joinQuoted(Object.values(SIZE))
    },
    defaultValue: `'${Dialog.defaultProps.size}'`
  },
  title: {
    description:
      'Title of the dialog; must be a string or [DialogTitle](/components/dialog-title)',
    type: {
      name: 'union',
      value: 'string | React$Element<*>'
    }
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
