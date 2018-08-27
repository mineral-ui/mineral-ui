/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import DialogFooter from '../DialogFooter';
import { componentTheme } from '../DialogRow';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';

function shallowDialogFooter(props = {}) {
  const dialogFooterProps = {
    ...props
  };

  return shallow(<DialogFooter {...dialogFooterProps} />);
}

describe('DialogFooter', () => {
  it('renders', () => {
    const dialogFooter = shallowDialogFooter();

    expect(dialogFooter.exists()).toEqual(true);
  });

  describe('theme overrides', () => {
    testThemeOverrides(
      <DialogFooter />,
      getProcessedComponentThemeKeys(componentTheme)
    );
  });
});
