/* @flow */
import React, { PureComponent } from 'react';
import { createStyledComponent, getNormalizedValue, pxToEm } from '../styles';
import { createThemedComponent, mapComponentThemes } from '../themes';
import TableCell, {
  componentTheme as tableCellComponentTheme
} from './TableCell';
import { TableContext } from './Table';

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
      name: 'TableColumnHeader',
      theme: {
        TableColumnHeader_borderVertical: `1px dotted ${baseTheme.borderColor}`,
        TableColumnHeader_borderVertical_highContrast: `1px dotted ${baseTheme.color_gray_80}`,
        TableColumnHeader_fontWeight: baseTheme.fontWeight_bold,
        TableColumnHeader_paddingHorizontal: baseTheme.space_inline_md,
        TableColumnHeader_paddingVertical: pxToEm(12),
        TableColumnHeader_paddingVertical_spacious: baseTheme.space_stack_md,
        TableColumnHeader_verticalAlign: 'bottom'
      }
    },
    baseTheme
  );

export const ThemedTD = createThemedComponent(
  TableCell,
  ({ theme: baseTheme }) =>
    mapComponentThemes(
      {
        name: 'TableColumnHeader',
        theme: componentTheme(baseTheme)
      },
      {
        name: 'TableCell',
        theme: {}
      },
      baseTheme
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
  const fontSize = theme.TableColumnHeader_fontSize;
  const rtl = theme.direction === 'rtl';
  const borderVertical = highContrast
    ? theme.TableColumnHeader_borderVertical_highContrast
    : theme.TableColumnHeader_borderVertical;

  return {
    fontWeight: theme.TableColumnHeader_fontWeight,
    maxWidth: getWidth(maxWidth, fontSize),
    minWidth: getWidth(minWidth, fontSize),
    width: getWidth(width, fontSize),

    '&:not(:first-child)': {
      borderLeft: rtl ? null : borderVertical,
      borderRight: !rtl ? null : borderVertical
    }
  };
};

// TableColumnHeader's root node must be created outside of render, so that the entire DOM
// element is replaced only when the element prop is changed, otherwise it is
// updated in place
function createRootNode(props: Props) {
  const { element = TableColumnHeader.defaultProps.element } = props;

  return createStyledComponent(ThemedTD, styles, {
    displayName: 'TableColumnHeader',
    filterProps: ['width'],
    forwardProps: ['element', 'noPadding', 'textAlign'],
    rootEl: element,
    withProps: { element }
  });
}

/**
 * TableColumnHeader
 */
export default class TableColumnHeader extends PureComponent<Props> {
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
        {({ highContrast, density }) => {
          const rootProps = {
            'aria-label': label,
            highContrast,
            density,
            ...restProps
          };
          return <Root {...rootProps}>{children}</Root>;
        }}
      </TableContext.Consumer>
    );
  }
}
