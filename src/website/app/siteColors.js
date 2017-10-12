import darken from 'polished/lib/color/darken';
import lighten from 'polished/lib/color/lighten';
import colors from '../../colors';

export default {
  maroon: '#9e534d',
  maroon_active: darken(0.1, '#9e534d'),
  maroon_focus: '#9e534d',
  maroon_hover: lighten(0.1, '#9e534d'),
  orange: colors.orange_50,
  orange_active: darken(0.025, colors.orange_50),
  orange_focus: colors.orange_50,
  orange_hover: lighten(0.025, colors.orange_50),
  slate: colors.slate_60,
  slate_active: colors.slate_70,
  slate_focus: colors.slate_60,
  slate_hover: colors.slate_50,
  teal: '#13a084',
  teal_active: darken(0.1, '#13a084'),
  teal_focus: '#13a084',
  teal_hover: lighten(0.1, '#13a084'),
  yellow: colors.yellow_50,
  yellow_active: colors.yellow_60,
  yellow_focus: colors.yellow_50,
  yellow_hover: colors.yellow_40,
  yellow_dark: '#967029',
  yellow_dark_active: darken(0.1, '#967029'),
  yellow_dark_focus: '#967029',
  yellow_dark_hover: lighten(0.1, '#967029')
};
