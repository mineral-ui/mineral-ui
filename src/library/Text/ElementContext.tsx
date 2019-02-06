/* @flow */
import { createContext } from 'react';

import { ElementContextType } from './types';

const ElementContext = createContext<ElementContextType>(null);

export default ElementContext;
