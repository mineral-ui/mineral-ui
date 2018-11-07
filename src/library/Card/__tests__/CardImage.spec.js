/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { CardImage } from '../../Card';
import examples from '../../../website/app/demos/Card/CardImage/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

function shallowCardImage(props = {}) {
  const cardImageProps = {
    ...props
  };
  return shallow(<CardImage {...cardImageProps} />);
}

describe('CardImage', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const cardImage = shallowCardImage();

    expect(cardImage.exists()).toEqual(true);
  });
});
