/* @flow */
export default (obj: object, quoteStringValues?: boolean): string =>
  JSON.stringify(
    obj,
    (key, value) => {
      if (typeof value === 'string' && quoteStringValues) {
        return `'${value}'`;
      } else if (typeof value === 'function') {
        return value
          .toString()
          .replace('\n', '')
          .replace(/\s{2,}/g, ' ');
      }
      return value;
    },
    2
  ).replace(/"/g, '');
