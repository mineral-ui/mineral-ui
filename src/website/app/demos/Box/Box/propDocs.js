/* @flow */
import {
  SPACING_SIZE,
  INSET_SPACING_SIZE
} from '../../../../../library/Box/constants';
import joinQuoted from '../../../utils/joinQuoted';

import type { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

const spacingSizes = joinQuoted(Object.values(SPACING_SIZE));
const spacingType = {
  name: 'union',
  value: `number | string | ${spacingSizes} | Array<null | number | string | ${spacingSizes}>>`
};
const insetSpacingSizes = joinQuoted(Object.values(INSET_SPACING_SIZE));
const insetSpacingType = {
  name: 'union',
  value: `number | string | ${insetSpacingSizes} | Array<null | number | string | ${insetSpacingSizes}>>`
};
const heightOrWidthType = {
  name: 'union',
  value: 'number | string | Array<number | string | null>'
};

const propDocs: ComponentPropDocs = {
  breakpoints: {
    description:
      'Media query (min-width) breakpoints along which to apply props marked "&#xfeff;[[Responsive-capable]](#responsive)&#xfeff;',
    type: 'Array<number | string>'
  },
  height: {
    description: 'Sets the box height. [[Responsive-capable]](#responsive)',
    type: heightOrWidthType
  },
  inline: {
    description:
      'Renders Box as an inline-block [[Responsive-capable]](#responsive)',
    type: {
      name: 'union',
      value: 'boolean | Array<boolean | null>'
    }
  },
  margin: {
    description:
      'Applies a margin on all sides [[Responsive-capable]](#responsive)',
    type: spacingType
  },
  marginBottom: {
    description: 'Applies a bottom margin [[Responsive-capable]](#responsive)',
    type: spacingType
  },
  marginEnd: {
    description:
      'Applies a right margin when the language is left-to-right and left margin [for RTL languages](#rtl) [[Responsive-capable]](#responsive)',
    type: spacingType
  },
  marginHorizontal: {
    description:
      'Applies left & right margins [[Responsive-capable]](#responsive)',
    type: spacingType
  },
  marginLeft: {
    description: 'Applies a left margin [[Responsive-capable]](#responsive)',
    type: spacingType
  },
  marginRight: {
    description: 'Applies a right margin [[Responsive-capable]](#responsive)',
    type: spacingType
  },
  marginStart: {
    description:
      'Applies a left margin when the language is left-to-right and right margin [for RTL languages](#rtl) [[Responsive-capable]](#responsive)',
    type: spacingType
  },
  marginTop: {
    description: 'Applies a top margin [[Responsive-capable]](#responsive)',
    type: spacingType
  },
  marginVertical: {
    description:
      'Applies top & bottom margins [[Responsive-capable]](#responsive)',
    type: spacingType
  },
  padding: {
    description:
      'Applies padding to all sides [[Responsive-capable]](#responsive)',
    type: insetSpacingType
  },
  paddingBottom: {
    description: 'Applies bottom padding [[Responsive-capable]](#responsive)',
    type: spacingType
  },
  padddingEnd: {
    description:
      'Applies right padding when the language is left-to-right and left padding [for RTL languages](#rtl) [[Responsive-capable]](#responsive)',
    type: spacingType
  },
  paddingHorizontal: {
    description:
      'Applies left & right padding [[Responsive-capable]](#responsive)',
    type: spacingType
  },
  paddingLeft: {
    description: 'Applies left padding [[Responsive-capable]](#responsive)',
    type: spacingType
  },
  paddingRight: {
    description: 'Applies right padding [[Responsive-capable]](#responsive)',
    type: spacingType
  },
  padddingStart: {
    description:
      'Applies left padding when the language is left-to-right and right padding [for RTL languages](#rtl) [[Responsive-capable]](#responsive)',
    type: spacingType
  },
  paddingTop: {
    description: 'Applies bottom padding [[Responsive-capable]](#responsive)',
    type: spacingType
  },
  paddingVertical: {
    description:
      'Applies top & bottom margins [[Responsive-capable]](#responsive)',
    type: spacingType
  },
  width: {
    description: 'Sets the box width [[Responsive-capable]](#responsive)',
    type: heightOrWidthType
  }
};

export default propDocs;
