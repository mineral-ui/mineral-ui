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
import React, { Component } from 'react';
import { createStyledComponent, getResponsiveStyles } from '../styles';

type Props = {
  /**
   * Media query (min-width) breakpoints along which to apply props marked
   * "&#xfeff;[[Responsive-capable]](#responsive)&#xfeff;"
   */
  breakpoints?: Array<number | string>,
  /** Rendered root HTML element */
  element?: string,
  /** Sets the box height. [[Responsive-capable]](#responsive) */
  height?: number | string | Array<number | string>,
  /** Renders Box as an inline-block [[Responsive-capable]](#responsive) */
  inline?: boolean | Array<boolean>,
  /** Applies a margin on all sides [[Responsive-capable]](#responsive) */
  margin?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | number
    | string
    | Array<'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | number | string>,
  /** Applies a bottom margin [[Responsive-capable]](#responsive) */
  marginBottom?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | number
    | string
    | Array<'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | number | string>,
  /**
   * Applies a right margin when the language is left-to-right and left margin
   * [for RTL languages](#rtl) [[Responsive-capable]](#responsive)
   */
  marginEnd?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | number
    | string
    | Array<'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | number | string>,
  /** Applies left & right margins [[Responsive-capable]](#responsive) */
  marginHorizontal?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | number
    | string
    | Array<'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | number | string>,
  /** Applies a left margin [[Responsive-capable]](#responsive) */
  marginLeft?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | number
    | string
    | Array<'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | number | string>,
  /** Applies a right margin [[Responsive-capable]](#responsive) */
  marginRight?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | number
    | string
    | Array<'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | number | string>,
  /**
   * Applies a left margin when the language is left-to-right and right margin
   * [for RTL languages](#rtl) [[Responsive-capable]](#responsive)
   */
  marginStart?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | number
    | string
    | Array<'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | number | string>,
  /** Applies a top margin [[Responsive-capable]](#responsive) */
  marginTop?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | number
    | string
    | Array<'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | number | string>,
  /**
   * Applies top & bottom margins [[Responsive-capable]](#responsive)
   */
  marginVertical?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | number
    | string
    | Array<'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | number | string>,
  /** Applies padding to all sides [[Responsive-capable]](#responsive) */
  padding?:
    | 'sm'
    | 'md'
    | 'lg'
    | number
    | string
    | Array<'sm' | 'md' | 'lg' | number | string>,
  /** Applies bottom padding [[Responsive-capable]](#responsive) */
  paddingBottom?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | number
    | string
    | Array<'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | number | string>,
  /**
   * Applies right padding when the language is left-to-right and left padding
   * [for RTL languages](#rtl) [[Responsive-capable]](#responsive)
   */
  padddingEnd?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | number
    | string
    | Array<'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | number | string>,
  /** Applies left & right padding [[Responsive-capable]](#responsive) */
  paddingHorizontal?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | number
    | string
    | Array<'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | number | string>,
  /** Applies left padding [[Responsive-capable]](#responsive) */
  paddingLeft?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | number
    | string
    | Array<'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | number | string>,
  /** Applies right padding [[Responsive-capable]](#responsive) */
  paddingRight?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | number
    | string
    | Array<'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | number | string>,
  /**
   * Applies left padding when the language is left-to-right and right padding
   * [for RTL languages](#rtl) [[Responsive-capable]](#responsive)
   */
  padddingStart?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | number
    | string
    | Array<'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | number | string>,
  /** Applies bottom padding [[Responsive-capable]](#responsive) */
  paddingTop?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | number
    | string
    | Array<'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | number | string>,
  /** Applies top & bottom margins [[Responsive-capable]](#responsive) */
  paddingVertical?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | number
    | string
    | Array<'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | number | string>,
  /** Sets the box width [[Responsive-capable]](#responsive) */
  width?: number | string | Array<number | string>
};

type SpacingStyles = {
  [string]: Array<Values> | Values
};
type Values = boolean | null | number | string;

