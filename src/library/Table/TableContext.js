/* @flow */
import createReactContext, { type Context } from 'create-react-context';

import type { TableContextType } from './types';

const TableContext: Context<TableContextType> = createReactContext({});

export default TableContext;
