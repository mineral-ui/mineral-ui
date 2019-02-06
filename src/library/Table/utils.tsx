/* @flow */
import { Rows, TableProps } from './types';

export const getColumns = ({ columns, data }: TableProps) => {
  return (
    columns ||
    (data[0]
      ? Object.keys(data[0]).reduce((acc, cell) => {
          acc.push({ content: cell, key: cell });
          return acc;
        }, [])
      : [])
  );
};

export const getComparators = ({ columns }: TableProps) => {
  const comparators =
    columns &&
    columns.reduce((acc, column) => {
      const { key, sortComparator } = column;
      if (sortComparator) {
        acc[key] = sortComparator;
      }
      return acc;
    }, {});

  return comparators && Object.keys(comparators).length
    ? comparators
    : undefined;
};

export const getSelectableRows = (rows: Rows): Rows =>
  rows.filter((row) => !row.disabled);

export const getSortable = ({
  columns,
  defaultSort,
  sort,
  sortable
}: TableProps) =>
  Boolean(
    defaultSort ||
      sort ||
      sortable ||
      (columns && columns.some((column) => column.sortable))
  );
