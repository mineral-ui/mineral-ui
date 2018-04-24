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
  let menu;

  describe('renders', () => {
    it('renders', () => {
      menu = shallowMenu();

      expect(menu.exists()).toEqual(true);
    });
  });

  describe('renderItem prop', () => {
    let menu, renderItem;

    beforeEach(() => {
      renderItem = jest
        .fn()
        .mockImplementation(({ item, itemProps: _itemProps }) => {
          const {
            render: ignoreRender,
            text: ignoreText,
            index: ignoreIndex,
            item: ignoreItem,
            variant: ignoreVariant,
            ...itemProps
          } = _itemProps;
          return <div {...itemProps}>{item.text}</div>;
        });

      [, menu] = mountMenu({ renderItem });
    });

    it('calls renderItem prop with expected arguments', () => {
      expect(renderItem).toBeCalledWith(
        expect.objectContaining({
          index: expect.any(Number),
          item: expect.any(Object),
          itemProps: expect.objectContaining({
            children: expect.any(String),
            disabled: undefined,
            index: expect.any(Number),
            item: expect.any(Object),
            onClick: undefined,
            onKeyDown: expect.any(Function),
            render: expect.any(Function),
            tabIndex: 0,
            text: expect.any(String),
            variant: undefined
          })
        })
      );
    });

    it('renders expected content', () => {
      expect(menu).toMatchSnapshot();
    });
  });

  testDemoExamples(examples);
});
