/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import CardStatus from '../CardStatus';
import examples from '../../../website/app/demos/Card/CardStatus/examples';
import { cardStatusTheme } from '../themes';
import testDemoExamples from '../../../../utils/testDemoExamples';
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
  testDemoExamples(examples);

  it('renders', () => {
    const cardStatus = shallowCardStatus();

    expect(cardStatus.exists()).toEqual(true);
  });

  describe('theme overrides', () => {
    testThemeOverrides(
      <CardStatus variant="danger">children</CardStatus>,
      getProcessedComponentThemeKeys(cardStatusTheme)
    );
  });
});
