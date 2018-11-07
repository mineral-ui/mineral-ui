/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { dialogRowTheme } from '../themes';
import DialogHeader from '../DialogHeader';
import examples from '../../../website/app/demos/Dialog/DialogHeader/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';

function shallowDialogHeader(props = {}) {
  const dialogHeaderProps = {
    ...props
  };

  return shallow(<DialogHeader {...dialogHeaderProps} />);
}

describe('DialogHeader', () => {
  it('renders', () => {
    const dialogHeader = shallowDialogHeader();

    expect(dialogHeader.exists()).toEqual(true);
  });

  testDemoExamples(examples);

  describe('theme overrides', () => {
    testThemeOverrides(
      <DialogHeader />,
      getProcessedComponentThemeKeys(dialogRowTheme)
    );
  });
});
