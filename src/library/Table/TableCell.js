/* @flow */
import React, { PureComponent } from 'react';
import memoizeOne from 'memoize-one';
import { createStyledComponent, getNormalizedValue, pxToEm } from '../styles';
import { isRenderProp, rtlTextAlign } from '../utils';
import { TableContext } from './TableBase';

import type { RenderFn } from './Table';

type Props = {
  /** Rendered content */
  children?: React$Node,
  /** Column key */
  columnKey?: string,
  /** @Private Rendered element */
  element?: string,
  /** Remove padding */
  noPadding?: boolean,
  /** See Table's Column type */
  primary?: boolean,
  /** Row index */
  rowIndex?: number,
  /**
   * Provides custom rendering control. See the
   * [custom cell example](/components/table/#custom-cell) and
   * our [render props guide](/render-props).
   */
  render?: RenderFn,
  /** See Table's Column type */
  textAlign?: 'start' | 'end' | 'center' | 'justify'
};

export const componentTheme = (baseTheme: Object) => ({
  TableCell_borderVertical: null,
  TableCell_borderVertical_highContrast: null,
  TableCell_fontSize: baseTheme.fontSize_ui,
  TableCell_paddingHorizontal: baseTheme.space_inline_md,
  TableCell_paddingVertical: baseTheme.space_stack_sm,
  TableCell_paddingVertical_spacious: pxToEm(12),
  TableCell_verticalAlign: 'top',

  ...baseTheme
});

const styles = ({
  density,
  highContrast,
  noPadding,
  textAlign,
  theme: baseTheme
}) => {
  const theme = componentTheme(baseTheme);
  const fontSize = theme.TableCell_fontSize;
  const rtl = theme.direction === 'rtl';
  const borderProperty = rtl ? 'borderRight' : 'borderLeft';
  const borderVertical = highContrast
    ? theme.TableCell_borderVertical_highContrast
    : theme.TableCell_borderVertical;
  const paddingHorizontal = getNormalizedValue(
    theme.TableCell_paddingHorizontal,
    fontSize
  );
  const paddingVertical = getNormalizedValue(
    density === 'spacious'
      ? theme.TableCell_paddingVertical_spacious
      : theme.TableCell_paddingVertical,
    fontSize
  );

  return {
    fontSize,
    fontWeight: 'inherit',
    padding: noPadding ? 0 : `${paddingVertical} ${paddingHorizontal}`,
    textAlign: rtlTextAlign(textAlign || 'start', theme.direction),
    verticalAlign: theme.TableCell_verticalAlign,

    '&:not(:first-child)': {
      [borderProperty]: borderVertical
    }
  };
};

const createRootNode = (props: Props) => {
  const defaultElement = TableCell.defaultProps.element;
  const element =
    props.element && props.element !== defaultElement
      ? props.element
      : props.primary
        ? 'th'
        : defaultElement;

  return createStyledComponent(element, styles, {
    displayName: 'TableCell',
    rootEl: element
  });
};

/**
 * TableCell
 */
export default class TableCell extends PureComponent<Props> {
  static defaultProps = {
    element: 'td'
  };

  // Must be an instance method to avoid affecting other instances memoized keys
  getRootNode = memoizeOne(
    createRootNode,
    (nextProps: Props, prevProps: Props) =>
      nextProps.element === prevProps.element &&
      nextProps.primary === prevProps.primary
  );

  render() {
    return (
      <TableContext.Consumer>
        {(tableContextProps) => {
          const { primary, render, ...restProps } = this.props;
          const rootProps = {
            ...tableContextProps,
            ...(primary ? { scope: 'row' } : undefined),
            ...restProps
          };

          if (isRenderProp(render)) {
            return render({
              props: rootProps
            });
          }

          const Root = this.getRootNode(this.props);
          return <Root {...rootProps} />;
        }}
      </TableContext.Consumer>
    );
  }
}
