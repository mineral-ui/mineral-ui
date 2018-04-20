const groupedTokens = require('../tokens/tokens.json');
const colorTokens = require('../tokens/palette/aliases.json');

const keysFromIndex = (index, replacedString) =>
  index.map((key) => key.replace('./', '').replace(replacedString, ''));

module.exports = {
  colors: keysFromIndex(colorTokens.imports, '.json')
    .filter((path) => !['black', 'white'].includes(path))
    .concat(['brand'])
    .sort(),
  tokenGroups: keysFromIndex(groupedTokens.imports, '/index.json')
};
