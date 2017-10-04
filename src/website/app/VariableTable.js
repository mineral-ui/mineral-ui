/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import React from 'react';
import { createStyledComponent } from '../../utils';
import { Table, TableCell, TableHeaderCell, TableRow } from './Table';
import colorable from 'colorable';

type Props = {
  baseTheme?: Object,
  theme: Object,
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
      border: color === '#fff' ? `1px solid ${theme.color_gray_50}` : 'none',
      backgroundColor: color,
      borderRadius: theme.borderRadius_1,
      color: a11yColor(color),
      display: 'inline-block',
      fontFamily: theme.fontFamily_monospace,
      padding: `${parseFloat(theme.space_inset_sm) /
        2}em ${theme.space_inset_sm}`
    };
  } else {
    return {
      fontFamily: theme.fontFamily_monospace
    };
  }
});

const a11yColor = color => {
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

const getTableRows = (theme, value, valueColor, baseTheme) => {
  return Object.keys(theme).map(variable => {
    if (variable !== theme[variable]) {
      return (
        <TableRow key={variable}>
          <TableCell>
            <Name>{variable}</Name>
          </TableCell>
          <TableCell>
            <Value color={valueColor(theme, variable, baseTheme)}>
              {value(theme, variable, baseTheme)}
            </Value>
          </TableCell>
        </TableRow>
      );
    }
  });
};

export default function VariableTable({
  baseTheme,
  theme,
  value,
  valueColor
}: Props) {
  return (
    <Root>
      <Table>
        <thead>
          <tr>
            <TableHeaderCell scope="col">Variable</TableHeaderCell>
            <TableHeaderCell scope="col">Value</TableHeaderCell>
          </tr>
        </thead>
        <tbody>{getTableRows(theme, value, valueColor, baseTheme)}</tbody>
      </Table>
    </Root>
  );
}
