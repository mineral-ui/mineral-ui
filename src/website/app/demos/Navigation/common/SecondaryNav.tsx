/* @flow */
import React from 'react';
import { SecondaryNav as _SecondaryNav } from '../../../../../library/Navigation';

type Props = {
  onChange?: (
    selectedIndex: number,
    event: SyntheticEvent<HTMLAnchorElement>
  ) => void
};

const defaultOnChange = (selectedIndex, event) => {
  event.preventDefault();
};

export default function SecondaryNav({ onChange, ...restProps }: Props) {
  const rootProps = {
    onChange: onChange || defaultOnChange,
    ...restProps
  };

  return <_SecondaryNav {...rootProps} />;
}
