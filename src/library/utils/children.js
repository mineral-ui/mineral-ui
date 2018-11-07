/* @flow */
import { Children } from 'react';
import { toArray } from './collections';

const hasChildren = (child: React$Element<*>): boolean =>
  Boolean(child && child.props && child.props.children);

const hasComplexChildren = (child: React$Element<*>): boolean =>
  hasChildren(child) && typeof child.props.children === 'object';

export const findDeep = (
  children: React$Node,
  finder: (element: React$Element<*>) => boolean
): ?React$Element<*> =>
  Children.toArray(children).find(
    (child) =>
      hasComplexChildren(child)
        ? findDeep(child.props.children, finder)
        : finder(child)
  );

export function findByType(
  children: ?React$Node,
  type: React$ComponentType<*>
): ?React$Element<*> {
  let match;

  Children.forEach(children, (child) => {
    if (!match && child && child.type === type) {
      match = child;
    }
  });

  return match;
}

export function findAllByType(
  children: ?React$Node,
  type: React$ComponentType<*>
): ?Array<React$Element<*>> {
  return Children.map(children, (child) => {
    if (child && child.type === type) {
      return child;
    }
  });
}

export function excludeByType(
  children: ?React$Node,
  type: React$ComponentType<*> | Array<React$ComponentType<*>>
): ?Array<React$Element<*>> {
  const types = toArray(type);
  return Children.map(children, (child) => {
    if (types.indexOf(child.type) === -1) {
      return child;
    }
  });
}
