/* @flow */
import { createContext } from 'react';

import { ModifiersContextType } from './types';

const ModifiersContext: React$Context<ModifiersContextType> = createContext();

export default ModifiersContext;
