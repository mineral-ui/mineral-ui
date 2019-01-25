/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import CardBlock from '../../Card/CardBlock';
import examples from '../../../website/app/demos/Card/CardBlock/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

function shallowCardBlock(props = {}) {
  const cardBlockProps = {
    children: 'children',
    ...props
  };
  return shallow(<CardBlock {...cardBlockProps} />);
}

describe('CardBlock', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const cardBlock = shallowCardBlock();

    expect(cardBlock.exists()).toEqual(true);
  });
});
