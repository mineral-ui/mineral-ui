/* @flow */
import React, { Component } from 'react';
import memoizeOne from 'memoize-one';
import { createStyledComponent, getNormalizedValue } from '../styles';

type Props = {
  children?: React$Node,
  element?: string
};

export const componentTheme = (baseTheme: Object) => ({
  DialogRow_fontSize: baseTheme.fontSize_ui,
  DialogRow_paddingHorizontal: baseTheme.space_inline_lg,
  DialogRow_marginVertical: baseTheme.space_stack_lg,

  ...baseTheme
});

const styles = {
  root: ({ theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);
    const fontSize = theme.DialogRow_fontSize;

    return {
      fontSize,
      margin: `${getNormalizedValue(
        theme.DialogRow_marginVertical,
        fontSize
      )} 0`,
      outline: 0,
      padding: `0 ${getNormalizedValue(
        theme.DialogRow_paddingHorizontal,
        fontSize
      )}`
    };
  }
};

const createRootNode = (props: Props) => {
  const { element = DialogRow.defaultProps.element } = props;
  return createStyledComponent(element, styles.root, {
    includeStyleReset: true,
    rootEl: element
  });
};

export default class DialogRow extends Component<Props> {
  static defaultProps = { element: 'div' };

  getRootNode = memoizeOne(
    createRootNode,
    (nextProps: Props, prevProps: Props) =>
      nextProps.element === prevProps.element
  );

  render() {
    const Root = this.getRootNode(this.props);

    return <Root {...this.props} />;
  }
}
