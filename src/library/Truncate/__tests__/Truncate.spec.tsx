/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import Truncate from '../Truncate';
import { mountInThemeProvider } from '../../../../utils/enzymeUtils';

/*
 * [1] This getter does not exist on the HTMLElement.prototype in JSDOM, so we
 *     must mock it on the global. `offsetWidth`, also used by Truncate, always
 *     returns 0, which is conveniently useful.
 * [2] Then we must clean up our global mocking in [1]
 */

const defaultProps = {
  children: 'Long text string that hopefully truncates'
};

function shallowTruncate(props = {}) {
  const TruncateProps = {
    ...defaultProps,
    ...props
  };
  return shallow(<Truncate {...TruncateProps} />);
}

describe('Truncate', () => {
  it('renders', () => {
    const Truncate = shallowTruncate();

    expect(Truncate.exists()).toEqual(true);
  });

  it('does not render tooltip when not truncated', () => {
    const [, truncate] = mountInThemeProvider(<Truncate {...defaultProps} />);

    expect(truncate).toMatchSnapshot();
  });

  it('renders a tooltip when truncated', () => {
    // [1]
    // $FlowFixMe
    Object.defineProperties(window.HTMLElement.prototype, {
      scrollWidth: {
        // Note that this mocked getter is designed to always trigger truncation
        // because it's greater than offsetWidth
        get: () => 10,
        configurable: true
      }
    });

    const [, truncate] = mountInThemeProvider(<Truncate {...defaultProps} />);

    // [2]
    // $FlowFixMe
    Object.defineProperties(window.HTMLElement.prototype, {
      scrollWidth: {
        get: undefined
      }
    });

    expect(truncate).toMatchSnapshot();
  });
});
