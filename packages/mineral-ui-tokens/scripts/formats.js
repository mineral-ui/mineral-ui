const keys = require('./keys');

const keyValueOutput = (k, v) => `  ${k}: ${v},`;

const REGEX_ALIAS_VALUE = /{!(.*)}/g;

const defaultExport = (output) => ['export default {', output, '};'].join('\n');

const formatProperties = ({
  filter = (prop) => !!prop,
  getValue = (prop) => prop.get('value'),
  input,
  valueTemplate = (k, v) => keyValueOutput(k, v)
}) =>
  input
    .get('props')
    .filter((prop) => filter(prop))
    .map((prop) => {
      let result = [];
      if (prop.has('comment')) {
        result.push(`// ${prop.get('comment')}`);
      }
      const k = prop.get('name');
      const v = getValue(prop);
      result.push(valueTemplate(k, v));
      return result;
    })
    .flatten(1)
    .toArray()
    .join('\n');

module.exports = {
  colorAliases: (input) =>
    defaultExport(
      formatProperties({
        filter: (prop) => prop.get('type') === 'color',
        getValue: (prop) =>
          `'${prop.get('originalValue')}'`.replace(REGEX_ALIAS_VALUE, '$1'),
        input
      })
    ),
  colorExport: (input) =>
    defaultExport(
      formatProperties({
        input,
        valueTemplate: (k, v) => {
          k = k.split('_')[1];
          return keyValueOutput(k, v);
        }
      })
    ),
  defaultExport: (input) => defaultExport(formatProperties({ input })),
  groupedNamedExports: (input) =>
    keys.tokenGroups
      .map((group) => {
        const filteredInput = input.merge({
          props: input.get('props').filter((prop) => {
            if (group === 'generic') {
              return keys.tokenGroups.indexOf(prop.get('category')) === -1;
            } else {
              return prop.get('category') === group;
            }
          })
        });
        return [
          `export const ${group} = {`,
          formatProperties({
            input: filteredInput
          }),
          '};'
        ].join('\n');
      })
      .join('\n'),
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
  mnrlScss: (input) =>
    formatProperties({
      input,
      valueTemplate: (k, v) => {
        k = k.replace('_', '-');
        return `$mnrl-${k}: ${v};`;
      }
    }),
  namedExports: (input) =>
    formatProperties({
      input,
      valueTemplate: (k, v) => `export const ${k} = ${v};`
    })
};
