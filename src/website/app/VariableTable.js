/* @flow */
import React from 'react';
import { createStyledComponent } from '../../library/styles';
import { Table, TableCell, TableHeaderCell, TableRow } from './Table';
import colorable from 'colorable';
import { darken, getLuminance } from 'polished';

type Props = {
  baseTheme?: Object,
  themeToDisplay: Object,
  value: (theme: Object, variable: string, baseTheme?: Object) => string,
  valueColor: (theme: Object, variable: string, baseTheme?: Object) => any
};

const Root = createStyledComponent('div', ({ theme }) => ({
  margin: `${theme.space_stack_xl} 0 0`,
  overflowX: 'auto'
}));
const Name = createStyledComponent('span', ({ theme }) => ({
  fontWeight: theme.fontWeight_semiBold
}));
const Value = createStyledComponent('span', ({ color, theme }) => {
  if (color) {
    return {
      border: `1px solid ${
        getLuminance(color) > getLuminance('#ccc')
          ? darken(0.3, color)
          : darken(0.1, color)
      }`,
      backgroundColor: color,
      borderRadius: theme.borderRadius_1,
      color: a11yColor(color),
      display: 'inline-block',
      fontFamily: theme.fontFamily_monospace,
      padding: `${parseFloat(theme.space_inset_sm) / 2}em ${
        theme.space_inset_sm
      }`
    };
  } else {
    return {
      fontFamily: theme.fontFamily_monospace
    };
  }
});

const a11yColor = (color) => {
  const a11y = colorable({
    main: color,
    white: '#fff',
    black: '#000',
    compact: true
  });

  const whiteContrast = a11y[0].combinations[0].contrast;
  const blackContrast = a11y[0].combinations[1].contrast;

  return whiteContrast > blackContrast ? 'white' : 'black';
};

const getTableRows = (themeToDisplay, value, valueColor, baseTheme) => {
  return Object.keys(themeToDisplay).map((variable) => {
    if (variable !== themeToDisplay[variable]) {
      return (
        <TableRow key={variable}>
          <TableCell>
            <Name>{variable}</Name>
          </TableCell>
          <TableCell>
            <Value color={valueColor(themeToDisplay, variable, baseTheme)}>
              {value(themeToDisplay, variable, baseTheme)}
            </Value>
          </TableCell>
        </TableRow>
      );
    }
  });
};

export default function VariableTable(props: Props) {
  const { baseTheme, themeToDisplay, value, valueColor, ...restProps } = props;
  return (
    <Root {...restProps}>
      <Table>
        <thead>
          <tr>
            <TableHeaderCell scope="col" width="50%">
              Variable
            </TableHeaderCell>
            <TableHeaderCell scope="col">Value</TableHeaderCell>
          </tr>
        </thead>
        <tbody>
          {getTableRows(themeToDisplay, value, valueColor, baseTheme)}
        </tbody>
      </Table>
    </Root>
  );
}
