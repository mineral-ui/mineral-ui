/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import CardDivider, { componentTheme } from '../../Card/CardDivider';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';

function shallowCardDivider(props = {}) {
  return shallow(<CardDivider {...props} />);
}

describe('CardDivider', () => {
  it('renders', () => {
    const cardDivider = shallowCardDivider();

    expect(cardDivider.exists()).toEqual(true);
  });

  describe('theme overrides', () => {
    testThemeOverrides(
      <CardDivider />,
      getProcessedComponentThemeKeys(componentTheme)
    );
  });
});
