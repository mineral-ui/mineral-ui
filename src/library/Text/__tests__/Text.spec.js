/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import Text from '../Text';
import textWithThemeOverrides from '../textWithThemeOverrides';
import examples from '../../../website/app/demos/Text/examples';
import renderComponentStylesToString from '../../../../utils/renderComponentStylesToString';
import testDemoExamples from '../../../../utils/testDemoExamples';
import testThemeOverrides from '../../../../utils/testThemeOverrides';

function shallowText(props = {}) {
  return shallow(<Text {...props}>A</Text>);
}

const theme = {
  TestComponent_color: 'red',
  TestComponent_fontSize: '2em',
  TestComponent_fontWeight: 800
};

describe('Text', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const text = shallowText();

    expect(text.exists()).toEqual(true);
  });

  describe('theme overrides', () => {
    testThemeOverrides(<Text>test</Text>, [
      'Text_color',
      'Text_fontSize',
      'Text_lineHeight',
      'Text_marginBottom'
    ]);
  });

  describe('textWithThemeOverrides function', () => {
    const themedText = textWithThemeOverrides({
      appearance: 'h1',
      children: 'Test',
      displayName: 'TestComponent',
      textComponent: Text,
      theme
    });

    const themedTextStyles = renderComponentStylesToString(themedText);

    expect(themedTextStyles.includes('color:red')).toEqual(true);
    expect(themedTextStyles.includes('font-size:32px')).toEqual(true);
    expect(themedTextStyles.includes('font-weight:800')).toEqual(true);
  });
});
