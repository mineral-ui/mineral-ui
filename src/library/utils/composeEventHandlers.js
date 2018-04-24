/* @flow */
export default function composeEventHandlers(...handlers: Array<any>) {
  const fns = handlers.filter((fn) => Boolean(fn));

  if (fns.length === 0) {
    return undefined;
  } else if (fns.length === 1) {
    return fns[0];
  } else {
    return (event: Object, ...args: Array<any>) => {
      return fns.some((fn) => {
        fn(event, ...args);
        return event.nativeEvent.preventMineralDefault;
      });
    };
  }
}
