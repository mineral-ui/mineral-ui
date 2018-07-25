/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import CardStatus, { componentTheme } from '../../Card/CardStatus';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';

function shallowCardStatus(props = {}) {
  const cardStatusProps = {
    children: 'children',
    variant: 'danger',
    ...props
  };
  return shallow(<CardStatus {...cardStatusProps} />);
}

describe('CardStatus', () => {
  it('renders', () => {
    const cardStatus = shallowCardStatus();

    expect(cardStatus.exists()).toEqual(true);
  });

  describe('theme overrides', () => {
    testThemeOverrides(
      <CardStatus variant="danger">children</CardStatus>,
      getProcessedComponentThemeKeys(componentTheme)
    );
  });
});
