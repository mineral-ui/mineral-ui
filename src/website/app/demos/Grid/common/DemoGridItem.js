/* @flow */
import { createStyledComponent } from '../../../../../library/styles';
import { GridItem as _GridItem } from '../../../../../library/Grid';
import { boxStyles } from '../../Box/common/DemoBox';

export default createStyledComponent(_GridItem, (props) => boxStyles(props));
