/* @flow */
import { createContext } from 'react';

import type { ElementContextType } from './types';

const ElementContext: React$Context<ElementContextType> = createContext();

export default ElementContext;
