/* @flow */
import React, { Fragment } from 'react';
import { shallow } from 'enzyme';
import Button from '../../Button/Button';
import DialogActions, { componentTheme } from '../DialogActions';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';

const children = (
  <Fragment>
    <Button>Cancel</Button>
    <Button>Action</Button>
  </Fragment>
);

function shallowDialogActions(props = {}) {
  const dialogActionsProps = {
    ...props
  };

  return shallow(
    <DialogActions {...dialogActionsProps}>{children}</DialogActions>
  );
}

describe('DialogActions', () => {
  it('renders', () => {
    const dialogActions = shallowDialogActions();

    expect(dialogActions.exists()).toEqual(true);
  });

  describe('theme overrides', () => {
    testThemeOverrides(
      <DialogActions>{children}</DialogActions>,
      getProcessedComponentThemeKeys(componentTheme)
    );
  });
});
