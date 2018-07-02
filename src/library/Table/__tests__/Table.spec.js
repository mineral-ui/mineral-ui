/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import Table from '../Table';
import examples from '../../../website/app/demos/Table/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

function shallowTable(props = {}) {
  const tableProps = {
    data: [{ a: 'a1', b: 'b1' }, { a: 'a2', b: 'b2' }],
    title: 'test',
    ...props
  };

  return shallow(<Table {...tableProps} />);
}

describe('Table', () => {
  testDemoExamples(examples, { exclude: ['large-data-sets'] });

  it('renders', () => {
    const table = shallowTable();

    expect(table.exists()).toEqual(true);
  });
});
