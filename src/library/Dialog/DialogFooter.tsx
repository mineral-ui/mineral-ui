/* @flow */
import React from 'react';
import { DialogFooterRoot as Root } from './styled';

import { dialogFooterPropTypes } from './propTypes';
import type { DialogFooterProps } from './types';

const DialogFooter = (props: DialogFooterProps) => <Root {...props} />;

DialogFooter.displayName = 'DialogFooter';
DialogFooter.propTypes = dialogFooterPropTypes;

export default DialogFooter;
