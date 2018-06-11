/* @flow */
import { Children } from 'react';

export function findByType(children: React$Node, type: React$ComponentType<*>) {
  let match;

  Children.forEach(children, (child) => {
    if (!match && child && child.type === type) {
      match = child;
    }
  });

  return match;
}

export function findAllByType(
  children: React$Node,
  type: React$ComponentType<*>
) {
  return Children.map(children, (child) => {
    if (child && child.type === type) {
      return child;
    }
  });
}
