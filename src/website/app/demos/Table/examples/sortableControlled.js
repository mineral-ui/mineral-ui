/* @flow */
import { Component } from 'react';
import Button from '../../../../../library/Button';
import Flex, { FlexItem } from '../../../../../library/Flex';
import Table from '../../../../../library/Table';
import data from '../shared/data';

export default {
  id: 'sortable-controlled',
  title: 'Sortable Columns - Controlled',
  description: `Table controls its own sort state by default. It can optionally
be managed by the application as a controlled component via the control prop,
\`sort\`.`,
  scope: { Button, Component, Table, Flex, FlexItem, data },
  source: `
    () => {
      const evenRows = data.filter((row, index) => (index + 1)%2 === 0);
      const oddRows = data.filter((row, index) => (index + 1)%2 !== 0);

      const initialState = {
        sort: undefined
      };

      class MyTable extends Component {
        constructor(props) {
          super(props);

          this.state = initialState;

          this.handleSort = this.handleSort.bind(this);
          this.sortFruitsAscending = this.sortFruitsAscending.bind(this);
          this.sortFruitsDescending = this.sortFruitsDescending.bind(this);
          this.reset = this.reset.bind(this);
        }

        handleSort(sort) {
          this.setState({ sort });
        }

        sortFruitsAscending() {
          this.setState({
            sort: {
              key: 'Fruits',
              descending: false
            }
          });
        }

        sortFruitsDescending() {
          this.setState({
            sort: {
              key: 'Fruits',
              descending: true
            }
          });
        }

        reset() {
          this.setState(initialState)
        }

        render() {
          return (
            <div>
              <Flex wrap>
                <FlexItem marginBottom="md">
                  <Button onClick={this.sortFruitsAscending} size="medium">Sort Fruits ascending</Button>
                </FlexItem>
                <FlexItem marginBottom="md" marginRight="auto">
                  <Button onClick={this.sortFruitsDescending} size="medium">Sort Fruits descending</Button>
                </FlexItem>
                <FlexItem marginBottom="md">
                  <Button onClick={this.reset} size="medium">Reset</Button>
                </FlexItem>
              </Flex>
              <Table
                data={data}
                rowKey="Fruits"
                sortable
                sort={this.state.sort}
                onSort={this.handleSort}
                title="Foods of the World"
                hideTitle />
            </div>
          );
        }
      }

      return <MyTable />;
    }
    `
};
