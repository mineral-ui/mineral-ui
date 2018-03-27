/* @flow */
import React, { Children } from 'react';
import Flex, { FlexItem } from '../Flex';

type Props = {
  /**
   * Media query (min-width) breakpoints along which to apply props marked
   * "&#xfeff;[[Responsive-capable]](#responsive)&#xfeff;"
   */
  breakpoints?: Array<number | string>,
  /** Must be exactly two nodes */
  children: React$Node,
  /**
   * Direction of flow of items along the main axis
   * [[Responsive-capable]](#responsive)
   */
  direction?: 'column' | 'row' | Array<'column' | 'row' | null>,
  /** @Private From Flex; filtered out */
  justifyContent?: any,
  /** Determines which side stretches to fill the available width */
  priority?: 'start' | 'end' | 'both',
  /** @Private From Flex; filtered out */
  wrap?: any
};

/**
 * StartEnd provides a simple way to align components to the start and end of a
 * container.
 */
export default function StartEnd(props: Props) {
  const {
    children,
    justifyContent: ignoreJustifyContent,
    priority,
    wrap: ignoreWrap,
    ...restProps
  } = props;
  const rootProps = {
    justifyContent: 'between',
    ...restProps
  };
  let flexItems;
  if (Children.count(children) === 2) {
    const growFactors = {
      start: [1, 0],
      end: [0, 1],
      both: [1, 1],
      none: [undefined, undefined]
    };
    flexItems = Children.map(children, (child, index) => {
      return index ? (
        <FlexItem grow={growFactors[priority || 'none'][1]}>{child}</FlexItem>
      ) : (
        <FlexItem grow={growFactors[priority || 'none'][0]}>{child}</FlexItem>
      );
    });
  } else {
    throw new Error('StartEnd must have exactly two children.');
  }

  // $FlowFixMe - `direction` can't have the '-reverse' options from Flex
  return <Flex {...rootProps}>{flexItems}</Flex>;
}
