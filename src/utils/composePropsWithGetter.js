/* @flow */
export default function composePropsWithGetter(
  props: Object,
  getter: ?(props: Object, scope?: Object) => Object,
  scope?: Object
) {
  return {
    ...props,
    ...(getter && getter(props, scope))
  };
}
