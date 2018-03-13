/* @flow */
import { composeEventHandlers } from '../index';

describe('composeEventHandlers', () => {
  let handler;

  describe('when no truthy functions provided', () => {
    it('returns undefined', () => {
      const fn1 = undefined;
      const fn2 = null;
      handler = composeEventHandlers(fn1, fn2);

      expect(handler).toEqual(undefined);
    });
  });

  describe('when 1 truthy function provided', () => {
    it('returns original handler function', () => {
      const fn1 = undefined;
      const fn2 = () => {};
      handler = composeEventHandlers(fn1, fn2);

      expect(handler).toEqual(fn2);
    });
  });

  describe('when multiple truthy functions provided', () => {
    let fn1, fn2, handler;

    beforeEach(() => {
      fn1 = jest.fn();
      fn2 = jest.fn();
      handler = composeEventHandlers(fn1, fn2);
    });

    it('returns a new handler function', () => {
      expect(typeof handler).toEqual('function');
      expect(handler).not.toEqual(fn1);
      expect(handler).not.toEqual(fn2);
    });

    describe('when composed handler is invoked', () => {
      it('calls each function', () => {
        handler && handler({});

        expect(fn1).toHaveBeenCalled();
        expect(fn2).toHaveBeenCalled();
      });

      it('passes args to each function', () => {
        const args = [{}, 'foo', 'bar'];
        handler && handler(...args);

        expect(fn1).toHaveBeenLastCalledWith(...args);
        expect(fn2).toHaveBeenLastCalledWith(...args);
      });

      describe('when a handler calls event.preventDefault()', () => {
        xit('does not call subsequent handlers');
      });
    });
  });
});
