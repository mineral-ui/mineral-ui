/* @flow */
import glamorous from 'glamorous';
import componentStyleReset from './componentStyleReset';

export default function createStyledComponent(
  element:
    | React$StatelessFunctionalComponent<*>
    | React$ComponentType<*>
    | string,
  styles: Object | ((props: Object, context?: Object) => Object),
  options?: Object = {}
) {
  const { includeStyleReset, ...restOptions } = options;
  let outStyles;

  if (includeStyleReset) {
    outStyles = (props: Object, context?: Object): Object => {
      const componentStyles =
        typeof styles === 'function' ? styles(props, context) : styles;

      return {
        ...componentStyleReset(props),
        ...componentStyles
      };
    };
  } else {
    outStyles = styles;
  }

  return glamorous(element, restOptions)(outStyles);
}
