/* @flow */
import createReactContext, { type Context } from 'create-react-context';

import type { ModifiersContextType } from './types';

const ModifiersContext: Context<ModifiersContextType> = createReactContext();

export default ModifiersContext;
