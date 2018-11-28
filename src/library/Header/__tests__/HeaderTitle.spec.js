/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import testDemoExamples from '../../../../utils/testDemoExamples';
import Header, { HeaderTitle } from '../../Header';
import examples from '../../../website/app/demos/Header/Header/examples';

function shallowHeaderTitle(headerProps = {}, backButtonProps = {}) {
  return shallow(
    <Header {...headerProps}>
      <HeaderTitle {...backButtonProps} />
    </Header>
  );
}

describe('HeaderTitle', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const headerTitle = shallowHeaderTitle();

    expect(headerTitle.exists()).toEqual(true);
  });
});
