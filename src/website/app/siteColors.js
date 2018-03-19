/* @flow */
import darken from 'polished/lib/color/darken';
import lighten from 'polished/lib/color/lighten';
import colors from '../../library/colors';

export default {
  orange: colors.orange_50,
  // orange_active: darken(0.025, colors.orange_50),
  // orange_focus: colors.orange_50,
  // orange_hover: lighten(0.025, colors.orange_50),

  slate: colors.slate_60,
  slate_active: colors.slate_70,
  slate_focus: colors.slate_60,
  slate_hover: colors.slate_50,

  yellow: colors.yellow_50,
  yellow_active: colors.yellow_60,
  yellow_focus: colors.yellow_50,
  yellow_hover: colors.yellow_40,

  cranberry: '#d1454a',
  cranberry_active: darken(0.05, '#d1454a'),
  cranberry_focus: '#d1454a',
  cranberry_hover: lighten(0.05, '#d1454a'),

  slateDarker: '#597a90',
  slateDarker_active: darken(0.05, '#597a90'),
  slateDarker_focus: '#597a90',
  slateDarker_hover: lighten(0.05, '#597a90'),

  grape: '#9a5fad',
  grape_active: darken(0.05, '#9a5fad'),
  grape_focus: '#9a5fad',
  grape_hover: lighten(0.05, '#9a5fad'),

  jade: '#09866e',
  jade_active: darken(0.05, '#09866e'),
  jade_focus: '#09866e',
  jade_hover: lighten(0.05, '#09866e'),

  orangePunch: '#d44511',
  orangePunch_active: darken(0.05, '#d44511'),
  orangePunch_focus: '#d44511',
  orangePunch_hover: lighten(0.05, '#d44511')
};
