/* @flow */
export default function composeEventHandlers(...handlers: Array<any>) {
  const fns = handlers.filter((fn) => Boolean(fn));

  if (fns.length === 0) {
    return undefined;
  } else if (fns.length === 1) {
    return fns[0];
  } else {
    return (event: object, ...args: Array<any>) => {
      let prevented = false;
      return fns.forEach((fn) => {
        if (!prevented) {
          fn(event, ...args);
          prevented = event.nativeEvent.preventMineralDefault;
        }
      });
    };
  }
}
