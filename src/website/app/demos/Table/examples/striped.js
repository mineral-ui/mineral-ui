/* @flow */
import Table from '../../../../../library/Table';
import data from '../shared/data';

export default {
  id: 'striped',
  title: 'Striped Rows',
  description: `You can render Table with alternately-striped rows.`,
  scope: { data, Table },
  source: `
    <Table
      striped
      data={data}
      rowKey="Fruits"
      title="Foods of the World"
      hideTitle />`
};
