/* @flow */
import { createContext } from 'react';

import type { ModifiersContextType } from './types';

const ModifiersContext: React$Context<ModifiersContextType> = createContext();

export default ModifiersContext;
