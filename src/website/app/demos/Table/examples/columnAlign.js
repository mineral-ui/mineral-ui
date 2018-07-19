/* @flow */
import Table from '../../../../../library/Table';
import data from '../shared/data';

export default {
  id: 'column-align',
  title: 'Column Alignment',
  description: `Align the text of both the column header and the cells under it
with the \`textAlign\` column definition property.`,
  scope: { data, Table },
  source: `
    () => {
      const columns = [
        { content: 'Fruits', key: 'Fruits' },
        { content: 'Vegetables', key: 'Vegetables', textAlign: 'end' },
        { content: 'Grains', key: 'Grains', textAlign: 'center' },
        { content: 'Dairy', key: 'Dairy',  textAlign: 'justify' },
        { content: 'Protein', key: 'Protein' }
      ];

      return (
        <Table
          columns={columns}
          data={data}
          title="Foods of the World"
          hideTitle />
      );
    }`
};
