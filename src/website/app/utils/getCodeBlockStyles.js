/* @flow */
import { palette } from 'mineral-ui-tokens';
import getNormalizedValue from '../../../library/styles/getNormalizedValue';

/**
 * Many of these styles, especially colors, are modified from atom-dark theme for `prism.js`:
 * https://raw.githubusercontent.com/PrismJS/prism-themes/master/themes/prism-atom-dark.css
 * Based on Atom's `atom-dark` theme: https://github.com/atom/atom-dark-syntax
 * @author Joe Gibson (@gibsjose)
 *
 *
 * The maxHeight is set equal to, roughly, 18 lines (the length of our Getting
 * Started usage source), then adding a bit to make it clear there's more beyond
 * the scroll
 */
export default function getCodeBlockStyles(theme: { [string]: any }) {
  return {
    background: theme.color_gray_100,
    color: theme.color_gray_20,
    direction: 'ltr',
    fontSize: theme.fontSize_ui,
    hyphens: 'none',
    lineHeight: theme.lineHeight_prose,
    margin: 0,
    maxHeight: getNormalizedValue(
      `${parseFloat(theme.fontSize_ui) *
        theme.lineHeight_prose *
        (18 + 0.25)}em`,
      theme.fontSize_ui
    ),
    overflow: 'auto',
    padding: '1em 0.75em',
    tabSize: 2,
    textAlign: 'left',
    whiteSpace: 'pre',
    wordBreak: 'normal',
    wordSpacing: 'normal',
    wordWrap: 'normal',

    // Children of `pre` need their UA fontFamily style overridden
    '&, & *': {
      fontFamily: theme.fontFamily_monospace
    },

    '&::selection,& ::selection': {
      backgroundColor: 'rgba(255,255,255,0.15)'
    },

    '& .token.comment, & .token.prolog, & .token.doctype, & .token.cdata': {
      color: '#7c7c7c'
    },

    '& .token.punctuation': {
      color: '#c5c8c6'
    },

    '& .namespace': {
      opacity: 0.7
    },

    '& .token.property, & .token.keyword, & .token.tag': {
      color: '#f7c868' // deviation, originally "function"
    },

    '& .token.className': {
      color: '#fce4b6',
      textDecoration: 'underline'
    },

    '& .token.boolean, & .token.constant': {
      color: palette.green_20
    },

    '& .token.symbol, & .token.deleted': {
      color: palette.red_60 // deviation
    },

    '& .token.number': {
      color: palette.magenta_40 // slight deviation
    },

    '& .token.selector, & .token.attr-name, & .token.string, & .token.char, & .token.builtin, & .token.inserted': {
      color: palette.sky_40 // deviation, originally "property, et al"
    },

    '& .token.variable': {
      color: palette.purple_30
    },

    '& .token.operator': {
      color: '#ededed'
    },

    '& .token.entity': {
      color: '#fce4b6',
      cursor: 'help'
      // text-decoration: 'underline'
    },

    '& .token.url': {
      color: palette.sky_40 // slight deviation
    },

    '&.languageCss .token.string, &.style .token.string': {
      color: palette.green_30
    },

    '& .token.atrule, & .token.attrValue': {
      color: '#fad48e'
    },

    '& .token.function': {
      color: palette.green_50 // deviation, originally "selector, et al"
    },

    '& .token.regex': {
      color: '#f0b241'
    },

    '& .token.important': {
      color: '#cf4615'
    },

    '& .token.important, & .token.bold': {
      fontWeight: 'bold'
    },

    '& .token.italic': {
      fontStyle: 'italic'
    }
  };
}
