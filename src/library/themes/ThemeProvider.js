/* @flow */
import React, { Children } from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { canUseDOM } from 'exenv';
import { getDocumentFontSize, rtlAlign } from '../utils';
import EventListener from '../EventListener';
import mineralTheme from './mineralTheme';
import DocumentFontSizeContext from './DocumentFontSizeContext';
import DocumentFontSizeProvider from './DocumentFontSizeProvider';

export type Props = {
  /** Components to which the theme will be applied */
  children?: React$Node,
  /**
   * A shallow object of [theme variables](/theming#common-scenarios-theme-structure)
   * and their values or a function that provides such an object.
   */
  theme?: Object | ((baseTheme?: Object) => Object)
};
type Theme = Object | ((baseTheme?: Object) => Object);

let domLoaded = false;

const documentFontSizeCheck = (documentFontSize) => {
  if (canUseDOM) {
    const actual = parseFloat(
      window.getComputedStyle(document.documentElement).fontSize
    );
    const provided = documentFontSize
      ? getDocumentFontSize(documentFontSize)
      : 'undefined';
    if (!((actual === 16 && !documentFontSize) || actual === provided)) {
      const received =
        typeof documentFontSize === 'string'
          ? `'${documentFontSize}'`
          : documentFontSize === undefined
            ? typeof documentFontSize
            : documentFontSize;
      // prettier-ignore
      throw new Error(
        `[mineral-ui/ThemeProvider]: Expected \`theme\` to contain a \`documentFontSize\` equivalent to the document root's fontSize, '${actual}px' or '${(actual / 16) * 100}%'. Instead got: ${received}`
      );
    }
  }
};

const handleDOMContentLoaded = () => {
  domLoaded = true;
};

const Fragment = ({ children }) => children;

const manipulateTheme = (
  baseTheme?: Object = {},
  theme?: Theme = {},
  parentDocumentFontSize?: number | string
) => {
  let outTheme = typeof theme === 'function' ? theme(baseTheme) : theme;

  if (domLoaded && theme) {
    const { documentFontSize } = outTheme;
    documentFontSizeCheck(
      documentFontSize !== undefined ? documentFontSize : parentDocumentFontSize
    );
  }

  return {
    ...baseTheme,
    ...outTheme
  };
};

/**
 * ThemeProvider provides a theme to the tree of components contained within.
 * See the [theming page](/theming) for more information.
 */
const ThemeProvider = (props: Props) => (
  <DocumentFontSizeContext.Consumer>
    {(parentDocumentFontSize) => {
      const { children, theme } = props;

      const providerProps = {
        parentDocumentFontSize,
        theme
      };

      return (
        <Fragment>
          <DocumentFontSizeProvider {...providerProps}>
            <EmotionThemeProvider
              theme={(baseTheme) =>
                manipulateTheme(baseTheme, theme, parentDocumentFontSize)
              }>
              {Children.only(children)}
            </EmotionThemeProvider>
          </DocumentFontSizeProvider>
          <EventListener
            listeners={[
              {
                target: 'document',
                event: 'DOMContentLoaded',
                handler: handleDOMContentLoaded
              }
            ]}
          />
        </Fragment>
      );
    }}
  </DocumentFontSizeContext.Consumer>
);

ThemeProvider.defaultProps = {
  theme: mineralTheme
};

export default ThemeProvider;
