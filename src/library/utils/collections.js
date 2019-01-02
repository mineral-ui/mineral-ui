/* @flow */

export const setFromArray = <T>(array: Array<T>): Set<T> =>
  array.reduce((acc, value) => {
    acc.add(value);
    return acc;
  }, new Set());

export const toArray = (value: any) => (Array.isArray(value) ? value : [value]);
