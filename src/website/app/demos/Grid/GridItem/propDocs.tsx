/* @flow */
import { ComponentPropDocs } from '../../../pages/ComponentDoc/types';
import { thingOrThingArray } from '../../../utils/propDocs';

const propDocs: ComponentPropDocs = {
  span: {
    description:
      'Number of columns spanned [[Responsive-capable]](#responsive)',
    type: thingOrThingArray('number')
  }
};

export default propDocs;
