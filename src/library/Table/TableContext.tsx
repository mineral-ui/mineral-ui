/* @flow */
import { createContext } from 'react';

import { TableContextType } from './types';

const TableContext = createContext<TableContextType>({});

export default TableContext;
