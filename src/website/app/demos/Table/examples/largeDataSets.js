/* @flow */
import { Component } from 'react';
import Button from '../../../../../library/Button';
import ButtonGroup from '../../../../../library/ButtonGroup';
import Box from '../../../../../library/Box';
import Table from '../../../../../library/Table';
import {
  columns2,
  columns4,
  columns100,
  rows100x100,
  rows100x4,
  rows2x2
} from '../shared/largeData';

export default {
  id: 'large-data-sets',
  title: 'Large Data Sets',
  description: `You should open this in a
[chromeless standalone](/components/table/large-data-sets?chromeless)
before clicking those buttons. 😬`,
  hideFromProd: true,
  scope: {
    Box,
    Button,
    ButtonGroup,
    Component,
    Table,
    columns2,
    columns4,
    columns100,
    rows100x100,
    rows100x4,
    rows2x2
  },
  source: `
    () => {
      class MyTable extends Component {
        constructor(props) {
          super(props);

          this.state = {
            columns: columns2,
            data: rows2x2
          };

          this.populate2x2 = this.populate2x2.bind(this);
          this.populate4x100 = this.populate4x100.bind(this);
          this.populate100x100 = this.populate100x100.bind(this);
        }

        populate2x2() {
          this.setState({
            columns: columns2,
            data: rows2x2
          })
        }

        populate4x100() {
          this.setState({
            columns: columns4,
            data: rows100x4
          })
        }

        populate100x100() {
          this.setState({
            columns: columns100,
            data: rows100x100
          })
        }

        render() {
          return (
            <div>
              <Box marginBottom="md">
                <ButtonGroup
                  aria-label="Data options"
                  mode="radio"
                  size="medium">
                  <Button onClick={this.populate2x2} defaultChecked>2 &times; 2</Button>
                  <Button onClick={this.populate4x100}>4 &times; 100</Button>
                  <Button onClick={this.populate100x100}>100 &times; 100</Button>
                </ButtonGroup>
              </Box>
              <Table
                columns={this.state.columns}
                data={this.state.data}
                rowKey="aa"
                selectable
                title="Example data"
                hideTitle />
            </div>
          );
        }
      }

      return <MyTable />;
    }
    `
};
