/* @flow */
import React, { forwardRef } from 'react';
import wrapDisplayName from 'recompose/wrapDisplayName';
import hoistNonReactStatics from 'hoist-non-react-statics';

export default function withForwardRef<Ref, Props extends object>(
  WrappedComponent: React.ComponentType<Props>
) {
  const Wrapper = forwardRef<Ref, Props>((props, ref) => (
    <WrappedComponent {...props} forwardedRef={ref} />
  ));

  Wrapper.displayName = wrapDisplayName(WrappedComponent, 'WithForwardRef');
  // @ts-ignore
  Wrapper.defaultProps = WrappedComponent.defaultProps;
  // @ts-ignore
  Wrapper.propTypes = WrappedComponent.propTypes;

  hoistNonReactStatics(Wrapper, WrappedComponent);

  return Wrapper;
}
