/* @flow */
import Table from '../../../../../library/Table';
import data from '../shared/data';

export default {
  id: 'high-contrast',
  title: 'High Contrast',
  description: `You can render Table with a high contrast appearance.`,
  scope: { data, Table },
  source: `
    <Table
      highContrast
      data={data}
      rowKey="Fruits"
      title="Foods of the World"
      hideTitle />`
};
