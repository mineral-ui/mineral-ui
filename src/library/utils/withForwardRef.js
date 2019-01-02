/* @flow */
import React, { forwardRef } from 'react';
import wrapDisplayName from 'recompose/wrapDisplayName';
import hoistNonReactStatics from 'hoist-non-react-statics';

export default function withForwardRef<Config, Instance>(
  WrappedComponent: React$AbstractComponent<Config, Instance>
): React$AbstractComponent<Config, Instance> {
  const Wrapper = forwardRef<Config, Instance>((props, ref: React$Ref<*>) => (
    <WrappedComponent {...props} forwardedRef={ref} />
  ));

  Wrapper.displayName = wrapDisplayName(WrappedComponent, 'WithForwardRef');
  // $FlowFixMe - defaultProps missing in React.AbstractComponentStatics
  Wrapper.defaultProps = WrappedComponent.defaultProps;
  // $FlowFixMe - defaultProps missing in React.AbstractComponentStatics
  Wrapper.propTypes = WrappedComponent.propTypes;

  hoistNonReactStatics(Wrapper, WrappedComponent);

  return Wrapper;
}
