/* @flow */

export default function isRenderProp(prop: any): %checks {
  return typeof prop === 'function';
}