const spacingTypes = {
  marginHorizontal: 'inline',
  marginStart: 'inline',
  marginEnd: 'inline',
  marginLeft: 'inline',
  marginRight: 'inline',
  paddingHorizontal: 'inline',
  paddingStart: 'inline',
  paddingEnd: 'inline',
  paddingLeft: 'inline',
  paddingRight: 'inline',
  padding: 'inset',
  margin: 'stack',
  marginVertical: 'stack',
  marginTop: 'stack',
  marginBottom: 'stack',
  paddingVertical: 'stack',
  paddingTop: 'stack',
  paddingBottom: 'stack'
};

const getMeasurement = (value: number | string) =>
  typeof value === 'number' && value < 1 ? `${value * 100}%` : value;

const getSpaceValue = (
  property: string,
  theme: Object,
  value: number | string
) => theme[`space_${spacingTypes[property]}_${value}`] || getMeasurement(value);

const getSpacingStyles = (
  property: string,
  restProps: Object,
  rtl: boolean
): SpacingStyles => {
  // prettier-ignore
  const spacingPropKeys = ['', 'Horizontal', 'Vertical', 'Start', 'End', 'Bottom', 'Left', 'Right', 'Top']
    .map(suffix => `${property}${suffix}`)
    .filter(key => restProps[key] !== undefined);

  const setStyles = (
    directions: Array<string>,
    key: string,
    styles: SpacingStyles
  ) => {
    directions.forEach(direction => {
      styles[`${property}${direction}`] = restProps[key];
    });
  };

  return spacingPropKeys.reduce((acc, key) => {
    if (key === property) {
      setStyles(['Bottom', 'Left', 'Right', 'Top'], key, acc);
    } else if (key.indexOf('Horizontal') !== -1) {
      setStyles(['Left', 'Right'], key, acc);
    } else if (key.indexOf('Vertical') !== -1) {
      setStyles(['Bottom', 'Top'], key, acc);
    } else if (key.indexOf('Start') !== -1) {
      setStyles([`${rtl ? 'Right' : 'Left'}`], key, acc);
    } else if (key.indexOf('End') !== -1) {
      setStyles([`${rtl ? 'Left' : 'Right'}`], key, acc);
    } else {
      acc[key] = restProps[key];
    }
    return acc;
  }, {});
};

const styles = {
  root: ({ breakpoints, height, inline, theme, width, ...restProps }) => {
    const rtl = theme.direction === 'rtl';

    const mapValueToProperty = (
      property: string,
      value: Values
    ): number | string => {
      const map = {
        display: value => (value ? 'inline-block' : 'block'),
        height: getMeasurement,
        width: getMeasurement,
        ...['margin', 'padding'].reduce((acc, property) => {
          Object.keys(
            getSpacingStyles(property, restProps, rtl)
          ).forEach(style => {
            acc[style] = value => getSpaceValue(property, theme, value);
          });
          return acc;
        }, {})
      };

      return map[property](value);
    };

    return getResponsiveStyles({
      breakpoints,
      mapValueToProperty,
      styles: {
        display: inline,
        height,
        ...getSpacingStyles('margin', restProps, rtl),
        ...getSpacingStyles('padding', restProps, rtl),
        width
      },
      theme
    });
  }
};

// Box's root node must be created outside of render, so that the entire DOM
// element is replaced only when the element prop is changed, otherwise it is
// updated in place
function createRootNode(props: Props) {
  const { element = Box.defaultProps.element } = props;

  return createStyledComponent(element, styles.root, {
    includeStyleReset: true,
    rootEl: element
  });
}

/**
 * Box component provides an easy way to apply standardized size & space to your
 * layout.
 *
 * Box is the basis of the other layout components: [Flex](../flex),
 * [FlexItem](../flex-item), and [StartEnd](../start-end).
 */
export default class Box extends Component<Props> {
  static defaultProps = {
    element: 'div'
  };

  componentWillUpdate(nextProps: Props) {
    if (this.props.element !== nextProps.element) {
      this.rootNode = createRootNode(nextProps);
    }
  }

  rootNode: React$ComponentType<*> = createRootNode(this.props);

  render() {
    const Root = this.rootNode;

    return <Root {...this.props} />;
  }
}
