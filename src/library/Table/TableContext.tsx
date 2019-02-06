/* @flow */
import { createContext } from 'react';

import { TableContextType } from './types';

const TableContext: React$Context<TableContextType> = createContext({});

export default TableContext;
