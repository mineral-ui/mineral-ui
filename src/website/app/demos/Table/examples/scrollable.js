/* @flow */
import React from 'react';
import Box from '../../../../../library/Box';
import Table from '../../../../../library/Table';
import data from '../shared/data';

const columns = [
  { content: <span>Fresh&nbsp;Fruits</span>, key: 'Fruits', label: 'Fruits' },
  {
    content: <span>Veritable&nbsp;Vegetables</span>,
    key: 'Vegetables',
    label: 'Vegetables'
  },
  { content: <span>Good&nbsp;Grains</span>, key: 'Grains', label: 'Grains' },
  { content: <span>Delectable&nbsp;Dairy</span>, key: 'Dairy', label: 'Dairy' },
  {
    content: <span>Powerful&nbsp;Protein</span>,
    key: 'Protein',
    label: 'Protein'
  }
];

export default {
  id: 'scrollable',
  title: 'Scrollable',
  description: `Table will allow horizontal scrolling by default when its
width is greater than that of its container. You can disable this behavior with
\`scrollable={false}\`.`,
  scope: { Box, columns, data, Table },
  source: `
    <Box width="50%">
      <Table
        columns={columns}
        data={data}
        rowKey="Fruits"
        title="Foods of the World"
        hideTitle />
    </Box>`
};
