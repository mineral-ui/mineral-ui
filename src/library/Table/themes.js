/* @flow */
import { mapComponentThemes } from '../themes';
import { pxToEm } from '../styles';
import { overflowContainerTheme } from '../OverflowContainer/themes';

import type {
  TableCellThemeFn,
  TableHeaderThemeFn,
  TableHeaderCellThemeFn,
  TableRowThemeFn,
  TableSortableHeaderCellThemeFn,
  TableThemeFn,
  TableTitleThemeFn
} from './types';

// $FlowFixMe - strict theme keys incompatible with mapComponentThemes
export const tableTheme: TableThemeFn = (baseTheme) =>
  mapComponentThemes(
    {
      name: 'OverflowContainer',
      theme: overflowContainerTheme(baseTheme)
    },
    {
      name: 'Table',
      theme: {}
    },
    baseTheme
  );

export const tableCellTheme: TableCellThemeFn = (baseTheme) => ({
  TableCell_borderVertical: null,
  TableCell_borderVertical_highContrast: null,
  TableCell_fontSize: baseTheme.fontSize_ui,
  TableCell_paddingHorizontal: baseTheme.space_inline_md,
  TableCell_paddingVertical: baseTheme.space_stack_sm,
  TableCell_paddingVertical_spacious: pxToEm(12),
  TableCell_verticalAlign: 'top',

  ...baseTheme
});

export const tableHeaderTheme: TableHeaderThemeFn = (baseTheme) => ({
  TableHeader_borderBottom: `1px solid ${baseTheme.borderColor}`,
  TableHeader_borderBottom_highContrast: `1px solid ${baseTheme.color_gray_80}`,
  TableHeader_borderTop: `0px solid ${baseTheme.borderColor}`,
  TableHeader_borderTop_highContrast: `0px solid ${baseTheme.color_gray_80}`,
  ...baseTheme
});

// prettier-ignore
// $FlowFixMe - strict theme keys incompatible with mapComponentThemes
export const tableHeaderCellTheme: TableHeaderCellThemeFn = (baseTheme) =>
  mapComponentThemes(
    {
      name: 'TableCell',
      theme: tableCellTheme(baseTheme)
    },
    {
      name: 'TableHeaderCell',
      theme: {
        TableHeaderCell_borderVertical: `1px dotted ${baseTheme.borderColor}`,
        TableHeaderCell_borderVertical_highContrast: `1px dotted ${baseTheme.color_gray_80}`,
        TableHeaderCell_fontWeight: baseTheme.fontWeight_bold,
        TableHeaderCell_paddingHorizontal: baseTheme.space_inline_md,
        TableHeaderCell_paddingVertical: pxToEm(12),
        TableHeaderCell_paddingVertical_spacious: baseTheme.space_stack_md,
        TableHeaderCell_verticalAlign: 'bottom'
      }
    },
    baseTheme
  );

// prettier-ignore
export const tableRowTheme: TableRowThemeFn = (baseTheme) => ({
  TableRow_backgroundColor_highContrast_selected: baseTheme.color_theme_20,
  TableRow_backgroundColor_highContrast_selectedHover: baseTheme.color_theme_30,
  TableRow_backgroundColor_hover: baseTheme.color_gray_20,
  TableRow_backgroundColor_selected: baseTheme.color_theme_10,
  TableRow_backgroundColor_selectedHover: baseTheme.color_theme_20,
  TableRow_backgroundColor_striped: baseTheme.color_gray_10,
  TableRow_borderHorizontal: `1px solid ${baseTheme.color_white}`,
  TableRow_borderHorizontal_highContrast: `1px solid ${baseTheme.color_gray_60}`,

  ...baseTheme
});

// prettier-ignore
export const tableSortableHeaderCellTheme: TableSortableHeaderCellThemeFn = (
  baseTheme
) => ({
  TableSortableHeaderCell_border_focus: `1px solid ${baseTheme.borderColor_theme_focus}`,
  TableSortableHeaderCell_color_focus: baseTheme.color_theme,
  TableSortableHeaderCell_color_hover: baseTheme.icon_color_theme,
  TableSortableHeaderCellIcon_size: pxToEm(14),

  ...baseTheme
});

export const tableTitleTheme: TableTitleThemeFn = (baseTheme) => ({
  TableTitle_color: baseTheme.h4_color,
  TableTitle_fontSize: baseTheme.h4_fontSize,
  TableTitle_fontWeight: baseTheme.h4_fontWeight,
  TableTitle_marginBottom: baseTheme.space_stack_sm,

  ...baseTheme
});
