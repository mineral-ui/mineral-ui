/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { mountInThemeProvider } from '../../../../utils/enzymeUtils';
import Menu from '../Menu';
import examples from '../../../website/app/demos/Menu/examples/Menu';
import testDemoExamples from '../../../../utils/testDemoExamples';

import type { Items } from '../Menu';

const data: Items = [{ text: 'Item 1' }, { text: 'Item 2' }];

function shallowMenu(props = {}) {
  const menuProps = {
    children: <div>children</div>,
    ...props
  };

  return shallow(<Menu {...menuProps} />);
}

function mountMenu(props = {}) {
  const menuProps = {
    data,
    ...props
  };

  return mountInThemeProvider(<Menu {...menuProps} />);
}

describe('Menu', () => {
  testDemoExamples(examples);

  let menu;

  describe('renders', () => {
    it('renders', () => {
      menu = shallowMenu();

      expect(menu.exists()).toEqual(true);
    });
  });

  describe('item prop', () => {
    let menu, item;

    beforeEach(() => {
      item = jest.fn().mockImplementation(({ props }) => {
        const {
          render: ignoreRender,
          text: ignoreText,
          index: ignoreIndex,
          item,
          variant: ignoreVariant,
          ...restProps
        } = props;
        return <div {...restProps}>{item.text}</div>;
      });

      [, menu] = mountMenu({ item });
    });

    it('calls item prop with expected arguments', () => {
      expect(item).toBeCalledWith(
        expect.objectContaining({
          props: expect.objectContaining({
            children: expect.any(String),
            disabled: undefined,
            index: expect.any(Number),
            item: expect.any(Object),
            onClick: undefined,
            onKeyDown: expect.any(Function),
            tabIndex: 0,
            text: expect.any(String)
          })
        })
      );
    });

    it('renders expected content', () => {
      expect(menu).toMatchSnapshot();
    });
  });
});
