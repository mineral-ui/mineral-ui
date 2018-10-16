/* @flow */
import React, { PureComponent } from 'react';
import { isRenderProp } from '../utils';
import { createStyledComponent } from '../styles';
import { TableContext } from './TableBase';

import { type RenderFn } from './Table';

type Props = {
  /** Rendered content can be TD or TH */
  children: React$Node,
  /** Renders row with selected styles */
  isSelected?: boolean,
  /** @Private Provided to user in render prop callback */
  isSelectable?: boolean,
  /**
   * Provides custom rendering control. See the
   * [custom row example](/components/table/#custom-row) and
   * our [render props guide](/render-props).
   */
  render?: RenderFn,
  /** Row index */
  rowIndex?: number
};

// prettier-ignore
export const componentTheme = (baseTheme: Object) => ({
  TableRow_backgroundColor_highContrast_selected: baseTheme.color_theme_20,
  TableRow_backgroundColor_highContrast_selectedHover: baseTheme.color_theme_30,
  TableRow_backgroundColor_hover: baseTheme.color_gray_20,
  TableRow_backgroundColor_selected: baseTheme.color_theme_10,
  TableRow_backgroundColor_selectedHover: baseTheme.color_theme_20,
  TableRow_backgroundColor_striped: baseTheme.color_gray_10,
  TableRow_borderHorizontal: `1px solid ${baseTheme.color_white}`,
  TableRow_borderHorizontal_highContrast: `1px solid ${baseTheme.color_gray_60}`,

  ...baseTheme
});

const Root = createStyledComponent(
  'tr',
  ({ highContrast, isSelected, theme: baseTheme, striped }) => {
    const theme = componentTheme(baseTheme);

    return {
      backgroundColor: (() => {
        if (isSelected) {
          if (highContrast) {
            return theme.TableRow_backgroundColor_highContrast_selected;
          }
          return theme.TableRow_backgroundColor_selected;
        }
      })(),

      ...(highContrast
        ? {
            borderBottom: theme.TableRow_borderHorizontal_highContrast
          }
        : {
            '&:not(:last-child)': {
              borderBottom: theme.TableRow_borderHorizontal
            }
          }),

      '*:not(thead) > &:hover': {
        backgroundColor: (() => {
          if (isSelected) {
            if (highContrast) {
              return theme.TableRow_backgroundColor_highContrast_selectedHover;
            }
            return theme.TableRow_backgroundColor_selectedHover;
          }
          return theme.TableRow_backgroundColor_hover;
        })()
      },

      '&:nth-child(even):not(:hover)': {
        backgroundColor:
          !isSelected && striped ? theme.TableRow_backgroundColor_striped : null
      },

      ...(isSelected
        ? {
            '& > td:first-child, & > th:first-child': {
              position: 'relative',

              '&::before': {
                backgroundColor: theme.color_theme_60,
                bottom: 0,
                content: '""',
                left: theme.direction !== 'rtl' ? 0 : null,
                right: theme.direction === 'rtl' ? 0 : null,
                position: 'absolute',
                top: 0,
                width: '4px'
              }
            }
          }
        : undefined)
    };
  },
  {
    displayName: 'TableRow',
    rootEl: 'tr'
  }
);

/**
 * TableRow
 */
export default class TableRow extends PureComponent<Props> {
  render() {
    return (
      <TableContext.Consumer>
        {(tableContextProps) => {
          const { render, ...restProps } = this.props;
          const rootProps = { ...tableContextProps, ...restProps };

          if (isRenderProp(render)) {
            return render({
              props: rootProps
            });
          }

          return <Root {...rootProps} />;
        }}
      </TableContext.Consumer>
    );
  }
}
