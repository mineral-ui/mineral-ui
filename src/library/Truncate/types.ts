/* @flow */

export interface TruncateProps {
  children?: React.ReactNode;
}

export interface TruncateStyleProps extends TruncateProps {
  showTooltip: boolean;
}

export interface TruncateState {
  showTooltip: boolean;
}
