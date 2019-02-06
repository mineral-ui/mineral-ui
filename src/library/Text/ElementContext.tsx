/* @flow */
import { createContext } from 'react';

import { ElementContextType } from './types';

const ElementContext: React$Context<ElementContextType> = createContext();

export default ElementContext;
