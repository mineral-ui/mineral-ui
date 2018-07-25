/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import Link, { componentTheme } from '../Link';
import examples from '../../../website/app/demos/Link/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';

function shallowLink(props = {}) {
  const linkProps = {
    href: 'http://example.com',
    children: 'Children',
    ...props
  };
  return shallow(<Link {...linkProps} />);
}

describe('Link', () => {
  testDemoExamples(examples, { exclude: ['react-router'] });

  it('renders', () => {
    const link = shallowLink();

    expect(link.exists()).toEqual(true);
  });

  describe('theme overrides', () => {
    testThemeOverrides(
      <Link href="http://example.com">test</Link>,
      getProcessedComponentThemeKeys(componentTheme)
    );
  });
});
