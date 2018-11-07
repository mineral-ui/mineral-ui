/* @flow */
import createReactContext, { type Context } from 'create-react-context';

import type { ElementContextType } from './types';

const ElementContext: Context<ElementContextType> = createReactContext();

export default ElementContext;
