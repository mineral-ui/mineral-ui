/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import CardStatus from '../CardStatus';
import examples from '../../../website/app/demos/Card/CardStatus/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

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
});
