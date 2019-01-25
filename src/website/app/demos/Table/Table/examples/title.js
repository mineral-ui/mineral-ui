/* @flow */
import Grid, { GridItem } from '../../../../../../library/Grid';
import Table from '../../../../../../library/Table';
import data from '../../common/data';

export default {
  id: 'title',
  title: 'Title',
  description: `Display a title for your Table with the \`title\` prop. You
can adjust the appearance (\`titleAppearance\`) and the rendered HTML element
([\`titleAs\`](/styling#customization-techniques-try-theming-first-{{8}}-{{14}}-prop)).
Use the \`hideTitle\` prop to hide the title visually, while maintaining
accessibility.`,
  scope: { Table, Grid, GridItem, data },
  source: `
    <Grid alignItems="end" breakpoints={['57em']}>
      <GridItem span={[12, 6]} marginBottom={['lg', 0]}>
        <Table
          title="Foods of the World"
          data={data}
          rowKey="Fruits"/>
      </GridItem>
      <GridItem span={[12, 6]}>
        <Table
          title="Foods of the World"
          titleAppearance="h2"
          titleAs="h3"
          data={data}
          rowKey="Fruits"/>
      </GridItem>
    </Grid>`
};
