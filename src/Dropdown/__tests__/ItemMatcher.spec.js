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
import ItemMatcher from '../ItemMatcher';
import { statesData as items } from '../../website/app/demos/Select/components/selectData';

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
      'conn'.split('').forEach(key => {
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
      'colo'.split('').forEach(key => {
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
