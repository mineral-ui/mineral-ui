/* @flow */
import { Children } from 'react';
import { toArray } from './collections';

const isElement = (subject: any): subject is React.ReactElement<any> =>
  typeof subject === 'object' && subject.hasOwnProperty('type');

const hasChildren = (child: React.ReactElement<any>): boolean =>
  Boolean(child && child.props && child.props.children);

const hasComplexChildren = (child: React.ReactElement<any>): boolean =>
  hasChildren(child) && typeof child.props.children === 'object';

export const findDeep = (
  children: React.ReactNode,
  finder: (element: React.ReactElement<any>) => boolean
): React.ReactElement<any> | null | undefined =>
  Children.toArray(children).filter(isElement).find((child) =>
      // @ts-ignore FIXME - issue in recursive call on line 20
      hasComplexChildren(child)
        ? findDeep(child.props.children, finder)
        : finder(child)
  );

export function findByType(
  children: React.ReactNode,
  type: React.ComponentType
): React.ReactElement<any> | null | undefined {
  let match: React.ReactElement<any> | null | undefined;

  Children.forEach(children, (child) => {
    if (!match && child && isElement(child) && child.type === type) {
      match = child;
    }
  });

  return match;
}

export function findAllByType(
  children: React.ReactNode,
  type: React.ComponentType
): Array<React.ReactElement<any>> | null | undefined {
  return Children.map(children, (child) => {
    if (isElement(child) && child.type === type) {
      return child;
    }
  });
}

export function excludeByType(
  children: React.ReactNode,
  type: React.ComponentType | Array<React.ComponentType>
): Array<React.ReactElement<any>> | null | undefined {
  const types = toArray(type);
  return Children.map(children, (child) => {
    if (isElement(child) && types.indexOf(child.type) === -1) {
      return child;
    }
  });
}
