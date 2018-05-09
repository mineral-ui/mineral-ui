/* @flow */

import _htmlAttributes from 'react-html-attributes';
import memoize from 'fast-memoize';
import reactProps from './reactProps';
import { settify } from './collections';

type HtmlAttributes = {
  '*'?: Set<string>,
  elements?: { svg: Set<string> },
  svg?: Set<string>
};

const REGEX_DATA_OR_ARIA = /^(data|aria)-/;
const htmlAttributes: HtmlAttributes = settify(_htmlAttributes);
const globalHtmlAttributes = htmlAttributes['*'] || new Set();
const svgTags = htmlAttributes.elements
  ? htmlAttributes.elements.svg
  : new Set();
const svgAttributes = htmlAttributes.svg || new Set();

const isElement = (tag) => typeof tag === 'string';
const isComponent = (tag) => !isElement(tag);
const isReactProp = (prop) => reactProps[prop];
const isCustomAttribute = (prop) => REGEX_DATA_OR_ARIA.test(prop);
const isSvgAttribute = (tag, prop) => {
  return svgTags.has(tag) && svgAttributes.has(prop);
};
const isHtmlAttribute = (tag, prop) => {
  return (
    globalHtmlAttributes.has(prop) ||
    (htmlAttributes[tag] && htmlAttributes[tag].has(prop))
  );
};

const isValidProp = (tag: any, prop: string) =>
  isComponent(tag) ||
  isReactProp(prop) ||
  isHtmlAttribute(tag, prop) ||
  isSvgAttribute(tag, prop) ||
  isCustomAttribute(prop);

export default memoize(isValidProp);
