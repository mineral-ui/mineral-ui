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
