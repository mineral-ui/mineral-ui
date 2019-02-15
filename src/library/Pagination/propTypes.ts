/* @flow */
import { arrayOf, bool, func, number, object, oneOf } from 'prop-types';
import { enumToArray } from '../utils';
import { SIZE } from './constants';

export const paginationPropTypes = {
  currentPage: number.isRequired,
  messages: object, // TODO: improve using shape
  onPageChange: func.isRequired,
  onPageSizeChange: func,
  pageSize: number.isRequired,
  pageSizes: arrayOf(number),
  showPageJumper: bool,
  showPageNumbers: bool,
  showPageSizer: bool,
  size: oneOf(enumToArray(SIZE)),
  totalCount: number.isRequired,
  visibleRange: number
};
