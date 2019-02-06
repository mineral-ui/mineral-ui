/* @flow */
import React, { forwardRef } from 'react';
import wrapDisplayName from 'recompose/wrapDisplayName';
import hoistNonReactStatics from 'hoist-non-react-statics';

export default function withForwardRef<P extends object>(WrappedComponent: React.ComponentType<P>) {
  const Wrapper = forwardRef((props: P, ref: React.Ref<any>) => (
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
