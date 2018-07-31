/* @flow */
import { Component } from 'react';
import Pagination from '../../../../../library/Pagination';
import Table from '../../../../../library/Table';
import DemoLayout from '../../shared/DemoLayout';
import { columns, data } from '../shared/data';

export default {
  id: 'kitchen-sink',
  title: 'Kitchen Sink',
  hideFromProd: true,
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
      const sizes = ['small', 'medium', 'large', 'jumbo']

      class Paginated extends Component {
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
          const { size } = this.props;
          const { currentPage, pageSize } = this.state;

          return (
            <Pagination
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
              onPageSizeChange={this.handlePageSizeChange}
              showPageJumper
              pageSize={pageSize}
              showPageSizer
              pageSizes={pageSizes}
              size={size}
              totalCount={data.length}
            />
          );
        }
      }

      return (
        <DemoLayout>
          {sizes.map((size) => <Paginated size={size} key={size} />)}
        </DemoLayout>
      );
    }
  `
};
