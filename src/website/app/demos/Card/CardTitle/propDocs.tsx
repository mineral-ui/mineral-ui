/* @flow */
import { VARIANT } from '../../../../../library/Card/constants';
import joinQuoted from '../../../utils/joinQuoted';

import type { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

const propDocs: ComponentPropDocs = {
  actions: {
    description:
      'See the [Actions Menu](#actions-menu) example (will take precedence over `secondaryText`)',
    type: 'React$Node'
  },
  avatar: {
    description: 'Avatar image displayed beside the title',
    type: 'string | React$Element<*>'
  },
  children: {
    description: 'Title of Card',
    type: 'React$Node',
    required: true
  },
  secondaryText: {
    description:
      'Information displayed beside the title (`actions` will take precedence over this)',
    type: 'string | React$Element<*>'
  },
  subtitle: {
    description: 'Subtitle displayed under the title',
    type: 'React$Node'
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
