/* @flow */
import React, { Component } from 'react';
import ElementContext from './ElementContext';
import TextProvider from './TextProvider';
import { APPEARANCE } from './constants';

import { textPropTypes } from './propTypes';
import type { TextDefaultProps, TextProps } from './types';

export default class Text extends Component<TextProps> {
  static defaultProps: TextDefaultProps = {
    appearance: APPEARANCE.p,
    element: 'p'
  };

  static propTypes = textPropTypes;

  render() {
    const { inherit, ...restProps } = this.props;

    return (
      <ElementContext.Consumer>
        {(parentElement) => {
          const rootProps = {
            inherit: inherit === false || !parentElement ? inherit : true,
            parentElement,
            ...restProps
          };
          return <TextProvider {...rootProps} />;
        }}
      </ElementContext.Consumer>
    );
  }
}
