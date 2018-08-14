/* @flow */
import React, { Component } from 'react';
import { createStyledComponent } from '../styles';
import Checkbox from '../Checkbox';
import TableCell, {
  componentTheme as tableCellComponentTheme
} from './TableCell';
import TableHeaderCell, {
  componentTheme as tableHeaderCellComponentTheme
} from './TableHeaderCell';
import { TableContext } from './TableBase';

type Props = {
  checked?: boolean,
  disabled?: boolean,
  indeterminate?: boolean,
  isHeader?: boolean,
  label: string,
  onChange: () => void
};

const PaddedCheckbox = createStyledComponent(
  Checkbox,
  ({ density, isHeader, theme: baseTheme }) => {
    const theme = isHeader
      ? tableHeaderCellComponentTheme(baseTheme)
      : tableCellComponentTheme(baseTheme);
    const themePrefix = isHeader ? 'TableHeaderCell' : 'TableCell';
    const paddingVertical =
      density === 'spacious'
        ? theme[`${themePrefix}_paddingVertical_spacious`]
        : theme[`${themePrefix}_paddingVertical`];

    return {
      padding: `${paddingVertical} ${theme[`${themePrefix}_paddingHorizontal`]}`
    };
  },
  {
    withProps: { hideLabel: true }
  }
);

export default class TableSelectableCell extends Component<Props> {
  shouldComponentUpdate(nextProps: Props) {
    return (
      this.props.checked !== nextProps.checked ||
      this.props.indeterminate !== nextProps.indeterminate
    );
  }

  render() {
    return (
      <TableContext.Consumer>
        {({ density }) => {
          const {
            checked,
            disabled,
            indeterminate,
            isHeader,
            label,
            onChange,
            ...restProps
          } = this.props;

          const Root = isHeader ? TableHeaderCell : TableCell;
          const rootProps = {
            noPadding: true,
            width: isHeader ? 1 : undefined,
            ...restProps
          };
          const checkboxProps = {
            checked,
            disabled,
            density,
            hideLabel: true,
            indeterminate,
            isHeader,
            label,
            onChange
          };

          return (
            <Root {...rootProps}>
              <PaddedCheckbox {...checkboxProps} />
            </Root>
          );
        }}
      </TableContext.Consumer>
    );
  }
}
