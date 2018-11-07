/* @flow */
import Icon from '../../../../../library/Icon';
import { SIZE } from '../../../../../library/Icon/constants';
import joinQuoted from '../../../utils/joinQuoted';

import type { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

const propDocs: ComponentPropDocs = {
  //   /** Available sizes, including custom - e.g. '5em' or '20px' */
  //   size?: 'small' | 'medium' | 'large' | string,

  children: {
    description: 'SVG content, required for the generic Icon component',
    type: 'React$Node'
  },
  color: {
    description: 'Fill color',
    type: 'string'
  },
  rtl: {
    description: 'Flip the Icon horizontally when used with RTL languages',
    type: 'boolean'
  },
  size: {
    description: `Available sizes, including custom - e.g. '5em' or '20px'`,
    type: `${joinQuoted(Object.values(SIZE))} | string`,
    defaultValue: `'${Icon.defaultProps.size}'`
  },
  title: {
    description: 'Alternative text',
    type: 'string'
  }
};

export default propDocs;
