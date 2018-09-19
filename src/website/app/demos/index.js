/* @flow */
import flatten from 'lodash/flatten';
import createKeyMap from '../utils/createKeyMap';
import avatar from './Avatar';
import button from './Button';
import buttonGroup from './ButtonGroup';
import box from './Box';
import card from './Card';
import checkbox from './Checkbox';
import dialog from './Dialog';
import dropdown from './Dropdown';
import form from './Form';
import icon from './Icon';
import flex from './Flex';
import grid from './Grid';
import link from './Link';
import menu from './Menu';
import popover from './Popover';
import pagination from './Pagination';
import radio from './Radio';
import select from './Select';
import startEnd from './StartEnd';
import table from './Table';
import tabs from './Tabs';
import text from './Text';
import textArea from './TextArea';
import textInput from './TextInput';
import themeProvider from './ThemeProvider';
import tooltip from './Tooltip';

const demos = flatten([
  avatar,
  button,
  buttonGroup,
  box,
  card,
  checkbox,
  dialog,
  dropdown,
  flex,
  form,
  grid,
  icon,
  link,
  menu,
  popover,
  pagination,
  radio,
  select,
  startEnd,
  table,
  tabs,
  text,
  textArea,
  textInput,
  themeProvider,
  tooltip
]);

export default createKeyMap(demos, 'slug');
