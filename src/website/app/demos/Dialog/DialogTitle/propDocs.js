/* @flow */
// import { DialogTitle } from '../../../../../library/Dialog';
import {
  APPEARANCE,
  ELEMENT,
  VARIANT
} from '../../../../../library/Dialog/constants';
import joinQuoted from '../../../utils/joinQuoted';

import type { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

const propDocs: ComponentPropDocs = {
  appearance: {
    description: 'Available styles',
    type: {
      name: 'union',
      value: joinQuoted(Object.values(APPEARANCE))
    },
    // TODO: `defaultProps` here is undefined for some reason?
    // defaultValue: `'${DialogTitle.defaultProps.appearance}'`
    defaultValue: APPEARANCE.h4
  },
  children: {
    description: 'Rendered DialogTitle content',
    type: 'React$Node',
    required: true
  },
  element: {
    description:
      'Available HTML elements; styles can be overridden with `appearance`',
    type: {
      name: 'union',
      value: joinQuoted(Object.values(ELEMENT))
    },
    // TODO: `defaultProps` here is undefined for some reason?
    // defaultValue: `'${DialogTitle.defaultProps.element}'`
    defaultValue: ELEMENT.h1
  },
  id: {
    description: 'Id of the DialogTitle',
    type: 'string'
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
