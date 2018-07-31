/* @flow */
import { Component } from 'react';
import Pagination from '../../../../../library/Pagination';
import Table from '../../../../../library/Table';
import DemoLayout from '../../shared/DemoLayout';
import { columns, data } from '../shared/data';

export default {
  id: 'page-sizer',
  title: 'Page Sizer',
  description: `Allow users to select the page size with the \`showPageSizer\`
prop. A custom collection of optional page sizes can be provided with the
\`pageSizes\` prop. The category descriptor (e.g. "minerals", below) within the
caption can be modified with the \`messages.category\` prop. The full caption
and item description can be defined via the \`messages\` prop (see the
[bidirectionality example](#rtl) for details).

The example below paginates a [Table](/components/table#pagination), but this
approach applies to any collection of items.`,
  scope: {
    Component,
    columns,
    data,
    DemoLayout,
    Pagination,
    Table
  },
  source: `
    () => {
      const pageSizes = [2, 3, 4];
      const category = 'minerals';

      class PaginatedTable extends Component {
        constructor(props) {
          super(props);

          this.state = {
            currentPage: 1,
            pageSize: pageSizes[0]
          };

          this.handlePageChange = this.handlePageChange.bind(this);
          this.handlePageSizeChange = this.handlePageSizeChange.bind(this);
        }

        handlePageChange(currentPage) {
          this.setState({ currentPage });
        }

        handlePageSizeChange(pageSize) {
          this.setState({ pageSize });
        }

        render() {
          const { currentPage, pageSize } = this.state;
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
                showPageSizer
                pageSize={pageSize}
                pageSizes={pageSizes}
                onPageSizeChange={this.handlePageSizeChange}
                messages={{ category }}
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
                totalCount={data.length}
              />
            </DemoLayout>
          );
        }
      }

      return <PaginatedTable data={data} />;
    }
  `
};
