/* @flow */
import { ThemeProvider } from '../../../../../library/themes';
import Table from '../../../../../library/Table';

const columnContent = '${columnContent}';
const direction = '${direction}';

export default {
  id: 'rtl',
  title: 'Bidirectionality',
  description: `Table reverses its alignment when the \`direction\` theme
variable is set to \`rtl\` (right-to-left). You can use the \`messages\` prop,
as in the example below, to set the various messages announced by assistive
technologies within the component.`,
  scope: { Table, ThemeProvider, columnContent, direction },
  source: `
    () => {
      const columns = [
        { content: 'ثمار', key: 'Fruits', sortable: true },
        { content: 'خضروات', key: 'Vegetables', textAlign: 'center' },
        { content: 'بقوليات', key: 'Grains' },
        { content: 'الألبان', key: 'Dairy', sortable: true, textAlign: 'end' },
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

      const messages = {
        deselectAllRows: 'قم بإلغاء تحديد جميع الصفوف',
        deselectRow: 'إلغاء الصف',
        selectAllRows: 'حدد جميع الصفوف',
        selectedRows: 'الصفوف المختارة',
        selectRow: 'حدد الصف',
        sortColumnAscending: 'ترتيب العمود في تصاعدي الطلب',
        sortColumnDescending: 'ترتيب العمود في تنازلي الطلب'
      };

      return (
        <div dir="rtl">
          <ThemeProvider theme={{ direction: 'rtl' }}>
            <Table
              columns={columns}
              data={data}
              rowKey="Fruits"
              title="الأطعمة اللذيذة"
              messages={messages} />
          </ThemeProvider>
        </div>
      )
    }`
};
