/* @flow */
import React, { PureComponent } from 'react';
import memoizeOne from 'memoize-one';
import { createStyledComponent, pxToRem } from '../styles';
import { isRenderProp, rtlTextAlign } from '../utils';
import { TableContext } from './TableBase';

import { type RenderFn } from './Table';

type Props = {
  /** Rendered content */
  children?: React$Node,
  /** @Private Rendered element */
  element?: string,
  /** Remove padding */
  noPadding?: boolean,
  /** See Table's Column type */
  primary?: boolean,
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
  TableCell_paddingVertical_spacious: pxToRem(12, baseTheme),
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
  const { direction, ...theme } = componentTheme(baseTheme);

  const borderVertical = highContrast
    ? theme.TableCell_borderVertical_highContrast
    : theme.TableCell_borderVertical;
  const paddingHorizontal = theme.TableCell_paddingHorizontal;
  const paddingVertical =
    density === 'spacious'
      ? theme.TableCell_paddingVertical_spacious
      : theme.TableCell_paddingVertical;

  return {
    fontSize: theme.TableCell_fontSize,
    fontWeight: 'inherit',
    padding: noPadding ? 0 : `${paddingVertical} ${paddingHorizontal}`,
    textAlign: rtlTextAlign({ align: textAlign || 'start', direction }),
    verticalAlign: theme.TableCell_verticalAlign,

    '&:not(:first-child)': {
      [`border${theme.rtlStart}`]: borderVertical
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
