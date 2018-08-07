/* @flow */
import React, { Component } from 'react';
import memoizeOne from 'memoize-one';
import { createStyledComponent } from '../styles';

type Props = {
  /** Content of the Link */
  children?: React$Node,
  /** A URL or URL fragment to which the Link points */
  href?: string,
  /** Element to be used as the root node - e.g. `a` or `ReactRouterLink` */
  element?: $FlowFixMe, // Should allow string | React class
  /** Available variants */
  variant?: 'danger' | 'success' | 'warning'
};

export const componentTheme = (baseTheme: Object) => ({
  Link_borderColor_focus: baseTheme.borderColor_theme_focus,
  Link_color: baseTheme.color_theme,
  Link_color_active: baseTheme.color_theme_active,
  Link_color_hover: baseTheme.color_theme_hover,
  Link_color_focus: baseTheme.color_theme_focus,

  ...baseTheme
});

const styles = ({ variant, theme: baseTheme }) => {
  let theme = componentTheme(baseTheme);

  if (variant) {
    // prettier-ignore
    theme = {
      ...theme,
      Link_borderColor_focus: baseTheme[`borderColor_${variant}_focus`],
      Link_color: baseTheme[`color_${variant}`],
      Link_color_hover: baseTheme[`color_${variant}_hover`],
      Link_color_focus: baseTheme[`color_${variant}_focus`],
      Link_color_active: baseTheme[`color_${variant}_active`],
    };
  }

  return {
    color: theme.Link_color,
    textDecoration: 'none',

    '&:hover': {
      color: theme.Link_color_hover,
      textDecoration: 'underline'
    },
    '&:focus': {
      color: theme.Link_color_focus,
      outline: `1px solid ${theme.Link_borderColor_focus}`,
      outlineOffset: '2px'
    },
    // `:active` must be last, to follow LVHFA order:
    // https://developer.mozilla.org/en-US/docs/Web/CSS/:active
    '&:active': {
      color: theme.Link_color_active
    }
  };
};

const createRootNode = (props: Props) => {
  const { element = Link.defaultProps.element } = props;

  return createStyledComponent(element, styles, {
    displayName: 'Link',
    filterProps: ['element', 'variant'],
    rootEl: element
  });
};

/**
 * The Link component creates a hyperlink to external pages, files, anchors on
 * the same page, or another URL.
 */
export default class Link extends Component<Props> {
  static defaultProps = {
    element: 'a'
  };

  // Must be an instance method to avoid affecting other instances memoized keys
  getRootNode = memoizeOne(
    createRootNode,
    (nextProps: Props, prevProps: Props) =>
      nextProps.element === prevProps.element
  );

  render() {
    const Root = this.getRootNode(this.props);

    return <Root {...this.props} />;
  }
}
