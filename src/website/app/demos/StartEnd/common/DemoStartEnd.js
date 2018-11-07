/* @flow */
import { createStyledComponent } from '../../../../../library/styles';
import _StartEnd from '../../../../../library/StartEnd';
import { containerStyles } from '../../Flex/common/DemoFlex';

export default createStyledComponent(_StartEnd, (props) => ({
  ...containerStyles(props)
}));
