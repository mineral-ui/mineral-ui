/* @flow */
import React from 'react';
import Table from '../../../../library/Table';

export default [
  {
    type: 'do',
    description: `If one or more columns in your table are sortable, make sure
one of those columns has a default sort applied, so that its clear the table can
be sorted.`,
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
        sortable
        defaultSort={{ key: 'price' }}
        title="Example data"
        hideTitle
      />
    )
  },
  {
    type: 'dont',
    description: `Avoid a mix of sortable and non-sortable columns. If one
column is sortable, users will expect all columns to be sortable.`,
    example: (
      <Table
        data={[
          { product: 'Fruit Basket', price: '$123.45' },
          { product: 'Muffin Basket', price: '$98.76' }
        ]}
        columns={[
          { key: 'product', content: 'Product', primary: true, sortable: true },
          { key: 'price', content: 'Price', textAlign: 'end' }
        ]}
        defaultSort={{ key: 'product' }}
        title="Example data"
        hideTitle
      />
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
  },
  {
    type: 'do',
    description: `Align numerical content (currency, numerical dates, etc...) to
the end (right for LTR languages) for ease of comparison. If using decimals,
numbers in a column should have a consistent precision.`,
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
    type: 'do',
    description: `Place the units for a column in the header cell, rather than
repeating them in each data cell.`,
    example: (
      <Table
        data={[{ name: 'Allison', age: '42' }, { name: 'Sam', age: '65' }]}
        columns={[
          { key: 'name', content: 'Name' },
          { key: 'age', content: 'Age (years)', textAlign: 'end' }
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
  }
];
