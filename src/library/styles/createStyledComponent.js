/* @flow */

import styled from 'react-emotion';
import withPropsFn from 'recompose/withProps';
import componentStyleReset from './componentStyleReset';
import isValidProp from '../utils/isValidProp';

import type { CreateStyledComponent, StyleFn } from './types';

const createStyledComponent: CreateStyledComponent = (
  element,
  styles,
  options = {}
) => {
  const {
    displayName,
    filterProps = [],
    forwardProps = [],
    includeStyleReset,
    rootEl,
    withProps
  } = options;
  const outStyles: StyleFn = (props, context) => {
    let componentStyles =
      typeof styles === 'function' ? styles(props, context) : styles;

    if (includeStyleReset) {
      const resetStyles = componentStyleReset(props);
      if (Array.isArray(componentStyles)) {
        componentStyles.unshift(resetStyles);
      } else {
        componentStyles = {
          ...resetStyles,
          ...componentStyles
        };
      }
    }

    return componentStyles;
  };

  if (displayName && typeof element !== 'string') {
    element.displayName = displayName;
  }

  const styledComponent = styled(element, {
    ...(process.env.NODE_ENV !== 'production' && displayName
      ? { label: displayName }
      : undefined),
    shouldForwardProp: (prop) => {
      /*
       * These props are filtered in Emotion's default implementation of
       * shouldForwardProp, which this overrides.
       */
      const filteredProps = ['innerRef', 'theme'].concat(filterProps);
      const isFiltered = filteredProps.indexOf(prop) !== -1;
      const isForwarded = forwardProps.indexOf(prop) !== -1;
      const tag = typeof element === 'string' ? element : rootEl;

      return !isFiltered && (isForwarded || isValidProp(tag, prop));
    }
  })(outStyles);

  return withProps ? withPropsFn(withProps)(styledComponent) : styledComponent;
};

export default createStyledComponent;
