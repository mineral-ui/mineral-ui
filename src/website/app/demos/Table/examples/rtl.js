/* @flow */
import { ThemeProvider } from '../../../../../library/themes';
import Table from '../../../../../library/Table';

const columnContent = '${columnContent}';
const direction = '${direction}';

export default {
  id: 'rtl',
  title: 'Bidirectionality',
  description: `Table reverses its alignment when the \`direction\` theme
variable is set to \`rtl\` (right-to-left).`,
  scope: { Table, ThemeProvider, columnContent, direction },
  source: `
    () => {
      const columns = [
        { content: 'ثمار', key: 'Fruits' },
        { content: 'خضروات', key: 'Vegetables', textAlign: 'end' },
        { content: 'بقوليات', key: 'Grains', textAlign: 'center' },
        { content: 'الألبان', key: 'Dairy', textAlign: 'justify' },
        { content: 'بروتين', key: 'Protein' }
      ];

      const data = [
        {
          Fruits: 'Pomello',
          Vegetables: 'بوك تشوي',
          Grains: 'شيا',
          Dairy: 'Pule',
          Protein: 'الصراصير'
        },
        {
          Fruits: 'فاكهة النجمة',
          Vegetables: 'Romanesco',
          Grains: 'الذرة',
          Dairy: 'Casu marzu',
          Protein: 'النظارات'
        },
        {
          Fruits: 'دوريان',
          Vegetables: 'Ramps',
          Grains: 'التف',
          Dairy: 'Vieux Lille',
          Protein: 'Inca nuts'
        }
      ];

      return (
        <div dir="rtl">
          <ThemeProvider theme={{ direction: 'rtl' }}>
            <Table
              columns={columns}
              data={data}
              rowKey="Fruits"
              title="الأطعمة اللذيذة" />
          </ThemeProvider>
        </div>
      )
    }`
};
