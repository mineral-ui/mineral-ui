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
import React, { Component } from 'react';
import { red } from '../../colors';
import { createStyledComponent } from '../../styles';
import { createThemedComponent } from '../../themes';
import _Button from '../../Button';
import Heading from './Heading';

type Props = {
  buttonLabel: string,
  children?: React$Node,
  errorMessage: string,
  onReRender?: () => void
};

type State = {
  hasError: boolean
};

const ErrorBlock = createStyledComponent('div', ({ theme }) => ({
  backgroundColor: red.red_10,
  border: `1px solid ${red.red_20}`,
  color: theme.color_text_danger,
  lineHeight: theme.lineHeight_prose,
  padding: theme.space_inset_lg,
  textAlign: 'center'
}));

const Button = createThemedComponent(_Button, {
  borderColor_focus: red.red_60
});

export default class ErrorBoundary extends Component<Props, State> {
  static defaultProps = {
    errorMessage: 'Oops, something went wrong. Check your console for details.',
    buttonLabel: 'Reload component'
  };

  state = {
    hasError: false
  };

  componentDidCatch(error: Object, info: Object) {
    this.setState({ hasError: true });
    console.error(info);
  }

  render() {
    const { buttonLabel, children, errorMessage, onReRender } = this.props;
    if (this.state.hasError) {
      const headingProps = {
        as: 'h4',
        level: 5,
        css: { color: 'currentColor' }
      };
      const buttonProps = {
        'aria-label': `${errorMessage} ${buttonLabel}`,
        autoFocus: true,
        size: 'small',
        onClick: () => {
          this.reRender(onReRender);
        }
      };
      return (
        <ErrorBlock>
          <Heading {...headingProps}>{errorMessage}</Heading>
          <Button {...buttonProps}>{buttonLabel}</Button>
        </ErrorBlock>
      );
    }
    return children;
  }

  reRender = (action?: () => void) => {
    if (action) {
      action();
    }
    this.setState({ hasError: false });
  };
}
