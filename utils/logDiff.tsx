/* @flow */
const jsdiff = require('diff');
require('colors');

export default function logDiff(label: any, a: string, b: string) {
  const diff = jsdiff.diffChars(a, b);
  process.stdout.write(`${label['yellow']}\n`);
  diff.forEach(({ added, removed, value }) => {
    const color = added ? 'green' : removed ? 'red' : 'grey';
    process.stdout.write(value[color]);
  });
  process.stdout.write('\n\n');
}
