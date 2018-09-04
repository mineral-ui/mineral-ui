/* @flow */
import { createStyledComponent } from '../../../../../library/styles';
import { createThemedComponent } from '../../../../../library/themes';
import Table from '../../../../../library/Table';
import TableSortableHeaderCell from '../../../../../library/Table/TableSortableHeaderCell';
import data from '../shared/data';
import renderPropsDescription from '../../shared/renderPropsDescription';

export default {
  id: 'custom-sortable-header-cell',
  title: 'Custom Sortable Header Cell',
  description: `Use the \`headerCell\` render prop in a column definiton to
provide custom rendering control of all table header cells in that column.
${renderPropsDescription}`,
  scope: {
    createStyledComponent,
    createThemedComponent,
    Table,
    data,
    TableSortableHeaderCell
  },
  source: `
  () => {
    const ThemedSortableTableHeaderCell = createThemedComponent(
      TableSortableHeaderCell,
      ({ theme }) => ({
        TableSortableHeaderCell_border_focus: '1px dotted ' + theme.color_black,
        TableSortableHeaderCell_color_focus: theme.color_black
      })
    );

    const StyledSortableTableHeaderCell = createStyledComponent(
      ThemedSortableTableHeaderCell,
      ({ direction, isSorted, theme }) => ({
        boxShadow: isSorted
          ? direction === 'descending'
            ? 'inset 0 -3px ' + theme.color_black
            : 'inset 0 3px ' + theme.color_black
          : null,

        '& [role="img"]': {
          display: 'none'
        }
      })
    );

    class CustomSortableTableHeaderCell extends React.PureComponent {
      render() {
        const { props, state } = this.props;
        const styledSortableTableHeaderCellProps = {
          ...props,
          ...state
        };

        return (
          <StyledSortableTableHeaderCell {...styledSortableTableHeaderCellProps} />
        );
      }
    }

    const headerCell = (props) => <CustomSortableTableHeaderCell {...props} />;

    const columns = [
      { content: 'Fruits', key: 'Fruits', headerCell },
      { content: 'Vegetables', key: 'Vegetables', headerCell },
      { content: 'Grains', key: 'Grains', headerCell },
      { content: 'Dairy', key: 'Dairy', headerCell },
      { content: 'Protein', key: 'Protein', headerCell }
    ];

    return (
      <Table
        data={data}
        columns={columns}
        sortable
        defaultSort={{ key: 'Fruits' }}
        rowKey="Fruits"
        title="Delicious Foods"
        hideTitle />
    );
  }
  `
};
