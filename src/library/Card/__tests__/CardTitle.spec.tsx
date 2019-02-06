/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import CardTitle from '../CardTitle';
import examples from '../../../website/app/demos/Card/CardTitle/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

function shallowCardTitle(props = {}) {
  const cardTitleProps = {
    children: 'children',
    ...props
  };
  return shallow(<CardTitle {...cardTitleProps} />);
}

describe('CardTitle', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const cardTitle = shallowCardTitle();

    expect(cardTitle.exists()).toEqual(true);
  });
});
