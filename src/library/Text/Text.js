/* @flow */
import React, { Component } from 'react';
import ElementContext from './ElementContext';
import TextProvider from './TextProvider';
import { APPEARANCE } from './constants';

import { textPropTypes } from './propTypes';
import type { TextDefaultProps, TextProps } from './types';

export default class Text extends Component<TextProps> {
  static displayName = 'Text';

  static defaultProps: TextDefaultProps = {
    appearance: APPEARANCE.p
  };

  static propTypes = textPropTypes;

  render() {
    const { inherit, ...restProps } = this.props;

    return (
      <ElementContext.Consumer>
        {(parentAs) => {
          const rootProps = {
            inherit: inherit === false || !parentAs ? inherit : true,
            parentAs,
            ...restProps
          };
          return <TextProvider {...rootProps} />;
        }}
      </ElementContext.Consumer>
    );
  }
}
