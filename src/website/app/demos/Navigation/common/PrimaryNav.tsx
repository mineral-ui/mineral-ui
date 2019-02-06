/* @flow */
import React from 'react';
import { PrimaryNav as _PrimaryNav } from '../../../../../library/Navigation';

type Props = {
  onChange?: (
    selectedIndex: number,
    event: SyntheticEvent<HTMLAnchorElement>
  ) => void
};

const defaultOnChange = (selectedIndex, event) => {
  event.preventDefault();
};

export default function PrimaryNav({ onChange, ...restProps }: Props) {
  const rootProps = {
    onChange: onChange || defaultOnChange,
    ...restProps
  };

  return <_PrimaryNav {...rootProps} />;
}
