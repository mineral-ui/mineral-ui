/* @flow */
import type { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

const propDocs: ComponentPropDocs = {
  children: {
    description: 'Content of the tab panel',
    type: 'React$Node'
  },
  disabled: {
    description: 'Disables Tab',
    type: 'boolean'
  },
  icon: {
    description: 'Icon placed before the title',
    type: 'React$Element<*>'
  },
  id: {
    description: 'Id of Tab',
    type: 'string'
  },
  maxWidth: {
    description: 'Maximum width of Tab',
    type: 'number | string'
  },
  title: {
    description: 'Tab title',
    type: 'React$Node',
    required: true
  }
};

export default propDocs;
