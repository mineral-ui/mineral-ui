/* @flow */
import React, { PureComponent } from 'react';
import memoizeOne from 'memoize-one';
import { isRenderProp } from '../utils';
import { createStyledComponent, getNormalizedValue, pxToEm } from '../styles';
import { createThemedComponent, mapComponentThemes } from '../themes';
import TableCell, {
  componentTheme as tableCellComponentTheme
} from './TableCell';
import { TableContext } from './TableBase';

import { type RenderFn } from './Table';

type Props = {
  /** Rendered content */
  children?: React$Node,
  /** Rendered element */
  element?: string,
  /** See Table's Column type */
  label?: string,
  /** See Table's Column type */
  minWidth?: number | string,
  /** See Table's Column type */
  maxWidth?: number | string,
  /**
   * Provides custom rendering control. See the
   * [custom header cell example](/components/table/#custom-header-cell)
   * and our [render props guide](/render-props).
   */
  render?: RenderFn,
  /** See Table's Column type */
  textAlign?: 'start' | 'end' | 'center' | 'justify',
  /** See Table's Column type */
  width?: number | string
};

// prettier-ignore
export const componentTheme = (baseTheme: Object) =>
  mapComponentThemes(
    {
      name: 'TableCell',
      theme: tableCellComponentTheme(baseTheme)
    },
    {
      name: 'TableHeaderCell',
      theme: {
        TableHeaderCell_borderVertical: `1px dotted ${baseTheme.borderColor}`,
        TableHeaderCell_borderVertical_highContrast: `1px dotted ${baseTheme.color_gray_80}`,
        TableHeaderCell_fontWeight: baseTheme.fontWeight_bold,
        TableHeaderCell_paddingHorizontal: baseTheme.space_inline_md,
        TableHeaderCell_paddingVertical: pxToEm(12),
        TableHeaderCell_paddingVertical_spacious: baseTheme.space_stack_md,
        TableHeaderCell_verticalAlign: 'bottom'
      }
    },
    baseTheme
  );

export const ThemedTableCell = createThemedComponent(
  TableCell,
  ({ theme: baseTheme }) =>
    mapComponentThemes(
      {
        name: 'TableHeaderCell',
        theme: componentTheme(baseTheme)
      },
      {
        name: 'TableCell',
        theme: {}
      },
      baseTheme,
      [
        'TableHeaderCell_borderVertical',
        'TableHeaderCell_fontSize',
        'TableHeaderCell_paddingHorizontal',
        'TableHeaderCell_paddingVertical',
        'TableHeaderCell_verticalAlign'
      ]
    )
);

const REGEX_IS_EM_VALUE = /\d+em$/;
const getWidth = (value, fontSize) =>
  REGEX_IS_EM_VALUE.test(value) ? getNormalizedValue(value, fontSize) : value;

const styles = ({
  highContrast,
  maxWidth,
  minWidth,
  theme: baseTheme,
  width
}) => {
  const theme = componentTheme(baseTheme);
  const fontSize = theme.TableHeaderCell_fontSize;
  const rtl = theme.direction === 'rtl';
  const borderProperty = rtl ? 'borderRight' : 'borderLeft';
  const borderVertical = highContrast
    ? theme.TableHeaderCell_borderVertical_highContrast
    : theme.TableHeaderCell_borderVertical;
  const positionProperty = rtl ? 'right' : 'left';

  return {
    fontWeight: theme.TableHeaderCell_fontWeight,
    maxWidth: getWidth(maxWidth, fontSize),
    minWidth: getWidth(minWidth, fontSize),
    position: 'relative',
    width: getWidth(width, fontSize),
    zIndex: 1,

    // Using this "border" to appease Firefox, which extends TableHeaderCell's
    // real border down the entire column after clicking a TableSortableHeaderCell.
    '&:not(:first-child)': {
      [borderProperty]: 0,

      '&::before': {
        [borderProperty]: borderVertical,
        bottom: 0,
        content: '""',
        [positionProperty]: 0,
        position: 'absolute',
        top: 0,
        width: 0,
        zIndex: -1
      }
    }
  };
};

const createRootNode = (props: Props) => {
  const { element = TableHeaderCell.defaultProps.element } = props;

  return createStyledComponent(ThemedTableCell, styles, {
    displayName: 'TableHeaderCell',
    filterProps: ['width'],
    forwardProps: ['element', 'noPadding', 'textAlign'],
    rootEl: element,
    withProps: { element }
  });
};

/**
 * TableHeaderCell
 */
export default class TableHeaderCell extends PureComponent<Props> {
  static defaultProps = {
    element: 'th',
    textAlign: 'start'
  };

  // Must be an instance method to avoid affecting other instances memoized keys
  getRootNode = memoizeOne(
    createRootNode,
    (nextProps: Props, prevProps: Props) =>
      nextProps.element === prevProps.element
  );

  render() {
    return (
      <TableContext.Consumer>
        {(tableContextProps) => {
          const { label, render, ...restProps } = this.props;
          const rootProps = {
            ...tableContextProps,
            'aria-label': label,
            ...restProps
          };

          if (isRenderProp(render)) {
            return render({
              props: {
                ...rootProps,
                label
              }
            });
          }

          const Root = this.getRootNode(this.props);
          return <Root {...rootProps} />;
        }}
      </TableContext.Consumer>
    );
  }
}
