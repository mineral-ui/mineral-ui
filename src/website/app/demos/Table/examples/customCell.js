/* @flow */
import { palette } from 'mineral-ui-tokens';
import { createStyledComponent } from '../../../../../library/styles';
import { withTheme } from '../../../../../library/themes';
import Table from '../../../../../library/Table';
import { componentTheme as tableCellTheme } from '../../../../../library/Table/TableCell';
import renderPropDescription from '../../shared/renderPropDescription';
import data from '../shared/data';

export default {
  id: 'custom-cell',
  title: 'Custom Cell',
  description: `Use the \`cell\`
[render prop](https://reactjs.org/docs/render-props.html) in a column definiton
to provide custom rendering control of all cells in that column.

${renderPropDescription}

Some things to keep in mind:

1. Your custom renderer can build off of an existing component, e.g.
   \`TableCell\`, or it can be all new, e.g. \`td\`.
1. Because you are rendering a table cell, the rendered root element _must_ be a
   \`td\`.
1. Remember to accommodate the appearance-related Table props, like
   [\`density\`](#density), [\`highContrast\`](#high-contrast), and
   [\`striped\`](#striped), if appropriate for your app.
1. If your app supports RTL languages, you can use \`theme.direction\` to
   conditionally apply the necessary styles.`,
  scope: {
    createStyledComponent,
    Table,
    palette,
    data,
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
      const cell = ({ props }) => {
        const { children } = props;

        const CustomCell = withTheme(({ theme: baseTheme }) => {
          const theme = tableCellTheme(baseTheme);

          const Root = createStyledComponent('td', {
            padding:
              theme.TableCell_paddingVertical +
              ' ' +
              theme.TableCell_paddingHorizontal,

            'tr:hover > &': {
              backgroundColor: palette.green_10
            }
          });

          const Inner = createStyledComponent('span', {
            display: 'flex'
          });


          const Content = createStyledComponent('span', {
            fontSize: theme.TableCell_fontSize,
            textAlign: 'left'
          });

          const Emoji = createStyledComponent('span', {
            display: 'inline-block',
            marginRight: theme.space_inline_sm
          }, {
            withProps: {
              'aria-hidden': true,
              role: 'img'
            }
          });

          return (
            <Root {...props}>
              <Inner>
                <Emoji>🌿</Emoji>
                <Content>{children}</Content>
              </Inner>
            </Root>
          );
        });

        return <CustomCell />;
      };

      const columns = [
        { content: 'Fruits', key: 'Fruits' },
        { content: 'Vegetables', key: 'Vegetables', cell },
        { content: 'Grains', key: 'Grains' },
        { content: 'Dairy', key: 'Dairy' },
        { content: 'Protein', key: 'Protein' }
      ];

      return (
        <Table
          columns={columns}
          data={data}
          rowKey="Fruits"
          title="Foods of the World"
          hideTitle />
      );
    }`
};
