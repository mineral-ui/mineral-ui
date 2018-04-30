/* @flow */
import { fontSize_base } from '../../../packages/mineral-ui-tokens/src';

// Token has rem units, but our theme variable needs to be in "px"
// Components are built on an 8px grid
export default `${fontSize_base.replace('rem', '') * 16}px`;
