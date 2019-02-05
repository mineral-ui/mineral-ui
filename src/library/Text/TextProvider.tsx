/* @flow */
import React, { Component } from 'react';
import { TextRoot as Root } from './styled';
import ElementContext from './ElementContext';
import { APPEARANCE } from './constants';

import type { TextProviderDefaultProps, TextProviderProps } from './types';

export default class TextProvider extends Component<TextProviderProps> {
  static displayName = 'TextProvider';

  static defaultProps: TextProviderDefaultProps = {
    appearance: APPEARANCE.p,
    as: 'p'
  };

  render() {
    const {
      appearance: defaultAppearance,
      as: defaultAs
    } = TextProvider.defaultProps;
    const { as, parentAs, ...restProps } = this.props;
    const rootProps = {
      as: parentAs === defaultAppearance && as === defaultAs ? 'span' : as,
      defaultAppearance,
      ...restProps
    };

    return (
      <ElementContext.Provider value={this.props.as}>
        <Root {...rootProps} />
      </ElementContext.Provider>
    );
  }
}
