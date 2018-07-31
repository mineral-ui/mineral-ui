/* @flow */
import { componentTheme } from '../../../../library/Pagination/Pagination';
import examples from './examples';
import bestPractices from './bestPractices';

const doc = require('!!react-docgen-loader!../../../../library/Pagination/Pagination');

export default [
  {
    bestPractices,
    componentTheme,
    doc,
    examples,
    slug: 'pagination',
    title: 'Pagination',
    whenHowToUse: `Pagination improves user experience with a large data set or
other collection of items by distributing it across multiple pages, decreasing
the vertical space consumed and load/render times. It is most useful when
implemented in conjunction with tables and lists, such as search results and
directories.

Pagination is best placed below the data or items it paginates. However, if
pages have variable heights (i.e. items on the page have different heights),
then you may consider placing it above, instead.

If the remainder of data or items on the final page does not match the page
size, it is recommended to add empty rows or items in order to maintain the same
vertical space as the other pages.`
  }
];
