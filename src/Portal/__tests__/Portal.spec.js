/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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

  it('calls renderCallback if provided', () => {
    const renderCallback = jest.fn();
    portal.unmount();
    portal = mountPortal({ renderCallback });

    expect(renderCallback).toHaveBeenCalled();
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
