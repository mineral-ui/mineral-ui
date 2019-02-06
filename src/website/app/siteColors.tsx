/* @flow */
import darken from 'polished/lib/color/darken';
import lighten from 'polished/lib/color/lighten';

export default {
  orange: '#ed774c',

  slate: '#598296',
  slate_active: '#47697a',
  slate_focus: '#598296',
  slate_hover: '#709cb3',

  yellow: '#f0b241',
  yellow_active: '#e3a322',
  yellow_focus: '#f0b241',
  yellow_hover: '#f7c868',

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
