/* @flow */
import Avatar from '../../../../../library/Avatar';
import { SHAPE, SIZE } from '../../../../../library/Avatar/constants';
import joinQuoted from '../../../utils/joinQuoted';

import type { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

const propDocs: ComponentPropDocs = {
  abbr: {
    description: 'When `children` is a string, this will be the rendered text',
    type: 'string'
  },
  background: {
    description: 'Background color',
    type: 'string'
  },
  children: {
    description:
      '`img` (with an `alt` attribute), [Icon](/components/icon) (with a `title`), or a string',
    type: 'React$Node',
    required: true
  },
  color: {
    description: 'Text color',
    type: 'string'
  },
  shape: {
    description: 'Available shapes',
    type: {
      name: 'union',
      value: joinQuoted(Object.values(SHAPE))
    },
    defaultValue: `'${Avatar.defaultProps.shape}'`
  },
  size: {
    description: 'Available sizes',
    type: {
      name: 'union',
      value: joinQuoted(Object.values(SIZE))
    },
    defaultValue: `'${Avatar.defaultProps.size}'`
  }
};

export default propDocs;
