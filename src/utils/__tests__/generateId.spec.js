/* @flow */
import { generateId, resetId } from '../index';

describe('generateId', () => {
  let id;

  it('generates an id', () => {
    id = generateId();
    expect(id).toBe('1');
  });

  it('increments generated id', () => {
    id = generateId();
    expect(id).toBe('2');
  });

  it('resets generated id', () => {
    resetId();
    id = generateId();
    expect(id).toBe('1');
  });
});
