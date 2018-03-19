/* @flow */
import React, { Children, cloneElement, Component } from 'react';
import { Target } from 'react-popper';
import { createStyledComponent } from '../styles';

type Props = {
  children: React$Node
};

const Root = createStyledComponent(
  Target,
  {
    display: 'inline-block'
  },
  {
    displayName: 'PopoverTrigger'
  }
);

export default class PopoverTrigger extends Component<Props> {
  render() {
    const { children, ...restProps } = this.props;
    const rootProps = {
      component: 'span'
    };

    return (
      <Root {...rootProps}>
        {cloneElement(Children.only(children), restProps)}
      </Root>
    );
  }
}
