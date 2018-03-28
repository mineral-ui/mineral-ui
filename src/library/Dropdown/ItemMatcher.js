/* @flow */
import type { Item, Items } from '../Menu/Menu';

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
