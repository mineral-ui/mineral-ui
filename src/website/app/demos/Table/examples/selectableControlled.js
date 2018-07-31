/* @flow */
import { Component } from 'react';
import Button from '../../../../../library/Button';
import Flex, { FlexItem } from '../../../../../library/Flex';
import Table from '../../../../../library/Table';
import data from '../shared/data';

export default {
  id: 'selectable-controlled',
  title: 'Selectable Rows — Controlled',
  description: `Table controls its own selected rows state by default. It can
optionally be managed by the application as a controlled component via the
control prop, \`selectedRows\`.`,
  scope: { Button, Component, Table, Flex, FlexItem, data },
  source: `
    () => {
      const evenRows = data.filter((row, index) => (index + 1)%2 === 0);
      const oddRows = data.filter((row, index) => (index + 1)%2 !== 0);

      const initialState = {
        selected: []
      };

      class MyTable extends Component {
        constructor(props) {
          super(props);

          this.state = initialState;

          this.handleToggleRow = this.handleToggleRow.bind(this);
          this.handleToggleAllRows = this.handleToggleAllRows.bind(this);
          this.selectEvenRows = this.selectEvenRows.bind(this);
          this.selectOddRows = this.selectOddRows.bind(this);
          this.reset = this.reset.bind(this);
        }

        handleToggleRow(row) {
          this.setState((prevState) => {
            const selected = prevState.selected.slice(0);
            const index = selected.indexOf(row);
            const hasRow = index !== -1;
            hasRow ? selected.splice(index, 1) : selected.push(row);
            return { selected };
          });
        }

        handleToggleAllRows(rows) {
          this.setState({ selected: rows });
        }

        selectEvenRows() {
          this.setState({
            selected: evenRows
          })
        }

        selectOddRows() {
          this.setState({
            selected: oddRows
          })
        }

        reset() {
          this.setState(initialState)
        }

        render() {
          return (
            <div>
              <Flex wrap>
                <FlexItem marginBottom="md">
                  <Button onClick={this.selectEvenRows} size="medium">Select even rows</Button>
                </FlexItem>
                <FlexItem marginBottom="md" marginRight="auto">
                  <Button onClick={this.selectOddRows} size="medium">Select odd rows</Button>
                </FlexItem>
                <FlexItem marginBottom="md">
                  <Button onClick={this.reset} size="medium">Reset</Button>
                </FlexItem>
              </Flex>
              <Table
                data={data}
                rowKey="Fruits"
                selectable
                selectedRows={this.state.selected}
                onToggleRow={this.handleToggleRow}
                onToggleAllRows={this.handleToggleAllRows}
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
