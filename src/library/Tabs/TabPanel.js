/* @flow */
import React, { Component } from 'react';
import { createStyledComponent } from '../styles';
import _OverflowContainer from '../OverflowContainer';

type Props = {
  /** Content of TabPanel */
  children?: React$Node,
  /** Id of TabPanel */
  id?: string,
  /** Id of the associated Tab */
  tabId?: string
};

export const componentTheme = (baseTheme: Object) => ({
  // This TabList theme variable is defined here because the border is visually
  // associated with TabList, but for styling reasons, it is applied to TabPanel
  TabList_border: `1px solid ${baseTheme.borderColor}`,

  TabPanel_gap: baseTheme.space_inline_md,

  ...baseTheme
});

const styles = {
  container: {
    flex: '1 1 auto',

    '& > :first-child': {
      marginTop: 0
    },

    '& > :last-child': {
      marginBottom: 0
    }
  },
  root: ({ position, theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);
    const rtl = theme.direction === 'rtl';

    const orientation = {
      bottom: 'Bottom',
      end: rtl ? 'Left' : 'Right',
      start: rtl ? 'Right' : 'Left',
      top: 'Top'
    };
    const borderProperty = `border${orientation[position]}`;
    const marginProperty = `margin${orientation[position]}`;
    const paddingProperty = `padding${orientation[position]}`;

    return {
      [borderProperty]: theme.TabList_border,
      display: 'flex',
      flex: '1 1 auto',
      [marginProperty]:
        theme.TabList_border && -theme.TabList_border.split('px')[0],
      minHeight: '0%', // See: https://css-tricks.com/flexbox-truncated-text/#comment-1611744
      [paddingProperty]: theme.TabPanel_gap
    };
  }
};

const OverflowContainer = createStyledComponent(
  _OverflowContainer,
  styles.container,
  {
    withProps: {
      scrollY: true,
      // We always want the panel content to be focusable, for ease of keyboard users
      tabIndex: 0
    }
  }
);
const Root = createStyledComponent('div', styles.root, {
  displayName: 'TabPanel',
  withProps: {
    role: 'tabpanel'
  }
});

/**
 * TabPanel
 */
export default class TabPanel extends Component<Props> {
  render() {
    const { children, tabId, ...restProps } = this.props;

    const rootProps = {
      'aria-labelledby': tabId,
      ...restProps
    };
    return (
      <Root {...rootProps}>
        <OverflowContainer>{children}</OverflowContainer>
      </Root>
    );
  }
}
