/* @flow */
import React from 'react';
import Table from '../../../../library/Table';

export default [
  {
    type: 'do',
    description: `Align numerical content (currency, numerical dates, etc...) to
the end (right for LTR languages) for ease of comparison.`,
    example: (
      <Table
        data={[
          { product: 'Fruit Basket', price: '$123.45' },
          { product: 'Muffin Basket', price: '$98.76' }
        ]}
        columns={[
          { key: 'product', content: 'Product' },
          { key: 'price', content: 'Price', textAlign: 'end' }
        ]}
        title="Example data"
        hideTitle
      />
    )
  },
  {
    type: 'dont',
    description: `Avoid displaying your own title for Table. Instead, use the
\`title*\` prop(s) to display an accessibly-connected title with the desired
element and appearance.`,
    example: (
      <div>
        <h4>Non-accessible Title</h4>
        <Table
          data={[
            { product: 'Fruit Basket', price: '$123.45' },
            { product: 'Muffin Basket', price: '$98.76' }
          ]}
          columns={[
            { key: 'product', content: 'Product' },
            { key: 'price', content: 'Price', textAlign: 'end' }
          ]}
          title="Example data"
          hideTitle
        />
      </div>
    )
  },
  {
    type: 'do',
    description: `Designate a column as \`primary\` in your column definitions,
unless your data has no column to serve that purpose.`,
    example: (
      <Table
        data={[
          { product: 'Fruit Basket', price: '$123.45' },
          { product: 'Muffin Basket', price: '$98.76' }
        ]}
        columns={[
          { key: 'product', content: 'Product', primary: true },
          { key: 'price', content: 'Price', textAlign: 'end' }
        ]}
        title="Example data"
        hideTitle
      />
    )
  }
];
