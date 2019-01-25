/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import CardActions from '../../Card/CardActions';
import examples from '../../../website/app/demos/Card/CardActions/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

function shallowCardActions(props = {}) {
  const cardActionsProps = {
    children: 'children',
    ...props
  };
  return shallow(<CardActions {...cardActionsProps} />);
}

describe('CardActions', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const cardActions = shallowCardActions();

    expect(cardActions.exists()).toEqual(true);
  });
});
