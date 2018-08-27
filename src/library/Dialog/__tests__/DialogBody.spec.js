/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import Dialog from '../Dialog';
import DialogBody from '../DialogBody';
import { componentTheme } from '../DialogRow';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';

function shallowDialog(props = {}) {
  const dialogBodyProps = {
    ...props
  };

  return shallow(
    <Dialog title="Title">
      <DialogBody {...dialogBodyProps} />
    </Dialog>
  );
}

describe('DialogBody', () => {
  it('renders', () => {
    const dialog = shallowDialog();

    expect(dialog.exists()).toEqual(true);
  });

  describe('theme overrides', () => {
    testThemeOverrides(
      <DialogBody />,
      getProcessedComponentThemeKeys(componentTheme)
    );
  });
});
