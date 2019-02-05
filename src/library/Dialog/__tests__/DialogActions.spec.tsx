/* @flow */
import React, { Fragment } from 'react';
import { shallow } from 'enzyme';
import Button from '../../Button/Button';
import DialogActions from '../DialogActions';
import examples from '../../../website/app/demos/Dialog/DialogActions/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

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

  testDemoExamples(examples);
});
