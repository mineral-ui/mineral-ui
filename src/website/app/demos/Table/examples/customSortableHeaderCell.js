/* @flow */
import { palette } from 'mineral-ui-tokens';
import { createStyledComponent } from '../../../../../library/styles';
import { createThemedComponent } from '../../../../../library/themes';
import Table from '../../../../../library/Table';
import TableSortableHeaderCell from '../../../../../library/Table/TableSortableHeaderCell';
import renderPropDescription from '../../shared/renderPropDescription';
import data from '../shared/data';

export default {
  id: 'custom-sortable-header-cell',
  title: 'Custom Sortable Header Cell',
  description: `Use the \`headerCell\`
[render prop](https://reactjs.org/docs/render-props.html) in a column definiton
to provide custom rendering control of all table header cells in that
column.

${renderPropDescription}

Some things to keep in mind:

1. Your custom renderer can build off of an existing component, e.g.
   \`TableSortableHeaderCell\`, or it can be all new, e.g. \`th\`.
1. Because you are rendering a table column header, the rendered root element
   _must_ be either a \`th\` (recommended) or a \`td\`.
1. Remember to accommodate the appearance-related Table props, like
   [\`density\`](#density), [\`highContrast\`](#high-contrast), if appropriate
   for your app.
1. If your app supports RTL languages, you can use \`theme.direction\` to
   conditionally apply the necessary styles.`,
  scope: {
    createStyledComponent,
    createThemedComponent,
    Table,
    palette,
    data,
    TableSortableHeaderCell
  },
  source: `
    () => {
      /**
       * If you wish to use theme variables in your function, you must either use
       * createStyledComponent or the withTheme HOC, (higher order component),
       * which provides the base theme as a prop.
       *   import { withTheme } from 'mineral-ui/themes';
       *
       * If you wish to access a component specific theme, you'll need to import
       * it and compose it with the base theme as shown below.
       *   import { componentTheme as tableSortableHeaderCellTheme } from 'mineral-ui/Table/TableSortableHeaderCell';
       */
       const sortableHeaderCell = ({ props, state }) => {
         const { direction, isSorted } = state;

         const ThemedSortableTableHeaderCell = createThemedComponent(TableSortableHeaderCell, ({ theme }) => ({
           TableSortableHeaderCell_border_focus: '1px dotted ' + theme.color_black,
           TableSortableHeaderCell_color_focus: theme.color_black
         }));

         const CustomSortableTableHeaderCell = createStyledComponent(
           ThemedSortableTableHeaderCell,
           ({ theme }) => ({
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

         return <CustomSortableTableHeaderCell {...props} />;
      }

      const columns = [
        { content: 'Fruits', key: 'Fruits', headerCell: sortableHeaderCell },
        { content: 'Vegetables', key: 'Vegetables', headerCell: sortableHeaderCell },
        { content: 'Grains', key: 'Grains', headerCell: sortableHeaderCell },
        { content: 'Dairy', key: 'Dairy', headerCell: sortableHeaderCell },
        { content: 'Protein', key: 'Protein', headerCell: sortableHeaderCell }
      ];

      return (
        <Table
          sortable
          defaultSort={{ key: 'Fruits' }}
          columns={columns}
          data={data}
          rowKey="Fruits"
          title="Delicious Foods"
          hideTitle />
      );
    }`
};
