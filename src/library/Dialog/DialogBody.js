/* @flow */
import React, { Component } from 'react';
import { createStyledComponent, getNormalizedValue } from '../styles';
import { createThemedComponent, mapComponentThemes } from '../themes';
import DialogRow, {
  componentTheme as dialogRowComponentTheme
} from './DialogRow';
import ModifiersContext from './ModifiersContext';
import _OverflowContainerWithShadows, {
  componentTheme as overflowContainerWithShadowsComponentTheme
} from '../OverflowContainer/OverflowContainerWithShadows';

type Props = {
  /** Rendered DialogBody content */
  children?: React$Node
};

export const componentTheme = (baseTheme: Object) =>
  mapComponentThemes(
    {
      name: 'OverflowContainerWithShadows',
      theme: overflowContainerWithShadowsComponentTheme(baseTheme)
    },
    {
      name: 'DialogBody',
      theme: {}
    },
    baseTheme
  );

const ThemedOverflowContainerWithShadows = createThemedComponent(
  _OverflowContainerWithShadows,
  ({ theme: baseTheme }) =>
    mapComponentThemes(
      {
        name: 'DialogBody',
        theme: componentTheme(baseTheme)
      },
      {
        name: 'OverflowContainerWithShadows',
        theme: {}
      },
      baseTheme
    )
);

const styles = {
  root: ({ theme: baseTheme }) => {
    const theme = dialogRowComponentTheme(baseTheme);
    const fontSize = theme.DialogRow_fontSize;
    const marginVertical = `${getNormalizedValue(
      theme.DialogRow_marginVertical,
      fontSize
    )}`;

    return {
      display: 'flex',
      flex: '1 1 auto',
      fontSize,
      margin: 0,
      minHeight: '0%', // See: https://css-tricks.com/flexbox-truncated-text/#comment-1611744
      padding: 0,

      // Margins when no header or footer
      '&:first-child': {
        marginTop: marginVertical
      },
      '&:last-child': {
        marginBottom: marginVertical
      }
    };
  },
  scrollShadowBox: ({ theme: baseTheme }) => {
    const theme = dialogRowComponentTheme(baseTheme);
    const fontSize = theme.DialogRow_fontSize;
    const paddingHorizontal = `${getNormalizedValue(
      theme.DialogRow_paddingHorizontal,
      fontSize
    )}`;

    return {
      display: 'flex',
      flex: '1 1 auto',

      // OverflowContainerWithShadows > Scroller
      '& > div': {
        paddingLeft: paddingHorizontal,
        paddingRight: paddingHorizontal,

        '& > :first-child': {
          marginTop: 0
        },
        '& > :last-child': {
          marginBottom: 0
        }
      }
    };
  }
};

const Root = createStyledComponent(DialogRow, styles.root, {
  displayName: 'DialogBody'
});
const OverflowContainerWithShadows = createStyledComponent(
  ThemedOverflowContainerWithShadows,
  styles.scrollShadowBox,
  { withProps: { scrollY: true } }
);

/**
 * DialogBody contains the main content of [Dialog](/components/dialog).
 */
export default class DialogBody extends Component<Props> {
  render() {
    const { children, ...restProps } = this.props;
    const rootProps = {
      ...restProps
    };
    const modifiers = {
      flip: {
        boundariesElement: 'window'
      },
      preventOverflow: {
        escapeWithReference: true
      }
    };

    return (
      <Root {...rootProps}>
        <OverflowContainerWithShadows>
          <ModifiersContext.Provider value={modifiers}>
            {children}
          </ModifiersContext.Provider>
        </OverflowContainerWithShadows>
      </Root>
    );
  }
}
