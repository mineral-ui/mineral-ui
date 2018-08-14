/* @flow */
import React, { PureComponent } from 'react';
import { hideVisually } from 'polished';
import { createStyledComponent } from '../styles';
import { TableContext } from './TableBase';

type Props = {
  /** Rendered content must be TR */
  children: React$Node,
  /** Hide visually */
  hide?: boolean
};

export const componentTheme = (baseTheme: Object) => ({
  TableHeader_borderBottom: `2px solid ${baseTheme.borderColor}`,
  TableHeader_borderBottom_highContrast: `2px solid ${baseTheme.color_gray_80}`,
  TableHeader_borderTop: `1px solid ${baseTheme.borderColor}`,
  TableHeader_borderTop_highContrast: `1px solid ${baseTheme.color_gray_80}`,
  ...baseTheme
});

const Root = createStyledComponent(
  'thead',
  ({ hide, highContrast, theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);

    return hide
      ? hideVisually()
      : {
          borderBottom: highContrast
            ? theme.TableHeader_borderBottom_highContrast
            : theme.TableHeader_borderBottom,
          borderTop: highContrast
            ? theme.TableHeader_borderTop_highContrast
            : theme.TableHeader_borderTop
        };
  },
  {
    displayName: 'TableHeader',
    rootEl: 'thead'
  }
);

/**
 * TableHeader
 */
export default class TableHeader extends PureComponent<Props> {
  render() {
    return (
      <TableContext.Consumer>
        {({ highContrast }) => {
          const { children, ...restProps } = this.props;
          const rootProps = { highContrast, ...restProps };
          return <Root {...rootProps}>{children}</Root>;
        }}
      </TableContext.Consumer>
    );
  }
}
