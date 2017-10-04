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
import { createStyledComponent } from '../../utils';

const styles = {
  cell: ({ theme }) => ({
    padding: `${theme.space_inset_md} ${theme.space_inset_sm}`,
    verticalAlign: 'top',

    '&:first-child': {
      paddingLeft: 0
    },

    '&:last-child': {
      paddingRight: 0
    }
  }),
  headerCell: ({ theme, width }) => ({
    borderBottom: `3px solid ${theme.color_gray_60}`,
    color: theme.color_gray_60,
    fontWeight: theme.fontWeight_bold,
    padding: `0 ${theme.space_inset_sm} ${theme.space_inset_sm}`,
    textAlign: 'left',
    width: width && `${width}rem`,

    '&:first-child': {
      paddingLeft: 0
    },

    '&:last-child': {
      paddingRight: 0
    }
  }),
  row: ({ theme }) => ({
    borderBottom: `1px solid ${theme.borderColor}`
  }),
  table: ({ theme }) => ({
    borderCollapse: 'collapse',
    borderSpacing: 0,
    fontSize: theme.fontSize_ui,
    width: '100%'
  })
};

export const Table = createStyledComponent('table', styles.table);
export const TableCell = createStyledComponent('td', styles.cell);
export const TableHeaderCell = createStyledComponent('th', styles.headerCell);
export const TableRow = createStyledComponent('tr', styles.row);
