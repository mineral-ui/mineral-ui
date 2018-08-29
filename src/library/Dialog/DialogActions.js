/* @flow */
import React, { cloneElement } from 'react';
import Button from '../Button';
import { findAllByType } from '../utils/children';
import { createStyledComponent } from '../styles';

type Props = {
  /** Rendered [Button(s)](/components/button) */
  children?: React$Element<*> | Array<React$Element<*>>,
  /** Available variants */
  variant?: 'danger' | 'success' | 'warning'
};

export const componentTheme = (baseTheme: Object) => ({
  DialogActionsItem_margin: baseTheme.space_stack_sm,

  ...baseTheme
});

const Root = createStyledComponent(
  'div',
  ({ theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);
    const marginProperty =
      theme.direction === 'rtl' ? 'marginLeft' : 'marginRight';

    return {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'flex-end',

      '& > *:not(:last-child)': {
        [marginProperty]: theme.DialogActionsItem_margin
      }
    };
  },
  {
    displayName: 'DialogActions'
  }
);

/**
 * DialogActions renders primary and secondary actions inside
 * [Dialog](/components/dialog).
 */
export default function DialogActions(props: Props) {
  const { children, variant, ...rootProps } = props;
  let actions = findAllByType(children, Button);
  const lastIndex = actions.length - 1;
  actions = actions.map((action, index) => {
    const { props } = action;
    /* eslint-disable react/prop-types */
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
    /* eslint-enable react/prop-types */
  });

  return <Root {...rootProps}>{actions}</Root>;
}
