/* @flow */
import { Component } from 'react';
import Pagination from '../../../../../library/Pagination';
import Table from '../../../../../library/Table';
import DemoLayout from '../../shared/DemoLayout';
import { columns, data } from '../../Pagination/shared/data';

export default {
  id: 'pagination',
  title: 'Pagination',
  description: `Table can be used in conjunction with
[Pagination](/components/pagination) by passing sliced data to Table, calculated
from the current page and page size.`,
  scope: { Component, columns, data, DemoLayout, Pagination, Table },
  source: `
    () => {
      const pageSize = 3;

      class PaginatedTable extends Component {
        constructor(props) {
          super(props);

          this.state = {
            currentPage: 1,
          };

          this.handlePageChange = this.handlePageChange.bind(this);
        }

        handlePageChange(currentPage) {
          this.setState({ currentPage });
        }

        render () {
          const { currentPage } = this.state;
          const firstRow = (currentPage - 1) * pageSize;
          const lastRow = (currentPage - 1) * pageSize + pageSize;
          const slicedData = this.props.data.slice(firstRow, lastRow);

          return (
            <DemoLayout>
              <Table
                data={slicedData}
                rowKey="name"
                columns={columns}
                title="Minerals"
                hideTitle
              />
              <Pagination
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
                pageSize={pageSize}
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
