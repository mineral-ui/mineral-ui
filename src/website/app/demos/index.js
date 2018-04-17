/* @flow */
import flatten from 'lodash/flatten';
import createKeyMap from '../utils/createKeyMap';
import avatar from './Avatar';
import button from './Button';
import box from './Box';
import card from './Card';
import checkbox from './Checkbox';
import dropdown from './Dropdown';
import form from './Form';
import icon from './Icon';
import flex from './Flex';
import grid from './Grid';
import link from './Link';
import menu from './Menu';
import popover from './Popover';
import radio from './Radio';
import select from './Select';
import startEnd from './StartEnd';
import text from './Text';
import textArea from './TextArea';
import textInput from './TextInput';
import themeProvider from './ThemeProvider';
import tooltip from './Tooltip';

const demos = flatten([
  avatar,
  button,
  box,
  card,
  checkbox,
  dropdown,
  flex,
  form,
  grid,
  icon,
  link,
  menu,
  popover,
  radio,
  select,
  startEnd,
  text,
  textArea,
  textInput,
  themeProvider,
  tooltip
]);

export default createKeyMap(demos, 'slug');
