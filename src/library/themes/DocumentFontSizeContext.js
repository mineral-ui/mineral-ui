/* @flow */
import createReactContext, { type Context } from 'create-react-context';

type DocumentFontSizeContextType = number | string | void;

const DocumentFontSizeContext: Context<
  DocumentFontSizeContextType
> = createReactContext();

export default DocumentFontSizeContext;
