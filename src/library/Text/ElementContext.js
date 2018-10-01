/* @flow */
import createReactContext, { type Context } from 'create-react-context';

type ElementContextType = string | void;

const ElementContext: Context<ElementContextType> = createReactContext();

export default ElementContext;
