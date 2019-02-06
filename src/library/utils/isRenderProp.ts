/* @flow */

export default function isRenderProp(prop: any) {
  return typeof prop === 'function';
}
