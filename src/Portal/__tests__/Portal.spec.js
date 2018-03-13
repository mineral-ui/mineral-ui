/* @flow */
import React from 'react';
import { mount } from 'enzyme';
import Portal from '../Portal';

function mountPortal(props = {}) {
  const portalProps = {
    children: <div id="portalChild">child</div>,
    ...props
  };
  return mount(<Portal {...portalProps} />);
}

describe('Portal', () => {
  let portal, portalChild, portalNode;

  beforeEach(() => {
    portal = mountPortal();
    portalChild = document.getElementById('portalChild');
    portalNode = portalChild && portalChild.parentNode;
  });

  afterEach(() => {
    portal.unmount();
  });

  it('renders', () => {
    expect(portal.exists()).toEqual(true);
  });

  it('appends a portal DOM node to the body', () => {
    const lastChildInBody = document.body && document.body.lastElementChild;

    expect(portalNode).toBeTruthy();
    expect(portalNode).toEqual(lastChildInBody);
  });

  it('renders content to portal DOM node', () => {
    expect(portalChild).toBeTruthy();
    expect(portalNode).toBeTruthy();
  });

  it('calls callback if provided', () => {
    const callback = jest.fn();
    portal.unmount();
    portal = mountPortal({ callback });

    expect(callback).toHaveBeenCalled();
  });

  describe('when unmounted', () => {
    beforeEach(() => {
      portal.unmount();
      portalChild = document.getElementById('portalChild');
      portalNode = portalChild && portalChild.parentNode;
    });

    it('removes portal DOM node', () => {
      expect(portalChild).toBeFalsy();
      expect(portalNode).toBeFalsy();
    });
  });

  describe('when updated', () => {
    beforeEach(() => {
      portal = portal.setProps({
        children: <div id="portalChild">updated child</div>
      });
      portalChild = document.getElementById('portalChild');
    });

    it('updates portal DOM node', () => {
      expect(portalChild && portalChild.textContent).toEqual('updated child');
    });
  });
});
