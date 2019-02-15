import enumToArray from '../../../library/utils/enumToArray';

export const joinQuoted = (
  array: Array<any>,
  options: {
    delimiter: string;
    quote: string;
  } = {
    delimiter: ' | ',
    quote: `'`
  }
): string => {
  const { delimiter: d, quote: q } = options;
  return `${q}${array.join(`${q}${d}${q}`)}${q}`;
};

export const thingOrThingArray = (thing) => ({
  name: 'union',
  value: `${thing} | Array<${thing} | null>`
});

export const stringOrStringArray = (value) =>
  thingOrThingArray(joinQuoted(enumToArray(value)));
