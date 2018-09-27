/* @flow */
import React from 'react';
import DocumentFontSizeContext from './DocumentFontSizeContext';

import type { Props as ThemeProviderProps } from './ThemeProvider';

type Props = {
  parentDocumentFontSize?: number | string
} & ThemeProviderProps;

export default function DocumentFontSizeProvider(props: Props) {
  const { children, parentDocumentFontSize, theme } = props;
  const providedDocumentFontSize =
    theme && theme.documentFontSize
      ? theme.documentFontSize
      : parentDocumentFontSize;

  return (
    <DocumentFontSizeContext.Provider value={providedDocumentFontSize}>
      {children}
    </DocumentFontSizeContext.Provider>
  );
}
