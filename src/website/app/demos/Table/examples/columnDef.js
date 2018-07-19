/* @flow */
import Table from '../../../../../library/Table';
import data from '../shared/data';

export default {
  id: 'column-def',
  title: 'Column Definition',
  description: `In addition to \`data\`, you can pass an array of \`column\`
definition objects, [detailed in the API](/components/table/#Column-type).
`,
  scope: { data, Table },
  source: `
    () => {
      const columns = [
        { content: 'Fresh Fruits', key: 'Fruits' },
        { content: 'Veritable Vegetables', key: 'Vegetables' },
        { content: 'Good Grains', key: 'Grains' },
        { content: 'Delectable Dairy', key: 'Dairy' },
        { content: 'Powerful Protein', key: 'Protein' }
      ];

      return (
        <Table
          columns={columns}
          data={data}
          rowKey="Fruits"
          title="Foods of the World"
          hideTitle />
      );
    }`
};
