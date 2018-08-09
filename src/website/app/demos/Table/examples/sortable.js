/* @flow */
import Table from '../../../../../library/Table';
import sharedData from '../shared/data';

export const sortByLength = (a: Object, b: Object, key: string) => {
  const lengthA = a[key].length;
  const lengthB = b[key].length;
  return lengthA < lengthB ? -1 : lengthA > lengthB ? 1 : 0;
};

export default {
  id: 'sortable',
  title: 'Sortable Columns',
  description: `Users can sort the rows in Table by column, enabled via the
\`sortable\` prop. If the default sort comparator, below, is insufficient for
your needs, you can supply your own with the \`sortComparator\` prop. You can
set the initially sorted column & direction with the \`defaultSort\` prop. An
\`onSort\` callback is also available. Note that the \`sortable\` &
\`sortComparator\` properties can be applied to Table via props or to individual
columns via [column definition](/components/table/#Column-type).

\`\`\`
// Coerce null & undefined values to an empty string and normalize letter casing
const normalizedValue = (value) =>
  value === null || value === undefined
    ? ''
    : typeof value === 'string' ? value.toUpperCase() : value;

const defaultSortComparator: SortComparator = (a, b, key) => {
  const valueA = normalizedValue(a[key]);
  const valueB = normalizedValue(b[key]);

  return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
};
\`\`\`

This is available as a named export from the component:

\`\`\`
import Table, { defaultSortComparator } from 'mineral-ui/Table';
\`\`\`

In the example below, sorting is enabled for all columns except Protein, and the
Dairy column sorts by length of the string rather than alphabetically.
`,
  scope: { Table, sharedData },
  source: `
    () => {
      const sortByLength = (a, b, key) => {
        const lengthA = a[key].length;
        const lengthB = b[key].length;
        return lengthA < lengthB ? -1 : lengthA > lengthB ? 1 : 0;
      };

      const columns = [
        { content: 'Fruits', key: 'Fruits' },
        { content: 'Vegetables', key: 'Vegetables' },
        { content: 'Grains', key: 'Grains' },
        { content: 'Dairy', key: 'Dairy', sortComparator: sortByLength },
        { content: 'Protein', key: 'Protein', sortable: false }
      ];

      return (
        <Table
          columns={columns}
          data={sharedData}
          rowKey="Fruits"
          defaultSort={{ key: 'Fruits' }}
          sortable
          title="Foods of the World"
          hideTitle
        />
      );
    }`
};
