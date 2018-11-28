/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import testDemoExamples from '../../../../utils/testDemoExamples';
import Header, { HeaderContainer } from '../../Header';
import examples from '../../../website/app/demos/Header/Header/examples';

function shallowHeaderContainer(headerProps = {}, backButtonProps = {}) {
  return shallow(
    <Header {...headerProps}>
      <HeaderContainer {...backButtonProps} />
    </Header>
  );
}

describe('HeaderContainer', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const headerContainer = shallowHeaderContainer();

    expect(headerContainer.exists()).toEqual(true);
  });
});
