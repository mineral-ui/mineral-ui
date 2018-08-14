/* @flow */
import { palette } from 'mineral-ui-tokens';
import { createStyledComponent } from '../../../../../library/styles';
import { withTheme } from '../../../../../library/themes';
import Table from '../../../../../library/Table';
import TableHeaderCell, {
  componentTheme as tableHeaderCellTheme
} from '../../../../../library/Table/TableHeaderCell';
import renderPropDescription from '../../shared/renderPropDescription';
import data from '../shared/data';

export default {
  id: 'custom-header-cell',
  title: 'Custom Header Cell',
  description: `Use the \`headerCell\`
[render prop](https://reactjs.org/docs/render-props.html) in a column definiton
to provide custom rendering control of all table header cells in that
column.

${renderPropDescription}

Some things to keep in mind:

1. Your custom renderer can build off of an existing component, e.g.
   \`TableHeaderCell\`, or it can be all new, e.g. \`th\`.
1. Because you are rendering a table column header, the rendered root element
   _must_ be either a \`th\` (recommended) or a \`td\`.
1. Refer to the [custom sortable header cell](#custom-sortable-header-cell) if
  your data is sortable.
1. Remember to accommodate the appearance-related Table props, like
  [\`density\`](#density), [\`highContrast\`](#high-contrast), if appropriate
  for your app.
1. If your app supports RTL languages, you can use \`theme.direction\` to
   conditionally apply the necessary styles.`,
  scope: {
    createStyledComponent,
    Table,
    palette,
    data,
    TableHeaderCell,
    tableHeaderCellTheme,
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
       *   import { componentTheme as tableHeaderCellTheme } from 'mineral-ui/Table/TableHeaderCell';
       */
      const headerCell = ({ props }) => {
        const { children, emoji } = props;

        const CustomTableHeaderCell = withTheme(({ theme: baseTheme }) => {
          const theme = tableHeaderCellTheme(baseTheme);

          const Root = createStyledComponent('th', {
            padding: 0,
            verticalAlign: 'bottom',

            '&:not(:first-child)': {
              borderLeft: theme.TableHeaderCell_borderVertical
            }
          });

          const Inner = createStyledComponent('span', {
            alignItems: 'flex-end',
            display: 'flex',
            padding:
              theme.TableHeaderCell_paddingVertical +
              ' ' +
              theme.TableHeaderCell_paddingHorizontal
          });

          const Content = createStyledComponent('span', {
            fontSize: theme.TableHeaderCell_fontSize,
            fontWeight: theme.TableHeaderCell_fontWeight,
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
                <Content>
                  <Emoji>{emoji}</Emoji>
                  {children}
                </Content>
              </Inner>
            </Root>
          );
        });

        return <CustomTableHeaderCell />;
      };

      const columns = [
        { content: 'Fruits', key: 'Fruits', emoji: '🍎', headerCell },
        { content: 'Vegetables', key: 'Vegetables', emoji: '🥗', headerCell },
        { content: 'Grains', key: 'Grains', emoji: '🌾', headerCell },
        { content: 'Dairy', key: 'Dairy', emoji: '🥚', headerCell },
        { content: 'Protein', key: 'Protein', emoji: '🍗', headerCell }
      ];

      return (
        <Table
          columns={columns}
          data={data}
          rowKey="Fruits"
          title="Delicious Foods"
          hideTitle />
      );
    }`
};
