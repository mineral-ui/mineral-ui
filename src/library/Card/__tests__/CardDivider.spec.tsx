/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import CardDivider from '../../Card/CardDivider';
import examples from '../../../website/app/demos/Card/CardDivider/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

function shallowCardDivider(props = {}) {
  return shallow(<CardDivider {...props} />);
}

describe('CardDivider', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const cardDivider = shallowCardDivider();

    expect(cardDivider.exists()).toEqual(true);
  });
});
