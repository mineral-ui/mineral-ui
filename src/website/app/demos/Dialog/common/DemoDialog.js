/* @flow */
import withProps from 'recompose/withProps';
import styled from '@emotion/styled';
import Dialog from '../../../../../library/Dialog';

export default withProps({
  closeOnClickOutside: false,
  closeOnEscape: false,
  disableFocusOnOpen: true,
  disableFocusTrap: true,
  isOpen: true,
  preventCloseButtonClose: true,
  usePortal: false
})(
  styled(Dialog)({
    position: 'static'
  })
);
