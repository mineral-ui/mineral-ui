/* @flow */
import { Component } from 'react';
import Pagination from '../../../../../library/Pagination';
import Table, { defaultSortComparator } from '../../../../../library/Table';
import DemoLayout from '../../shared/DemoLayout';
import { columns, data } from '../../Pagination/shared/data';

export default {
  id: 'sortable-paginated',
  title: 'Sortable Columns — Paginated',
  description: `Implement sorting for paginated data with
[Pagination](/components/pagination) by passing sliced data calculated from the
active sort, current page, and page size. Note that the
[\`defaultSortComparator\`](#sortable) is available from Table.`,
  scope: {
    Component,
    columns,
    data,
    defaultSortComparator,
    DemoLayout,
    Pagination,
    Table
  },
  source: `
    () => {
      class PaginatedTable extends Component {
        constructor(props) {
          super(props);

          this.state = {
            data: this.props.data,
            currentPage: 1,
            sort: undefined
          };

          this.handleSort = this.handleSort.bind(this);
          this.handlePageChange = this.handlePageChange.bind(this);
        }

        handleSort(sort) {
          console.log('pre-sort', data)
          const sortedData = data.slice(0).sort((a,b) => {
            const asc = defaultSortComparator(a,b,sort.key);
            const desc = asc * -1;
            return sort.descending ? desc : asc;
          });
          this.setState(
            { data: sortedData, sort },
            () => { this.handlePageChange(1) }
          );
        }

        handlePageChange(currentPage) {
          console.log('post-sort', this.state.data)
          this.setState({ currentPage })
        }

        render () {
          const { currentPage, data } = this.state;
          const pageSize = 3;
          const firstRow = (currentPage - 1) * pageSize;
          const lastRow = (currentPage - 1) * pageSize + pageSize;
          const slicedData = data.slice(firstRow, lastRow);

          return (
            <DemoLayout>
              <Table
                sortable
                sort={this.state.sort}
                onSort={this.handleSort}
                data={slicedData}
                columns={columns}
                title="Minerals"
                hideTitle
                rowKey="Name" />
              <Pagination
                currentPage={this.state.currentPage}
                onPageChange={this.handlePageChange}
                pageSize={pageSize}
                totalCount={data.length} />
            </DemoLayout>
          )
        }
      }

      return <PaginatedTable data={data}/>
    }
  `
};
