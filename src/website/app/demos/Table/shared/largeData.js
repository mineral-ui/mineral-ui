/* @flow */
import React, { PureComponent } from 'react';
import { createStyledComponent } from '../../../../../library/styles';
import { type Columns } from '../../../../../library/Table/Table';
import { countRender } from '../../../RenderCounter';

import { type RenderProps } from '../../../../../library/Table/Table';

const CellRoot = createStyledComponent('td', ({ theme }) => ({
  background: theme.color_theme_20,
  padding: theme.space_stack_sm + ' ' + theme.space_inline_md
}));

class Cell extends PureComponent<*> {
  render() {
    countRender('CustomCell');
    return <CellRoot {...this.props} />;
  }
}

const cell = ({ props }: RenderProps) => <Cell {...props} />;

const generateColumns = (count: number) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const depth = alphabet.length;
  const width = Math.ceil(count / depth);
  const wideLetters = alphabet.slice(0, width);

  return wideLetters.reduce((acc, wideLetter, wideIndex) => {
    for (
      let deepIndex = 0;
      deepIndex < depth && acc.length < count;
      deepIndex++
    ) {
      const alphaIndex = deepIndex % depth;
      const deepLetter = alphabet[alphaIndex];
      const letters = wideLetter + deepLetter;
      const isFirstColumn = wideIndex === 0 && deepIndex === 0;

      acc.push({
        content: letters.toUpperCase(),
        key: letters,
        ...(isFirstColumn
          ? {
              cell,
              sortable: true
            }
          : undefined)
      });
    }

    return acc;
  }, []);
};

const generateRows = (count: number, columns: Columns) => {
  return [...Array(count).keys()].map((i) => {
    return columns.reduce((acc, column) => {
      acc[column.key] = column.key + i;
      return acc;
    }, {});
  });
};

export const columns2 = generateColumns(2);
export const columns4 = generateColumns(4);
export const columns100 = generateColumns(200);
export const rows2x2 = generateRows(2, columns2);
export const rows100x4 = generateRows(100, columns4);
export const rows100x100 = generateRows(100, columns100);
