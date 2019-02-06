/* @flow */
import { Children } from 'react';
import { toArray } from './collections';

const hasChildren = (child: React.ReactElement<any>): boolean =>
  Boolean(child && child.props && child.props.children);

const hasComplexChildren = (child: React.ReactElement<any>): boolean =>
  hasChildren(child) && typeof child.props.children === 'object';

export const findDeep = (
  children: React.ReactNode,
  finder: (element: React.ReactElement<any>) => boolean
): React.ReactElement<any> | null | undefined =>
  Children.toArray(children).find((child) =>
    hasComplexChildren(child)
      ? findDeep(child.props.children, finder)
      : finder(child)
  );

export function findByType(
  children: React.ReactNode | null | undefined,
  type: React.ComponentType
): React.ReactElement<any> | null | undefined {
  let match;

  Children.forEach(children, (child) => {
    if (!match && child && child.type === type) {
      match = child;
    }
  });

  return match;
}

export function findAllByType(
  children: React.ReactNode | null | undefined,
  type: React.ComponentType
): Array<React.ReactElement<any>> | null | undefined {
  return Children.map(children, (child) => {
    if (child && child.type === type) {
      return child;
    }
  });
}

export function excludeByType(
  children: React.ReactNode | null | undefined,
  type: React.ComponentType | Array<React.ComponentType>
): Array<React.ReactElement<any>> | null | undefined {
  const types = toArray(type);
  return Children.map(children, (child) => {
    if (types.indexOf(child.type) === -1) {
      return child;
    }
  });
}
