/* @flow */
import React, { PureComponent } from 'react';
import IconChecked from '../Icon/IconRadioButtonCheck';
import { RadioRoot as Root } from './styled';
import { LABEL_POSITION, SIZE } from './constants';

import { radioPropTypes } from './propTypes';
import { RadioDefaultProps, RadioProps } from './types';

export default class Radio extends PureComponent<RadioProps> {
  static displayName = 'Radio';

  static defaultProps: RadioDefaultProps = {
    labelPosition: LABEL_POSITION.end,
    size: SIZE.large
  };

  static propTypes = radioPropTypes;

  render() {
    const {
      className,
      inputRef,
      rootProps: otherRootProps,
      ...restProps
    } = this.props;
    const rootProps = {
      iconChecked: <IconChecked />,
      inputRef: (ref) => {
        if (inputRef) {
          inputRef(ref);
        }
      },
      rootProps: {
        className,
        ...otherRootProps
      },
      type: 'radio',
      ...restProps // Note: Props are spread to input rather than Root
    };

    return <Root {...rootProps} />;
  }
}
