/* @flow */

export default function isRenderProp(prop: any): prop is Function {
  return typeof prop === 'function';
}
