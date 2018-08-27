/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { componentTheme } from '../DialogRow';
import DialogHeader from '../DialogHeader';
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

  describe('theme overrides', () => {
    testThemeOverrides(
      <DialogHeader />,
      getProcessedComponentThemeKeys(componentTheme)
    );
  });
});
