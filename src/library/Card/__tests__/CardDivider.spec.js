/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import CardDivider from '../../Card/CardDivider';
import examples from '../../../website/app/demos/Card/CardDivider/examples';
import { cardDividerTheme } from '../themes';
import testDemoExamples from '../../../../utils/testDemoExamples';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';

function shallowCardDivider(props = {}) {
  return shallow(<CardDivider {...props} />);
}

describe('CardDivider', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const cardDivider = shallowCardDivider();

    expect(cardDivider.exists()).toEqual(true);
  });

  describe('theme overrides', () => {
    testThemeOverrides(
      <CardDivider />,
      getProcessedComponentThemeKeys(cardDividerTheme)
    );
  });
});
