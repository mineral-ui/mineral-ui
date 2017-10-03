/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import React, { Children, Component } from 'react';
import { Target } from 'react-popper';
import { createStyledComponent } from '../utils';

type Props = {
  children: React$Node,
  disabled?: boolean,
  onClick?: (event: SyntheticEvent<>) => void,
  isOpen: boolean
};

const Root = createStyledComponent(
  Target,
  {
    cursor: 'pointer',
    display: 'inline-block'
  },
  {
    displayName: 'PopoverTrigger'
  }
);

export default class PopoverTrigger extends Component<Props> {
  props: Props;

  render() {
    const { children, disabled, isOpen, ...restProps } = this.props;

    const rootProps = {
      'aria-disabled': disabled,
      'aria-expanded': isOpen,
      role: 'button',
      ...restProps
    };

    return <Root {...rootProps}>{Children.only(children)}</Root>;
  }
}
