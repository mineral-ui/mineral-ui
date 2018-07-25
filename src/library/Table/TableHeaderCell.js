/* @flow */
import React, { PureComponent } from 'react';
import { createStyledComponent, getNormalizedValue, pxToEm } from '../styles';
import { createThemedComponent, mapComponentThemes } from '../themes';
import TableCell, {
  componentTheme as tableCellComponentTheme
} from './TableCell';
import { TableContext } from './TableBase';

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

    // Using this "border" to appease Firefox, which extends TableHeaderCell's
    // real border down the entire column after clicking a TableSortableHeaderCell.
    '&:not(:first-child)': {
      [borderProperty]: 0,

      '&::before': {
        bottom: 0,
        content: '""',
        [positionProperty]: 0,
        position: 'absolute',
        top: 0,
        width: 0,
        [borderProperty]: borderVertical
      }
    }
  };
};

// TableHeaderCell's root node must be created outside of render, so that the entire DOM
// element is replaced only when the element prop is changed, otherwise it is
// updated in place
function createRootNode(props: Props) {
  const { element = TableHeaderCell.defaultProps.element } = props;

  return createStyledComponent(ThemedTableCell, styles, {
    displayName: 'TableHeaderCell',
    filterProps: ['width'],
    forwardProps: ['element', 'noPadding', 'textAlign'],
    rootEl: element,
    withProps: { element }
  });
}

/**
 * TableHeaderCell
 */
export default class TableHeaderCell extends PureComponent<Props> {
  static defaultProps = {
    element: 'th',
    textAlign: 'start'
  };

  componentWillUpdate(nextProps: Props) {
    if (this.props.element !== nextProps.element) {
      this.rootNode = createRootNode(nextProps);
    }
  }

  rootNode: React$ComponentType<*> = createRootNode(this.props);

  render() {
    const { children, label, ...restProps } = this.props;

    const Root = this.rootNode;

    return (
      <TableContext.Consumer>
        {({ density, highContrast }) => {
          const rootProps = {
            'aria-label': label,
            density,
            highContrast,
            ...restProps
          };
          return <Root {...rootProps}>{children}</Root>;
        }}
      </TableContext.Consumer>
    );
  }
}
