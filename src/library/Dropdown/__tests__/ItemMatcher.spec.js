/* @flow */
import ItemMatcher from '../ItemMatcher';
import { statesData as items } from '../../../website/app/demos/Select/components/selectData';

describe('ItemMatcher', () => {
  describe('#findMatchingItem', () => {
    it('finds first item starting with character', () => {
      const itemMatcher = new ItemMatcher();
      const item = itemMatcher.findMatchingItem(items, undefined, 'c');

      expect(item && item.text).toEqual('California');
    });

    it('finds next item starting with same character after timeout', () => {
      const itemMatcher = new ItemMatcher();
      let item;
      let itemIndex;

      jest.useFakeTimers();
      item = itemMatcher.findMatchingItem(items, undefined, 'c');
      itemIndex = item ? items.indexOf(item) : undefined;
      jest.runTimersToTime(500);
      item = itemMatcher.findMatchingItem(items, itemIndex, 'c');
      jest.runAllTimers();

      expect(item && item.text).toEqual('Colorado');
    });

    it('finds next item from start if reach end', () => {
      const itemMatcher = new ItemMatcher();
      let item;
      let itemIndex;

      jest.useFakeTimers();
      // Start on Connecticut
      'conn'.split('').forEach((key) => {
        item = itemMatcher.findMatchingItem(items, undefined, key);
      });
      itemIndex = item ? items.indexOf(item) : undefined;
      jest.runTimersToTime(500);

      // Type another c
      item = itemMatcher.findMatchingItem(items, itemIndex, 'c');
      jest.runAllTimers();

      expect(item && item.text).toEqual('California');
    });

    it('finds first item matching multiple characters if entered before timeout', () => {
      const itemMatcher = new ItemMatcher();
      let item;

      jest.useFakeTimers();
      'colo'.split('').forEach((key) => {
        item = itemMatcher.findMatchingItem(items, undefined, key);
      });
      jest.runAllTimers();

      expect(item && item.text).toEqual('Colorado');
    });

    it('does not match on whitespace characters', () => {
      const itemMatcher = new ItemMatcher();
      items.push({ text: ' ', value: ' ' });
      const item = itemMatcher.findMatchingItem(items, undefined, ' ');

      expect(item).toBeUndefined();
    });
  });
});
