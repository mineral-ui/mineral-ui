const keys = require('./keys');

const REGEX_ALIAS_VALUE = /{!(.*)}/g;

const categories = (input) =>
  Array.from(new Set(input.get('props').map((prop) => prop.get('category'))))
    .filter((category) => category !== 'palette')
    .sort()
    .concat(['palette']);

const convertKeyToSass = (k) => k.replace(/_/g, '-');

const defaultExport = (result) => `export default ${result}`;

const formatBlackAndWhite = (input) =>
  formatProperties({
    filter: (prop) => ['black', 'white'].includes(prop.get('name')),
    input
  });

const formatCategories = (input, keyTemplate) =>
  formatGroups(
    (prop, category) => prop.get('category') === category,
    input,
    categories(input),
    keyTemplate
  );

const formatColors = (input) =>
  formatGroups(
    (prop, color) => prop.get('name').includes(color),
    input,
    keys.colors,
    (name) => `[${name.split('_')[1]}]`
  );

const formatGroups = (filter, input, source, keyTemplate) =>
  source.reduce((acc, sourceItem) => {
    acc[sourceItem] = formatProperties({
      filter: (prop) => filter(prop, sourceItem),
      input,
      keyTemplate
    });
    return acc;
  }, {});

// JSON.stringify() adds double quotes to properties and values. The following
// formats that object to remove double-quote-wrapping and escapes, e.g.:
// * "backgroundColor_active": "#ebeff5" => backgroundColor_active: '#ebeff5'
// * "fontWeight_regular": 400 => fontWeight_regular: 400
// * "fontFamily": "\"Open Sans\"" => fontFamily: '"Open Sans"'
const formatOutput = (result) =>
  JSON.stringify(result, null, 2)
    .replace(/"(.*)": /g, '$1: ')
    .replace(/: "(.*)"/g, ": '$1'")
    .replace(/\\"/g, '"');

const formatRampGroups = (input) =>
  formatGroups(
    (prop, rampGroup) =>
      prop.get('type') === 'color' &&
      (rampGroup === 'theme'
        ? prop.get(rampGroupFilters[rampGroup]).includes('brand')
        : prop.get(rampGroupFilters[rampGroup]).includes(rampGroup)),
    input,
    Object.keys(rampGroupFilters)
  );

const formatProperties = ({
  filter = (prop) => !!prop,
  getValue = (prop) => prop.get('value'),
  input,
  keyTemplate = (k) => k
}) =>
  input
    .get('props')
    .filter(filter)
    .reduce((acc, prop) => {
      const key = keyTemplate(prop.get('name'));
      const value = removeTheoValueQuotes(getValue(prop));
      acc[key] = value;
      return acc;
    }, {});

const namedExports = (tokens, exportFormat) =>
  Object.entries(tokens)
    .map(exportFormat)
    .join('\n');

const rampGroupFilters = {
  black: 'originalValue',
  danger: 'name',
  gray: 'originalValue',
  success: 'name',
  theme: 'name',
  warning: 'name',
  white: 'originalValue'
};

const removeTheoValueQuotes = (value) =>
  typeof value === 'string' ? value.replace(/'/g, '') : value;

module.exports = {
  categorizedJsExports: (input) => {
    return defaultExport(formatOutput(formatCategories(input)));
  },

  categorizedSassExports: (input) => {
    return defaultExport(
      formatOutput(
        formatCategories(input, (k) => `'$mnrl-${convertKeyToSass(k)}'`)
      )
    );
  },

  colorAliases: (input) => {
    return defaultExport(
      formatOutput(
        formatProperties({
          filter: (prop) => prop.get('type') === 'color',
          getValue: (prop) =>
            `'${prop.get('originalValue')}'`.replace(REGEX_ALIAS_VALUE, '$1'),
          input
        })
      )
    );
  },

  colorExport: (input) => {
    return defaultExport(
      formatOutput(
        formatProperties({
          input,
          // Additional brackets are because flow does not support non-string
          // literal property keys.
          // https://github.com/facebook/flow/issues/380#issuecomment-224380551
          keyTemplate: (k) => `[${k.split('_')[1]}]`
        })
      )
    );
  },

  defaultExport: (input) => {
    return defaultExport(formatOutput(formatProperties({ input })));
  },

  groupedByRampJsExports: (input) => {
    return defaultExport(formatOutput(formatRampGroups(input)));
  },

  index: (input) => {
    const _ignoreInput = input;
    const colorExports = keys.colors.map(
      (color) => `export { default as ${color} } from './${color}';`
    );

    return [
      `export { default } from './tokens';`,
      `export { default as palette } from './palette';`,
      `export * from './all';`
    ]
      .concat(colorExports)
      .join('\n')
      .concat('\n');
  },

  mnrlScss: (input) => {
    return namedExports(
      formatProperties({
        input,
        keyTemplate: (k) => `$mnrl-${convertKeyToSass(k)}`
      }),
      (token) => `${token[0]}: ${token[1]};`
    );
  },

  namedExports: (input) => {
    return namedExports(formatProperties({ input }), (token) => {
      const value = typeof token[1] === 'string' ? `'${token[1]}'` : token[1];
      return `export const ${token[0]} = ${value};`;
    });
  },

  paletteWithKeysAndType: (input) => {
    return defaultExport(
      formatOutput({
        ...formatColors(input),
        ...formatBlackAndWhite(input)
      })
    ).concat(`;

export type Color =
${keys.colors.map((color) => `  | '${color}'`).join('\n')};\n`);
  }
};
