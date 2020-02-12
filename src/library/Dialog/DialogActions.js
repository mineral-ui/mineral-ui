/* @flow */
import React, { cloneElement } from 'react';
import Button from '../Button';
import { findAllByType } from '../utils/children';
import { dialogActionsPropTypes } from './propTypes';
import { DialogActionsRoot as Root } from './styled';

import type { DialogActionsProps } from './types';

const DialogActions = (props: DialogActionsProps) => {
  const { children, variant, ...rootProps } = props;
  let actions = findAllByType(children, Button);
  if (actions && actions.length) {
    const lastIndex = actions.length - 1;
    actions = actions.map((action, index) => {
      const { props } = action;
      return cloneElement(action, {
        key: index,
        minimal:
          props.minimal !== undefined ? props.minimal : index !== lastIndex,
        primary:
          props.primary !== undefined ? props.primary : index === lastIndex,
        variant:
          props.variant !== undefined
            ? props.variant
            : index === lastIndex
            ? variant
            : undefined
      });
    });
  }

  return <Root {...rootProps}>{actions}</Root>;
};

DialogActions.displayName = 'DialogActions';
DialogActions.propTypes = dialogActionsPropTypes;

export default DialogActions;
