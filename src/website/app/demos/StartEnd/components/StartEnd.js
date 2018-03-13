/* @flow */
import { createStyledComponent } from '../../../../../styles';
import _StartEnd from '../../../../../StartEnd';
import { containerStyles } from '../../Flex/components/Flex';

export default createStyledComponent(_StartEnd, props => ({
  ...containerStyles(props)
}));
