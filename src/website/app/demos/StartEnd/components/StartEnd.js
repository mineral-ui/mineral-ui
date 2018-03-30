/* @flow */
import { createStyledComponent } from '../../../../../library/styles';
import _StartEnd from '../../../../../library/StartEnd';
import { containerStyles } from '../../Flex/components/Flex';

export default createStyledComponent(_StartEnd, (props) => ({
  ...containerStyles(props)
}));
