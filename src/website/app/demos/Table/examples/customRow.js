/* @flow */
import { createStyledComponent } from '../../../../../library/styles';
import { withTheme } from '../../../../../library/themes';
import Table from '../../../../../library/Table';
import { componentTheme as tableCellTheme } from '../../../../../library/Table/TableCell';
import renderPropDescription from '../../shared/renderPropDescription';
import sharedData from '../shared/data';

export default {
  id: 'custom-row',
  title: 'Custom Row',
  description: `Use the \`row\`
[render prop](https://reactjs.org/docs/render-props.html) as a row property in
your data to provide custom rendering control of the table row.

${renderPropDescription}

Some things to keep in mind:

1. Your custom renderer can build off of an existing component, e.g.
   \`TableRow\`, or it can be all new, e.g. \`tr\`.
1. Because you are rendering a table row, the rendered root element _must_ be a
   \`tr\`.
1. Remember to accommodate [\`sortable\`](#sortable) and
   [\`selectable\`](#selectable) data, if appropriate for your app.
1. Remember to accommodate appearance-related Table props, like
 [\`density\`](#density), [\`highContrast\`](#high-contrast), and
 [\`striped\`](#striped), if appropriate for your app.
1. If your app supports RTL languages, you can use \`theme.direction\` to
   conditionally apply the necessary styles.`,
  scope: {
    createStyledComponent,
    sharedData,
    Table,
    tableCellTheme,
    withTheme
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
       *   import { componentTheme as tableCellTheme } from 'mineral-ui/Table/TableCell';
       */
      const row = ({ props }) => {
        const { isSelectable } = props;

        const CustomRow = withTheme(({ theme: baseTheme }) => {
          const theme = tableCellTheme(baseTheme);

          const Root = createStyledComponent('tr', {
            backgroundColor: theme.well_backgroundColor_warning
          });

          const Cell = createStyledComponent('td', {
            padding:
              theme.TableCell_paddingVertical +
              ' ' +
              theme.TableCell_paddingHorizontal
          });

          const Divider = createStyledComponent('hr', {
            backgroundColor: theme.color_warning,
            border: 0,
            height: 1
          });

          const cellCount = Object.keys(data[0]).length + (isSelectable ? 1 : 0);

          return (
            <Root {...props}>
              <Cell colSpan={cellCount}>
                <Divider />
              </Cell>
            </Root>
          );
        });

        return <CustomRow />;
      }

      const data = [
        sharedData[0],
        sharedData[1],
        { row },
        sharedData[2],
        sharedData[3]
      ];

      return (
        <Table
          data={data}
          rowKey="Fruits"
          title="Foods of the World"
          hideTitle />
      );
    }`
};
