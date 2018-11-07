/* @flow */
import { FormField } from '../../../../../library/Form';
import { VARIANT } from '../../../../../library/Form/constants';
import joinQuoted from '../../../utils/joinQuoted';

import type { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

const getDefaultTextValue = (prop) => {
  const value = FormField.defaultProps[prop];
  if (typeof value === 'string') {
    return `'${value}'`;
  }
};

const propDocs: ComponentPropDocs = {
  caption: {
    description:
      'Caption associated with the input element; commonly used to provide help text',
    type: {
      name: 'union',
      value: 'string | React$Element<*>'
    }
  },
  children: {
    description: 'Form input element',
    type: 'React$Node'
  },
  hideLabel: {
    description:
      'Visually hide label, but keep available for [assistive technologies](https://webaccess.berkeley.edu/resources/assistive-technology)',
    type: 'boolean'
  },
  id: {
    description: 'Id of the FormField',
    type: 'string'
  },
  input: {
    description: 'Form input class; alternative to `children`',
    type: 'React$ComponentType<*>'
  },
  rootProps: {
    description:
      'Props to be applied directly to the root element, rather than the input',
    type: 'Object'
  },
  label: {
    description: 'Label associated with the input element',
    type: {
      name: 'union',
      value: 'string | React$Element<*>'
    },
    required: true
  },
  required: {
    description: 'Marks associated input as required',
    type: 'boolean'
  },
  requiredText: {
    description: 'Text used to indicate a required field',
    type: {
      name: 'union',
      value: 'string | React$Element<*>'
    },
    defaultValue: getDefaultTextValue('requiredText')
  },
  secondaryText: {
    description:
      'Secondary text associated with the input element; takes precedence over `requiredText`',
    type: {
      name: 'union',
      value: 'string | React$Element<*>'
    }
  },
  variant: {
    description: 'Available variants',
    type: joinQuoted(Object.values(VARIANT))
  }
};

export default propDocs;
