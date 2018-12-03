/* @flow */
import _Loadable from 'jaybe-react-loadable';
import Loading from './Loading';

export default function Loadable(options: Object) {
  return _Loadable({
    delay: 500,
    loading: Loading,
    timeout: 10000,
    ...options
  });
}
