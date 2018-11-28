/* @flow */
import { GUTTER_WIDTH } from '../Flex/constants';
// import { ALIGN_ITEMS, GUTTER_WIDTH } from './constants';

type GutterWidth = $Keys<typeof GUTTER_WIDTH>;

export type HeaderProps = {
  children?: React$Node,
  gutterWidth?: GutterWidth,
  minimal?: boolean
};

export type HeaderDefaultProps = {
  gutterWidth: GutterWidth
};

export type HeaderBackButtonProps = {};

export type HeaderBackButtonDefaultProps = {};

export type HeaderContainerProps = {
  children?: React$Node,
  gutterWidth: GutterWidth,
  minimal?: boolean // TODO: confirm this is used
};

export type HeaderContainerDefaultProps = {
  gutterWidth: GutterWidth
};

export type HeaderTitleProps = {
  children: React$Node,
  logo?: $FlowFixMe,
  minimal?: boolean // TODO: confirm this is used
};

export type HeaderTitleDefaultProps = {};

export type CreateHeaderTitleLogoNode = (
  component: React$ComponentType<*>
) => React$ComponentType<*>;
