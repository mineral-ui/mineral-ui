/* @flow */
const jsdiff = require('diff');
require('colors');

export default function logDiff(label: string, a: string, b: string) {
  const { write } = process.stdout;
  const diff = jsdiff.diffChars(a, b);
  // $FlowFixMe
  write(`${label['yellow']}\n`);
  diff.forEach(({ added, removed, value }) => {
    const color = added ? 'green' : removed ? 'red' : 'grey';
    write(value[color]);
  });
  write('\n\n');
}
