/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import {
  mountInThemeProvider,
  mountInWrapper
} from '../../../../utils/enzymeUtils';
import Checkbox from '../../Checkbox';
import Table from '../Table';
import TableBase from '../TableBase';
import TableBody from '../TableBody';
import TableHeader from '../TableHeader';
import TableRow from '../TableRow';
import TableSortableHeaderCell from '../TableSortableHeaderCell';
import examples from '../../../website/app/demos/Table/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';
import testThemeOverrides from '../../../../utils/testThemeOverrides';

import type { RenderFn } from '../Table';

const defaultProps = {
  data: [
    { aa: 'aa0', ab: 'ab0', ac: 'ac0', ad: 'ad0' },
    { aa: 'aa2', ab: 'ab2', ac: 'ac2', ad: 'ad2' },
    { aa: 'aa1', ab: 'ab1', ac: 'ac1', ad: 'ad1' },
    { aa: 'aa3', ab: 'ab3', ac: 'ac3', ad: 'ad3', disabled: true }
  ],
  title: 'Test'
};
// $FlowFixMe
const nonDisabledRows = defaultProps.data.filter((item) => !item.disabled);

function shallowTable(props = {}) {
  const tableProps = {
    ...defaultProps,
    ...props
  };
  return shallow(<Table {...tableProps} />);
}

const mountTable = (props = {}) => {
  const tableProps = {
    ...defaultProps,
    ...props
  };

  return mountInThemeProvider(<Table {...tableProps} />);
};

const findHeaderCheckbox = (table) => {
  return table.find(TableHeader).find('input[type="checkbox"]');
};

const findCheckboxAtRowIndex = (table, index) => {
  return table
    .find(TableBody)
    .find(TableRow)
    .at(index)
    .find('input[type="checkbox"]');
};

const findCheckedCheckboxes = (table) => {
  return table
    .find(TableBody)
    .findWhere((n) => n.type() === Checkbox && n.props().checked);
};

// Needed to run jest:react for snapshot testing in old versions of React
const REGEX_REACT_TEXT = /<!-- react-text: \d+ -->(.*)<!-- \/react-text -->/g;
const stripReactTextTags = (string: string) => {
  return string.replace(REGEX_REACT_TEXT, '$1');
};

