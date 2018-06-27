/* @flow */

export const setFromArray = <T>(array: Array<T>): Set<T> =>
  array.reduce((acc, value) => {
    acc.add(value);
    return acc;
  }, new Set());

// Recursively converts an object of arrays into an object of sets.
// Sets are faster for containment checks.
export const settify = (input: any) =>
  Object.keys(input).reduce((acc, key) => {
    const value = input[key];
    acc[key] = Array.isArray(value) ? setFromArray(value) : settify(value);
    return acc;
  }, {});

export const toArray = (value: any) => (Array.isArray(value) ? value : [value]);
