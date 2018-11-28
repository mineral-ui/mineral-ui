/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import testDemoExamples from '../../../../utils/testDemoExamples';
import Header, { HeaderBackButton } from '../../Header';
import examples from '../../../website/app/demos/Header/Header/examples';

function shallowHeaderBackButton(headerProps = {}, backButtonProps = {}) {
  return shallow(
    <Header {...headerProps}>
      <HeaderBackButton {...backButtonProps} />
    </Header>
  );
}

describe('HeaderBackButton', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const headerBackButton = shallowHeaderBackButton();

    expect(headerBackButton.exists()).toEqual(true);
  });
});