describe('Table', () => {
  testDemoExamples(examples, {
    exclude: ['large-data-sets'],
    contextPolyfill: true
  });

  it('renders', () => {
    const table = shallowTable();

    expect(table.exists()).toEqual(true);
  });

  describe('theme overrides', () => {
    testThemeOverrides(
      <Table id="test" data={defaultProps.data} title="test" />,
      ['Table_outline_focus']
    );
  });

  describe('selectable', () => {
    describe('defaultSelectedRows', () => {
      it('does not select without selectable', () => {
        const [, table] = mountTable({
          defaultSelectedRows: [defaultProps.data[0]]
        });
        const selectedRows = table.find(TableBase).props().selectable;

        expect(selectedRows).toBeUndefined();
      });

      it('selects default rows', () => {
        const [, table] = mountTable({
          defaultSelectedRows: [defaultProps.data[0]],
          selectable: true
        });

        const firstRowCheckbox = findCheckboxAtRowIndex(table, 0);
        const headerCheckbox = findHeaderCheckbox(table);

        expect(headerCheckbox.props().indeterminate).toBeTrue;
        expect(firstRowCheckbox.props().checked).toBeTrue;
      });

      it('does not select disabled rows', () => {
        const disabledRow = defaultProps.data[3];
        const [, table] = mountTable({
          defaultSelectedRows: [disabledRow],
          selectable: true
        });

        const disabledRowCheckbox = findCheckboxAtRowIndex(table, 3);
        const headerCheckbox = findHeaderCheckbox(table);

        expect(
          headerCheckbox.props().checked && headerCheckbox.props().indeterminate
        ).toBeFalse;
        expect(disabledRowCheckbox.props().checked).toBeFalse;
      });
    });

    describe('on click', () => {
      describe('single row', () => {
        it('selects row', () => {
          const wrapper = mountInWrapper(
            <Table {...defaultProps} selectable />
          );
          let table = wrapper.find(Table);
          let firstRowCheckbox = findCheckboxAtRowIndex(table, 0);

          firstRowCheckbox.simulate('change');
          wrapper.update();

          table = wrapper.find(Table);
          const headerCheckbox = findHeaderCheckbox(table);
          firstRowCheckbox = findCheckboxAtRowIndex(table, 0);

          expect(headerCheckbox.props().indeterminate).toBeTrue;
          expect(firstRowCheckbox.props().checked).toBeTrue;
        });

        it('deselects row when initially selected', () => {
          const wrapper = mountInWrapper(
            <Table
              {...defaultProps}
              selectable
              defaultSelectedRows={[defaultProps.data[0]]}
            />
          );
          let table = wrapper.find(Table);
          let firstRowCheckbox = findCheckboxAtRowIndex(table, 0);

          firstRowCheckbox.simulate('change');
          wrapper.update();

          table = wrapper.find(Table);
          let headerCheckbox = findHeaderCheckbox(table);
          firstRowCheckbox = findCheckboxAtRowIndex(table, 0);

          expect(
            headerCheckbox.props().checked &&
              headerCheckbox.props().indeterminate
          ).toBeFalse;
          expect(firstRowCheckbox.props().checked).toBeFalse;
        });

        it('calls onToggleRow callback when provided', () => {
          const onToggleRow = jest.fn();
          const [, table] = mountTable({
            onToggleRow,
            selectable: true
          });
          const firstRowCheckbox = findCheckboxAtRowIndex(table, 0);

          firstRowCheckbox.simulate('change');

          expect(onToggleRow).toHaveBeenCalledWith(defaultProps.data[0], true);
        });
      });

      describe('all rows', () => {
        it('selects all non-disabled rows when no rows initially selected', () => {
          const wrapper = mountInWrapper(
            <Table {...defaultProps} selectable />
          );
          let table = wrapper.find(Table);
          const headerCheckbox = findHeaderCheckbox(table);

          headerCheckbox.simulate('change');
          wrapper.update();

          table = wrapper.find(Table);
          const checkedCheckboxes = findCheckedCheckboxes(table);

          expect(headerCheckbox.props().checked).toBeTrue;
          expect(checkedCheckboxes.length).toEqual(nonDisabledRows.length);
        });

        it('deselects all rows when some rows initially selected', () => {
          const wrapper = mountInWrapper(
            <Table
              {...defaultProps}
              selectable
              defaultSelectedRows={[defaultProps.data[0]]}
            />
          );
          let table = wrapper.find(Table);
          const headerCheckbox = findHeaderCheckbox(table);

          headerCheckbox.simulate('change');
          wrapper.update();

          table = wrapper.find(Table);
          const checkedCheckboxes = findCheckedCheckboxes(table);

          expect(
            headerCheckbox.props().checked &&
              headerCheckbox.props().indeterminate
          ).toBeFalse;
          expect(checkedCheckboxes.length).toEqual(0);
        });

        it('deselects all rows when all rows initially selected', () => {
          const wrapper = mountInWrapper(
            <Table
              {...defaultProps}
              selectable
              defaultSelectedRows={defaultProps.data}
            />
          );
          let table = wrapper.find(Table);
          const headerCheckbox = findHeaderCheckbox(table);

          headerCheckbox.simulate('change');
          wrapper.update();

          table = wrapper.find(Table);
          const checkedCheckboxes = findCheckedCheckboxes(table);

          expect(
            headerCheckbox.props().checked &&
              headerCheckbox.props().indeterminate
          ).toBeFalse;
          expect(checkedCheckboxes.length).toEqual(0);
        });

        it('calls onToggleAllRows callback when provided', () => {
          const onToggleAllRows = jest.fn();
          const [, table] = mountTable({
            onToggleAllRows,
            selectable: true
          });
          const headerCheckbox = findHeaderCheckbox(table);

          headerCheckbox.simulate('change');

          expect(onToggleAllRows).toHaveBeenCalledWith(nonDisabledRows, true);
        });
      });
    });
  });

  describe('sortable', () => {
    describe('enablement', () => {
      it('makes all columns sortable with sortable on Table', () => {
        const [, table] = mountTable({
          sortable: true
        });
        const header = table.find(TableHeader);

        expect(header.find(TableSortableHeaderCell).length).toEqual(4);
      });

      it('makes only the first column sortable with sortable in column definition', () => {
        const [, table] = mountTable({
          columns: [
            { key: 'aa', content: 'AA', sortable: true },
            { key: 'ab', content: 'AB' },
            { key: 'ac', content: 'AC' },
            { key: 'ad', content: 'AD' }
          ]
        });
        const header = table.find(TableHeader);

        expect(header.find(TableSortableHeaderCell).length).toEqual(1);
      });

      it('makes only the appropriate columns sortable with sortable in Table and column definition', () => {
        const [, table] = mountTable({
          columns: [
            { key: 'aa', content: 'AA', sortable: false },
            { key: 'ab', content: 'AB' },
            { key: 'ac', content: 'AC' },
            { key: 'ad', content: 'AD' }
          ],
          sortable: true
        });
        const header = table.find(TableHeader);

        expect(header.find(TableSortableHeaderCell).length).toEqual(3);
      });
    });

    describe('defaultSort', () => {
      it('sorts without sortable', () => {
        const [, table] = mountTable({
          defaultSort: { key: 'aa', descending: true }
        });
        const sortedData = table.find(TableBase).props().data;

        expect(sortedData).toMatchSnapshot();
      });

      it('sorts with sortable Table', () => {
        const [, table] = mountTable({
          defaultSort: { key: 'aa', descending: true },
          sortable: true
        });
        const sortedData = table.find(TableBase).props().data;

        expect(sortedData).toMatchSnapshot();
      });

      it('sorts with sortable column', () => {
        const [, table] = mountTable({
          columns: [
            { key: 'aa', content: 'AA', sortable: true },
            { key: 'ab', content: 'AB' },
            { key: 'ac', content: 'AC' },
            { key: 'ad', content: 'AD' }
          ],
          defaultSort: { key: 'aa', descending: true }
        });
        const sortedData = table.find(TableBase).props().data;

        expect(sortedData).toMatchSnapshot();
      });

      it('sorts with sortable Table and sortComparator', () => {
        const [, table] = mountTable({
          defaultSort: { key: 'aa', descending: true },
          sortable: true,
          sortComparator: () => 0
        });
        const sortedData = table.find(TableBase).props().data;

        expect(sortedData).toMatchSnapshot();
      });

      it('sorts with sortable column and sortComparator', () => {
        const tableSortComparator = jest.fn();

        const [, table] = mountTable({
          columns: [
            {
              key: 'aa',
              content: 'AA',
              sortable: true,
              sortComparator: () => 0
            },
            { key: 'ab', content: 'AB' },
            { key: 'ac', content: 'AC' },
            { key: 'ad', content: 'AD' }
          ],
          defaultSort: { key: 'aa', descending: true },
          sortComparator: tableSortComparator
        });
        const sortedData = table.find(TableBase).props().data;

        expect(sortedData).toMatchSnapshot();
        expect(tableSortComparator).not.toHaveBeenCalled();
      });
    });

    describe('on click', () => {
      let wrapper, table;
      const onSort = jest.fn();

      beforeEach(() => {
        wrapper = mountInWrapper(
          <Table {...defaultProps} sortable onSort={onSort} />
        );
        table = wrapper.find(Table);
        onSort.mockReset();
      });

      it('sorts ascending on first click', () => {
        let headerCell = table.find(TableSortableHeaderCell).first();
        const button = headerCell.find('button');

        button.simulate('click');

        wrapper.update();
        table = wrapper.find(Table);
        const sortedData = table.find(TableBase).props().data;
        const headerCellHtml = stripReactTextTags(headerCell.html());

        expect(sortedData).toMatchSnapshot();
        expect(headerCellHtml).toMatchSnapshot();
      });

      it('toggles sort direction on second click', () => {
        const headerCell = table.find(TableSortableHeaderCell).first();
        const button = headerCell.find('button');

        button.simulate('click');
        button.simulate('click');

        wrapper.update();
        table = wrapper.find(Table);
        const sortedData = table.find(TableBase).props().data;
        const headerCellHtml = stripReactTextTags(headerCell.html());

        expect(sortedData).toMatchSnapshot();
        expect(headerCellHtml).toMatchSnapshot();
      });

      it('sorts ascending when sorted column changes', () => {
        const headerCell = table.find(TableSortableHeaderCell).first();
        const secondHeaderCell = table.find(TableSortableHeaderCell).at(1);
        const button = headerCell.find('button');
        const secondButton = secondHeaderCell.find('button');

        button.simulate('click');
        secondButton.simulate('click');

        wrapper.update();
        table = wrapper.find(Table);
        const sortedData = table.find(TableBase).props().data;
        const headerCellHtml = stripReactTextTags(headerCell.html());
        const secondHeaderCellHtml = stripReactTextTags(
          secondHeaderCell.html()
        );

        expect(sortedData).toMatchSnapshot();
        expect(headerCellHtml).toMatchSnapshot('Idle');
        expect(secondHeaderCellHtml).toMatchSnapshot('Active');
      });

      it('calls onSort callback when provided', () => {
        const button = table
          .find(TableSortableHeaderCell)
          .first()
          .find('button');

        button.simulate('click');

        expect(onSort).toHaveBeenCalledWith({ key: 'aa', descending: false });
      });
    });

    it('maintains sort state when data changes', () => {
      const props = {
        columns: [
          { content: 'AA', key: 'aa' },
          { content: 'AB', key: 'ab' },
          { content: 'AC', key: 'ac' },
          { content: 'AD', key: 'ad' }
        ],
        data: [
          { aa: 'aa0', ab: 'ab0', ac: 'ac0', ad: 'ad0' },
          { aa: 'aa1', ab: 'ab1', ac: 'ac1', ad: 'ad1' },
          { aa: 'aa2', ab: 'ab2', ac: 'ac2', ad: 'ad2' },
          { aa: 'aa3', ab: 'ab3', ac: 'ac3', ad: 'ad3' }
        ],
        defaultSort: { key: 'aa', descending: true },
        sortable: true
      };

      const wrapper = mountInWrapper(<Table {...defaultProps} {...props} />);

      wrapper.setState({
        data: [...props.data, { aa: 'aa4', ab: 'ab4', ac: 'ac4', ad: 'ad4' }]
      });

      const sortedData = wrapper.find(TableBase).props().data;

      expect(sortedData).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    let renderer: RenderFn;

    beforeEach(() => {
      renderer.mockReset();
    });

    describe('"row"', () => {
      renderer = jest.fn(() => <tr />);

      it('calls render prop with expected arguments', () => {
        mountTable({
          columns: [{ content: 'AA', key: 'aa' }],
          data: [{ aa: 'aa0', ab: 'ab0', ac: 'ac0', ad: 'ad0', row: renderer }]
        });

        expect(renderer.mock.calls[0]).toMatchSnapshot();
      });
    });

    describe('"cell"', () => {
      renderer = jest.fn(() => <td />);

      it('calls render prop with expected arguments', () => {
        mountTable({
          columns: [{ content: 'AA', key: 'aa', cell: renderer }],
          data: [{ aa: 'aa0', ab: 'ab0', ac: 'ac0', ad: 'ad0' }]
        });

        expect(renderer.mock.calls[0]).toMatchSnapshot();
      });
    });

    describe('"headerCell"', () => {
      renderer = jest.fn(() => <th />);

      it('calls render prop with expected arguments', () => {
        mountTable({
          columns: [{ content: 'AA', key: 'aa', headerCell: renderer }],
          data: [{ aa: 'aa0', ab: 'ab0', ac: 'ac0', ad: 'ad0' }]
        });

        expect(renderer.mock.calls[0]).toMatchSnapshot();
      });

      describe('when sortable', () => {
        it('calls render prop with expected arguments', () => {
          mountTable({
            columns: [{ content: 'AA', key: 'aa', headerCell: renderer }],
            data: [{ aa: 'aa0', ab: 'ab0', ac: 'ac0', ad: 'ad0' }],
            sortable: true,
            defaultSort: { key: 'aa' }
          });

          expect(renderer.mock.calls[0]).toMatchSnapshot();
        });
      });
    });
  });
});
