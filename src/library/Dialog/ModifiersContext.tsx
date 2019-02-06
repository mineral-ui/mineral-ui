/* @flow */
import { createContext } from 'react';

import { ModifiersContextType } from './types';

const ModifiersContext = createContext<ModifiersContextType>(undefined);

export default ModifiersContext;
