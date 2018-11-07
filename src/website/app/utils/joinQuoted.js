/* @flow */
export default (
  array: Array<any>,
  options?: {
    delimiter: string,
    quote: string
  } = {
    delimiter: ' | ',
    quote: `'`
  }
): string => {
  const { delimiter: d, quote: q } = options;
  return `${q}${array.join(`${q}${d}${q}`)}${q}`;
};
