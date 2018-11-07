/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import Link, { linkTheme } from '../index';
import examples from '../../../website/app/demos/Link/Link/examples';
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
      getProcessedComponentThemeKeys(linkTheme)
    );
  });
});
