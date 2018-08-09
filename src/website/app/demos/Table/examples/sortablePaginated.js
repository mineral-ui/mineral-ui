/* @flow */
import { Component } from 'react';
import Pagination from '../../../../../library/Pagination';
import Table, { defaultSortComparator } from '../../../../../library/Table';
import DemoLayout from '../../shared/DemoLayout';
import { columns, data } from '../../Pagination/shared/data';
import { sortByLength } from './sortable';

export default {
  id: 'sortable-paginated',
  title: 'Sortable Columns — Paginated',
  description: `Implement sorting for paginated data with
[Pagination](/components/pagination) by passing a 
[controlled Table](#sortable-controlled) sliced data calculated from the active 
sort, current page, and page size.`,
  scope: {
    Component,
    columns,
    data,
    defaultSortComparator,
    DemoLayout,
    Pagination,
    sortByLength,
    Table
  },
  source: `
    () => {
      class PaginatedTable extends Component {
        constructor(props) {
          super(props);

          this.state = {
            currentPage: 1,
            sort: { key: 'name' }
          };

          this.handleSort = this.handleSort.bind(this);
          this.handlePageChange = this.handlePageChange.bind(this);
          this.sort = this.sort.bind(this);
        }

        handleSort(sort) {
          this.setState(
            { sort },
            () => { this.handlePageChange(1) }
          );
        }

        handlePageChange(currentPage) {
          this.setState({ currentPage })
        }
        
        // See the 'Sortable Columns — Controlled' example for more implementation details
        sort(data, sort) {
          return sort
            ? data.slice(0).sort((a, b) => {
                const asc = defaultSortComparator(a, b, sort.key);
                const desc = asc * -1;
                return sort.descending ? desc : asc;
              })
            : data;
        }

        render() {
          const { data } = this.props;
          const { currentPage, sort } = this.state;
          const pageSize = 3;
          const firstRow = (currentPage - 1) * pageSize;
          const lastRow = (currentPage - 1) * pageSize + pageSize;
          const slicedData = this.sort(data, sort).slice(firstRow, lastRow);

          return (
            <DemoLayout>
              <Table
                sortable
                sort={sort}
                onSort={this.handleSort}
                data={slicedData}
                columns={columns}
                title="Minerals"
                hideTitle
                rowKey="Name"
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

      return <PaginatedTable data={data} />
    }
  `
};
