/* @flow */
import createReactContext, { type Context } from 'create-react-context';

type ModifiersContextType = Object | typeof undefined;

const ModifiersContext: Context<ModifiersContextType> = createReactContext();

export default ModifiersContext;
