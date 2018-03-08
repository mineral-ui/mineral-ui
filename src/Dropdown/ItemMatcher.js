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
import type { Item } from '../Menu/MenuItem';
import type { Items } from '../Menu/Menu';

export default class ItemMatcher {
  keys: string = '';

  keysTimer: any;

  searchIndex: number;

  findMatchingItem = (items: Items, highlightedIndex: ?number, key: string) => {
    if (!this.isMatchableCharacter(key)) {
      return;
    }

    this.searchIndex =
      highlightedIndex === undefined ? 0 : highlightedIndex + 1;

    this.keys += key;
    this.resetKeysAfterDelay();

    const match =
      this.findMatchingItemInRange(items, this.searchIndex, items.length) ||
      this.findMatchingItemInRange(items, 0, this.searchIndex);

    return match;
  };

  findMatchingItemInRange = (
    items: Array<Item>,
    start: number,
    end: number
  ) => {
    const keys = this.keys.toLowerCase();
    for (let index = start; index < end; index++) {
      const { text } = items[index];
      if (
        text &&
        typeof text === 'string' &&
        text.toLowerCase().indexOf(keys) === 0
      ) {
        return items[index];
      }
    }
  };

  resetKeysAfterDelay = () => {
    if (this.keysTimer) {
      global.clearTimeout(this.keysTimer);
      this.keysTimer = null;
    }

    this.keysTimer = global.setTimeout(() => {
      this.keys = '';
      this.keysTimer = null;
    }, 500);
  };

  // Exclude standalone modifier keys, but allow use as combinator
  // e.g. Reject standalone ALT key, but ALT+m which creates µ is okay
  isMatchableCharacter = (key: string) => {
    return key.length === 1 && /\S/.test(key);
  };
}
