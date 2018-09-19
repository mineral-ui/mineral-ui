/* @flow */
import React, { PureComponent } from 'react';
import debounce from 'lodash.debounce';
import { ellipsis } from 'polished';
import { createStyledComponent } from '../styles';
import _Tooltip from '../Tooltip';

type Props = {
  /** Content of Truncate */
  children?: React$Node
};

type State = {
  showTooltip: boolean
};

const styles = {
  root: ({ theme: baseTheme }) => ({
    pointerEvents: 'all', // Necessary because of Button Inner's pointerEvents: none
    ...ellipsis('100%'),

    '&:focus': {
      outline: `1px solid ${baseTheme.color_theme}`,
      outlineOffset: -1
    }
  }),
  tooltip: {
    // This style is only necessary because we're using Truncate as a Button child
    whiteSpace: 'normal'
  }
};

const Root = createStyledComponent('span', styles.root, {
  displayName: 'Truncate'
});
const Tooltip = createStyledComponent(_Tooltip, styles.tooltip);

export default class Truncate extends PureComponent<Props, State> {
  state = {
    showTooltip: false
  };

  root: ?HTMLElement;

  setRootRef = (node: HTMLElement) => {
    this.root = node;
  };

  toggleTooltip = () => {
    const rootNode = this.root;

    if (rootNode) {
      const offsetWidth = rootNode.offsetWidth + 1; // `+ 1` necessary for Edge & IE11
      const showTooltip = Boolean(rootNode.scrollWidth > offsetWidth);
      if (this.state.showTooltip !== showTooltip) {
        this.setState({
          showTooltip
        });
      }
    }
  };

  componentDidMount() {
    this.toggleTooltip();
  }

  componentDidUpdate() {
    this.toggleTooltip();
  }
  handleWindowResize = debounce(this.toggleTooltip, 100);

  render() {
    const { children, ...restProps } = this.props;
    const rootProps = {
      innerRef: this.setRootRef,
      ...restProps
    };

    const content = <Root {...rootProps}>{children}</Root>;
    return this.root && this.state.showTooltip ? (
      <Tooltip content={this.root.textContent}>{content}</Tooltip>
    ) : (
      content
    );
  }
}
