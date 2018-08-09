/* @flow */
import { Component } from 'react';
import Button from '../../../../../library/Button';
import Flex, { FlexItem } from '../../../../../library/Flex';
import Table, { defaultSortComparator } from '../../../../../library/Table';
import data from '../shared/data';
import { sortByLength } from './sortable';

export default {
  id: 'sortable-controlled',
  title: 'Sortable Columns — Controlled',
  description: `Table controls its own sort state by default. It can optionally
be managed by the application as a controlled component via the control prop,
\`sort\`. Two details of note:

1. [\`defaultSortComparator\`](#sortable) is available from Table.
2. Because a controlled sortable Table does no sorting on its own, it also does
   not use any sortComparators defined in either props or column definitions. 
   The example below illustrates one way to define and use custom sort 
   comparator functions, with a \`comparators\` object.`,
  scope: {
    Button,
    Component,
    data,
    defaultSortComparator,
    Flex,
    FlexItem,
    sortByLength,
    Table
  },
  source: `
    () => {
      const evenRows = data.filter((row, index) => (index + 1)%2 === 0);
      const oddRows = data.filter((row, index) => (index + 1)%2 !== 0);

      const comparators = {
        // See the 'Sortable Columns' example for sortByLength implementation
        Dairy: sortByLength
      }

      const sortFn = (data, sort) =>
        sort
          ? data.slice(0).sort((a, b) => {
              const comparator = comparators[sort.key] || defaultSortComparator;
              const asc = comparator(a, b, sort.key);
              const desc = asc * -1;
              return sort.descending ? desc : asc;
            })
          : data;

      const initialState = {
        sort: { key: 'Fruits' }
      };

      class MyTable extends Component {
        constructor(props) {
          super(props);

          this.state = initialState;

          this.handleSort = this.handleSort.bind(this);
          this.reset = this.reset.bind(this);
          this.sortDairyAscending = this.sortDairyAscending.bind(this);
          this.sortDairyDescending = this.sortDairyDescending.bind(this);

          this.sort = sortFn;
        }

        handleSort(sort) {
          this.setState({ sort });
        }

        sortDairyAscending() {
          this.setState({
            sort: {
              key: 'Dairy',
              descending: false
            }
          });
        }

        sortDairyDescending() {
          this.setState({
            sort: {
              key: 'Dairy',
              descending: true
            }
          });
        }

        reset() {
          this.setState(initialState);
        }

        render() {
          const { data } = this.props;
          const { sort } = this.state;
          const sortedData = this.sort(data, sort);

          return (
            <div>
              <Flex wrap>
                <FlexItem marginBottom="md">
                  <Button onClick={this.sortDairyAscending} size="medium">Sort Dairy ascending</Button>
                </FlexItem>
                <FlexItem marginBottom="md" marginRight="auto">
                  <Button onClick={this.sortDairyDescending} size="medium">Sort Dairy descending</Button>
                </FlexItem>
                <FlexItem marginBottom="md">
                  <Button onClick={this.reset} size="medium">Reset</Button>
                </FlexItem>
              </Flex>
              <Table
                data={sortedData}
                rowKey="Fruits"
                sortable
                sort={sort}
                onSort={this.handleSort}
                title="Foods of the World"
                hideTitle
              />
            </div>
          );
        }
      }

      return <MyTable data={data} />;
    }
    `
};
