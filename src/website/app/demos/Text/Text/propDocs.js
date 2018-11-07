/* @flow */
import Text from '../../../../../library/Text';
import {
  ALIGN,
  APPEARANCE,
  FONT_WEIGHT
} from '../../../../../library/Text/constants';
import joinQuoted from '../../../utils/joinQuoted';

import type { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

const propDocs: ComponentPropDocs = {
  align: {
    description: 'Available horizontal alignments',
    type: {
      name: 'union',
      value: joinQuoted(Object.values(ALIGN))
    }
  },
  appearance: {
    description: 'Available styles',
    type: {
      name: 'union',
      value: joinQuoted(Object.values(APPEARANCE))
    },
    defaultValue: `'${Text.defaultProps.appearance}'`
  },
  children: {
    description: 'Rendered content',
    type: 'React$Node',
    required: true
  },
  color: {
    description: 'Color of text',
    type: 'string'
  },
  element: {
    description: "The rendered HTML element, e.g. `'span'`, `'strong'`",
    type: 'string',
    defaultValue: `'${Text.defaultProps.element}'`
  },
  fontWeight: {
    description: 'Available font weights',
    type: {
      name: 'union',
      value: `${joinQuoted(Object.values(FONT_WEIGHT))} | number`
    }
  },
  inherit: {
    description: 'Inherit all styles from parent',
    type: 'boolean'
  },
  noMargins: {
    description: 'Remove top & bottom margins',
    type: 'boolean'
  },
  truncate: {
    description:
      'Force display to one line and truncate with ellipsis at given max-width',
    type: 'boolean | number | string'
  }
};

export default propDocs;
