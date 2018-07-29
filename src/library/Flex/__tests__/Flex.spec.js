/* @flow */
import React from 'react';
import { shallow, mount } from 'enzyme';
import testDemoExamples from '../../../../utils/testDemoExamples';
import { ThemeProvider } from '../../themes';
import Flex, { FlexItem } from '../../Flex';
import examples from '../../../website/app/demos/Flex/examples/Flex';

function shallowFlex(flexProps = {}, flexItemProps = {}) {
  return shallow(
    <Flex {...flexProps}>
      <FlexItem {...flexItemProps} />
    </Flex>
  );
}

const mountFlex = (flexProps = {}, flexItemProps = {}, rtl) =>
  mount(
    <ThemeProvider theme={rtl && { direction: 'rtl' }}>
      <Flex {...flexProps}>
        <FlexItem {...flexItemProps}>A</FlexItem>
        <FlexItem>B</FlexItem>
      </Flex>
    </ThemeProvider>
  );

const assertGutterProps = (flexProps, flexItemProps, rtl) => {
  const wrapper = mountFlex(
    { gutterWidth: 'DEFAULT', ...flexProps },
    flexItemProps,
    rtl
  );
  const flex = wrapper.find(Flex);
  const flexItemA = wrapper.find(FlexItem).at(0);
  const flexItemB = wrapper.find(FlexItem).at(1);

  expect(flex.props()).toMatchSnapshot('Flex');
  expect(flexItemA.props()).toMatchSnapshot('FlexItem A');
  expect(flexItemB.props()).toMatchSnapshot('FlexItem B');
};

describe('Flex', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const flex = shallowFlex();

    expect(flex.exists()).toEqual(true);
  });

  fdescribe('gutter', () => {
    it('applies correctly with default direction', () => {
      assertGutterProps();
    });

    it('applies correctly with reverse direction', () => {
      assertGutterProps({ direction: 'row-reverse' });
    });

    it('does not apply with column direction', () => {
      assertGutterProps({ direction: 'column' });
    });

    it('applies correctly with responsive direction', () => {
      assertGutterProps({
        direction: ['row', 'row-reverse', 'column', 'column-reverse']
      });
    });

    it('applies correctly with override', () => {
      assertGutterProps({}, { marginEnd: 'OVERRIDE' });
    });

    it('applies correctly with responsive override', () => {
      assertGutterProps({}, { marginEnd: ['OVERRIDE1', 'OVERRIDE2'] });
    });

    it('applies correctly with responsive direction and override', () => {
      assertGutterProps(
        { direction: ['row', 'row-reverse'] },
        { marginEnd: ['OVERRIDE1', 'OVERRIDE2'] }
      );
    });
  });
});
