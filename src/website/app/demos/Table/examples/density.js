/* @flow */
import Table from '../../../../../library/Table';
import data from '../shared/data';

export default {
  id: 'density',
  title: 'Density',
  description: `You can render Table with a more spacious appearance.`,
  scope: { data, Table },
  source: `
    <Table
      density="spacious"
      data={data}
      rowKey="Fruits"
      title="Foods of the World"
      hideTitle />`
};
