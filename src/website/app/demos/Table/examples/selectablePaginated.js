/* @flow */
import { Component } from 'react';
import Pagination from '../../../../../library/Pagination';
import Table from '../../../../../library/Table';
import DemoLayout from '../../shared/DemoLayout';
import { columns, data } from '../../Pagination/shared/data';

export default {
  id: 'selectable-paginated',
  title: 'Selectable Rows — Paginated',
  description: `Implement selection for paginated data with
[Pagination](/components/pagination) by passing sliced selected rows calculated
from the overall selected rows, current page, and page size.`,
  scope: { Component, columns, data, DemoLayout, Pagination, Table },
  source: `
    () => {
      class PaginatedTable extends Component {
        constructor(props) {
          super(props);

          this.state = {
            currentPage: 1,
            selected: []
          };

          this.handleToggleRow = this.handleToggleRow.bind(this);
          this.handleToggleAllRows = this.handleToggleAllRows.bind(this);
          this.pageSize = 3;
          this.handlePageChange = this.handlePageChange.bind(this);
        }

        handlePageChange(currentPage) {
          this.setState({ currentPage });
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

        handleToggleAllRows(_, none) {
          const slicedData = this.getSlicedData();
          this.setState(({ selected }) => ({
            selected: none
              ? selected.concat(slicedData)
              : selected.filter((row) => slicedData.indexOf(row) === -1)
          }));
        }

        getSlicedData() {
          const { currentPage } = this.state;
          const firstRow = (currentPage - 1) * this.pageSize;
          const lastRow = (currentPage - 1) * this.pageSize + this.pageSize;
          return this.props.data.slice(firstRow, lastRow);
        }

        getSlicedSelected() {
          const { selected } = this.state;
          return this.getSlicedData().reduce((acc, row) => {
            if(selected.indexOf(row) !== -1) {
              acc.push(row);
            }
            return acc;
          }, []);
        }

        render () {
          const { currentPage } = this.state;

          return (
            <DemoLayout>
              <Table
                selectable
                selectedRows={this.getSlicedSelected()}
                onToggleRow={this.handleToggleRow}
                onToggleAllRows={this.handleToggleAllRows}
                data={this.getSlicedData()}
                rowKey="name"
                columns={columns}
                title="Minerals"
                hideTitle
              />
              <Pagination
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
                pageSize={this.pageSize}
                totalCount={data.length}
              />
            </DemoLayout>
          );
        }
      }

      return <PaginatedTable data={data}/>;
    }
  `
};
