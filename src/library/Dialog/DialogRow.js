/* @flow */
import React, { Component } from 'react';
import { createStyledComponent, getNormalizedValue } from '../styles';

type Props = {
  /** TODO */
  children: React$Node,
  /** TODO */
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

function createRootNode(props: Props) {
  const { element = DialogRow.defaultProps.element } = props;

  return createStyledComponent(element, styles.root, {
    includeStyleReset: true,
    rootEl: element
  });
}

/**
 * DialogRow - TODO
 */
export default class DialogRow extends Component<Props> {
  static defaultProps = {
    element: 'div'
  };

  componentWillUpdate(nextProps: Props) {
    if (this.props.element !== nextProps.element) {
      this.rootNode = createRootNode(nextProps);
    }
  }

  rootNode: React$ComponentType<*> = createRootNode(this.props);

  render() {
    const Root = this.rootNode;

    return <Root {...this.props} />;
  }
}
