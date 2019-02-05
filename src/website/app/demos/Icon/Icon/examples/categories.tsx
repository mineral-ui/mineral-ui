/* @flow */
import Loadable from '../../../../Loadable';

const IconsByCategory = Loadable({
  loader: () => import('../../common/IconsByCategory')
});

export default {
  id: 'categories',
  title: 'Icons by Category',
  hideSource: true,
  scope: { IconsByCategory },
  source: `<IconsByCategory />`
};
