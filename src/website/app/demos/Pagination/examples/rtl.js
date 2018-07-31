/* @flow */
import { Component } from 'react';
import Pagination from '../../../../../library/Pagination';
import Table from '../../../../../library/Table';
import { ThemeProvider } from '../../../../../library/themes';
import DemoLayout from '../../shared/DemoLayout';

export const columns = [
  { content: 'معدني', key: 'اسم' },
  { content: 'اللون', key: 'اللون' },
  { content: 'بريق', key: 'بريق' },
  { content: 'نظام الكريستال', key: 'النظام' },
  { content: 'الكريستال العادة', key: 'عادة' }
];

export const data = [
  {
    اسم: 'الملكيت',
    اللون: 'الخضر المختلفة',
    بريق: 'الأسمنت المسلح',
    النظام: 'أحادي الميلان',
    عادة: 'إبري'
  },
  {
    اسم: 'الفلوريت معدن متبلور',
    اللون: 'عديم اللون',
    بريق: 'زجاجي',
    النظام: 'متساوي القياس',
    عادة: 'عقدي'
  },
  {
    اسم: 'المغنتيت',
    اللون: 'أسود',
    بريق: 'معدني',
    النظام: 'متساوي القياس',
    عادة: 'ثماني السطوح'
  },
  {
    اسم: 'كوارتز',
    اللون: 'عديم اللون',
    بريق: 'زجاجي',
    النظام: 'ثلاثي الزوايا أو سداسية',
    عادة: 'المنشور ذو الوجهين'
  },
  {
    اسم: 'اللازورد معدن أزرق',
    اللون: 'الأزرق السماوي',
    بريق: 'زجاجي',
    النظام: 'أحادي الميلان',
    عادة: 'المنشورية ، الرواسب'
  },
  {
    اسم: 'الهيماتيت حجر الدم',
    اللون: 'رمادى معدنى',
    بريق: 'معدني لرائع',
    النظام: 'ثلاثي الزوايا',
    عادة: 'ميكائي أو بلاثي ، وريدات ، أووليت'
  },
  {
    اسم: 'البيريت معدن',
    اللون: 'شاحب أصفر عاكس',
    بريق: 'لامع ، لامعة',
    النظام: 'متساوي القياس',
    عادة: 'مكعب ، بين المشترك ، مشع ، هابط'
  },
  {
    اسم: 'الزوسيت',
    اللون: 'أبيض ، مختلف',
    بريق: 'زجاجي, لؤلؤي على أسطح الانقسام',
    النظام: 'معيني متعامد المحاور',
    عادة: 'المنشورية مع الانشقاقات'
  },
  {
    اسم: 'زيلونيت',
    اللون: 'بني أخضر ، مختلف',
    بريق: 'لؤلؤي',
    النظام: 'أحادي الميلان',
    عادة: 'ترابي ، لا تقابلات بلورية واضحة'
  },
  {
    اسم: 'Howlite',
    اللون: 'أبيض, عديم اللون',
    بريق: 'زجاجي, بريق',
    النظام: 'أحادي الميلان',
    عادة: 'هائل للعقيدة'
  },
  {
    اسم: 'التورمالين',
    اللون: 'أسود ، مختلف',
    بريق: 'زجاجي, أحيانا راتنجي',
    النظام: 'ثلاثي الزوايا',
    عادة: 'متوازي وممدود'
  },
  {
    اسم: 'Celestite',
    اللون: 'عديم اللون، مختلف',
    بريق: 'زجاجي، لؤلؤي على الانشقاقات',
    النظام: 'معيني متعامد المحاور',
    عادة: 'ليفي ، لاميلار'
  },
  {
    اسم: 'فانادينيت',
    اللون: 'أحمر مشرق ، مختلف',
    بريق: 'راتينجي',
    النظام: 'مسدس الشكل',
    عادة: 'المنشورية ، ليفية'
  },
  {
    اسم: 'الأراغونيت',
    اللون: 'أبيض ، مختلف',
    بريق: 'زجاجي، راتنجات على أسطح الكسر',
    النظام: 'معيني متعامد المحاور',
    عادة: 'عينية ، عمودي'
  }
];

export default {
  id: 'rtl',
  title: 'Bidirectionality',
  description: `When the \`direction\` theme variable is set to \`rtl\`
(right-to-left), alignment and page order are reversed for Pagination. The
\`messages\` prop allows customization of various messages — both those that are
displayed, and those that are announced by assistive technologies.`,
  scope: {
    Component,
    columns,
    data,
    DemoLayout,
    Pagination,
    Table,
    ThemeProvider
  },
  source: `
    () => {
      const pageSizes = [2, 3, 4];
      const itemText = (pageSize) => pageSize + ' لكل صفحة';
      const status = (category, first, last, total) =>
        first + '–' + last + ' من ' + total + ' ' + category;
      const pageLabel = (isCurrentPage, isLastPage, page) =>
        page + (isCurrentPage ? ', الصفحه الحاليه' : '') + (isLastPage ? ', آخر صفحة' : '');
      const messages = {
        category: 'المعادن',
        label: 'ترقيم الصفحات',
        pages: { pageLabel, next: 'التالى', previous: 'سابق' },
        pageJumper: { label: 'اذهب الى الصفحة', placeholder: 'صفحة #' },
        pageSizer: { status, itemText }
      };

      class PaginatedTable extends Component {
        constructor(props) {
          super(props);

          this.state = {
            currentPage: 1,
            pageSize: pageSizes[1]
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
            <div dir="rtl">
              <ThemeProvider theme={{ direction: 'rtl' }}>
                <DemoLayout>
                  <Table
                    data={slicedData}
                    rowKey="اسم"
                    columns={columns}
                    title="المعادن"
                    hideTitle
                  />
                  <Pagination
                    rtl
                    messages={messages}
                    currentPage={currentPage}
                    onPageSizeChange={this.handlePageSizeChange}
                    onPageChange={this.handlePageChange}
                    showPageJumper
                    showPageSizer
                    pageSize={pageSize}
                    pageSizes={pageSizes}
                    totalCount={data.length}
                  />
                </DemoLayout>
              </ThemeProvider>
            </div>
          );
        }
      }

      return <PaginatedTable data={data} />;
    }
  `
};
