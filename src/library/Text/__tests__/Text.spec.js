/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import Text from '../Text';
import textWithThemeOverrides from '../textWithThemeOverrides';
import examples from '../../../website/app/demos/Text/Text/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';
import { mountInWrapper } from '../../../../utils/enzymeUtils';

function shallowText(props = {}) {
  return shallow(<Text {...props}>A</Text>);
}

describe('Text', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const text = shallowText();

    expect(text.exists()).toEqual(true);
  });

  describe('textWithThemeOverrides function', () => {
    const themedText = textWithThemeOverrides({
      appearance: 'h1',
      children: 'Test',
      displayName: 'TestComponent',
      textComponent: Text,
      theme: {
        TestComponent_color: 'red',
        TestComponent_fontSize: '2em',
        TestComponent_fontWeight: 800
      }
    });

    const text = mountInWrapper(themedText).find(Text);

    expect(text).toMatchSnapshot();
  });
});
