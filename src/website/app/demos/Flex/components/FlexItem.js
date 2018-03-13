/* @flow */
import { createStyledComponent } from '../../../../../styles';
import { FlexItem as _FlexItem } from '../../../../../Flex';
import { boxStyles } from '../../Box/components/Box';

export default createStyledComponent(_FlexItem, props => boxStyles(props));
