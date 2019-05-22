/* @flow */
import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import withProps from 'recompose/withProps';
import { hideVisually } from 'polished';
import { componentStyleReset, getNormalizedValue, pxToEm } from '../styles';
import { themed, mapComponentThemes } from '../themes';
import { rtlTextAlign } from '../utils';
import { ignoreSsrWarning } from '../utils/emotion';
import Checkbox from '../Checkbox';
import OverflowContainer from '../OverflowContainer/OverflowContainer';
import {
  tableCellTheme,
  tableTheme,
  tableHeaderCellTheme,
  tableHeaderTheme,
  tableRowTheme,
  tableSortableHeaderCellTheme,
  tableTitleTheme
} from './themes';
import TableHeaderCell from './TableHeaderCell';
import { SORT } from './constants';

const REGEX_IS_EM_VALUE = /\d+em$/;

const tableCellStyles = ({
  clickable,
  color,
  cursor,
  verticalAlign,

  density,
  highContrast,
  noPadding,
  textAlign,
  theme: baseTheme
}) => {
  const theme = tableCellTheme(baseTheme);
  const fontSize = theme.TableCell_fontSize;
  const rtl = theme.direction === 'rtl';
  const borderProperty = rtl ? 'borderRight' : 'borderLeft';
  const borderVertical = highContrast
    ? theme.TableCell_borderVertical_highContrast
    : theme.TableCell_borderVertical;
  const paddingHorizontal = getNormalizedValue(
    theme.TableCell_paddingHorizontal,
    fontSize
  );
  const paddingVertical = getNormalizedValue(
    density === 'spacious'
      ? theme.TableCell_paddingVertical_spacious
      : theme.TableCell_paddingVertical,
    fontSize
  );

  return {
    fontSize,
    fontWeight: 'inherit',
    padding: noPadding ? 0 : `${paddingVertical} ${paddingHorizontal}`,
    textAlign: rtlTextAlign(textAlign || 'start', theme.direction),

    ...(clickable ? { cursor: 'pointer' } : {}),
    ...(color ? { color } : {}),
    ...(cursor ? { cursor } : {}),
    verticalAlign: verticalAlign || theme.TableCell_verticalAlign,

    ['&:not(:first-child)' + ignoreSsrWarning]: {
      [borderProperty]: borderVertical
    }
  };
};

export const TableOverflowContainer = themed(OverflowContainer)(
  ({ theme: baseTheme }) =>
    mapComponentThemes(
      {
        name: 'Table',
        theme: tableTheme(baseTheme)
      },
      {
        name: 'OverflowContainer',
        theme: {}
      },
      baseTheme
    )
);

export const TableRoot = styled('table')(({ backgroundColor, theme }) => ({
  ...componentStyleReset(theme),

  backgroundColor: backgroundColor ? backgroundColor : 'white',
  borderCollapse: 'collapse',
  borderSpacing: 0,
  width: '100%'
}));

export const TableBody = styled('tbody')();

export const TableCellRoot = styled('td')(tableCellStyles);

export const TableHeaderRoot = styled('thead')(
  ({ hide, highContrast, theme: baseTheme }) => {
    const theme = tableHeaderTheme(baseTheme);

    return hide
      ? hideVisually()
      : {
          borderBottom: highContrast
            ? theme.TableHeader_borderBottom_highContrast
            : theme.TableHeader_borderBottom,
          borderTop: highContrast
            ? theme.TableHeader_borderTop_highContrast
            : theme.TableHeader_borderTop
        };
  }
);

export const TableHeaderCellRoot = styled('th', {
  shouldForwardProp: (prop) => prop !== 'width' && isPropValid(prop)
})(
  ({ theme: baseTheme, ...props }) => {
    const theme = mapComponentThemes(
      {
        name: 'TableHeaderCell',
        theme: tableHeaderCellTheme(baseTheme)
      },
      {
        name: 'TableCell',
        theme: {}
      },
      baseTheme,
      [
        'TableHeaderCell_borderVertical',
        'TableHeaderCell_fontSize',
        'TableHeaderCell_paddingHorizontal',
        'TableHeaderCell_paddingVertical',
        'TableHeaderCell_verticalAlign'
      ]
    );

    return tableCellStyles({ theme, ...props });
  },
  ({ border, borderless, highContrast, maxWidth, minWidth, theme: baseTheme, width }) => {
    border = borderless ? 'none' : border;

    const theme = tableHeaderCellTheme(baseTheme);
    const fontSize = theme.TableHeaderCell_fontSize;
    const rtl = theme.direction === 'rtl';
    const borderProperty = rtl ? 'borderRight' : 'borderLeft';
    const borderVertical = highContrast
      ? theme.TableHeaderCell_borderVertical_highContrast
      : theme.TableHeaderCell_borderVertical;
    const positionProperty = rtl ? 'right' : 'left';
    const getWidth = (value, fontSize) =>
      REGEX_IS_EM_VALUE.test(value)
        ? getNormalizedValue(value, fontSize)
        : value;

    return {
      fontWeight: theme.TableHeaderCell_fontWeight,
      maxWidth: getWidth(maxWidth, fontSize),
      minWidth: getWidth(minWidth, fontSize),
      position: 'relative',
      width: getWidth(width, fontSize),
      zIndex: 1,

      // Using this "border" to appease Firefox, which extends TableHeaderCell's
      // real border down the entire column after clicking a TableSortableHeaderCell.
      ['&:not(:first-child)' + ignoreSsrWarning]: {
        [borderProperty]: 0,

        '&::before': {
          [borderProperty]: border ? border : borderVertical,
          bottom: 0,
          content: '""',
          [positionProperty]: 0,
          position: 'absolute',
          top: 0,
          width: 0,
          zIndex: -1
        }
      }
    };
  }
);

export const TableRowRoot = styled('tr')(
  ({ clickable, cursor, highContrast, hoverable, isSelected, theme: baseTheme, striped }) => {
    const theme = tableRowTheme(baseTheme);

    return {
      ...(clickable ? { cursor: 'pointer' } : {}),
      ...(cursor ? { cursor } : {}),
      backgroundColor: (() => {
        if (isSelected) {
          if (highContrast) {
            return theme.TableRow_backgroundColor_highContrast_selected;
          }
          return theme.TableRow_backgroundColor_selected;
        }
      })(),

      ...(highContrast
        ? {
            borderBottom: theme.TableRow_borderHorizontal_highContrast
          }
        : {
            '&:not(:last-child)': {
              borderBottom: theme.TableRow_borderHorizontal
            }
          }),

      '*:not(thead) > &:hover': {
        backgroundColor: (() => {
          if (hoverable) {
            if (isSelected) {
              if (highContrast) {
                return theme.TableRow_backgroundColor_highContrast_selectedHover;
              }
              return theme.TableRow_backgroundColor_selectedHover;
            }
            return theme.TableRow_backgroundColor_hover;
          }
        })()
      },

      ['&:nth-child(even):not(:hover)' + ignoreSsrWarning]: {
        backgroundColor:
          !isSelected && striped ? theme.TableRow_backgroundColor_striped : null
      },

      ['&:nth-child(even):hover']: {
        backgroundColor: !hoverable ? theme.TableRow_backgroundColor_striped : null
      },

      ...(isSelected
        ? {
            ['& > td:first-child, & > th:first-child' + ignoreSsrWarning]: {
              position: 'relative',

              '&::before': {
                backgroundColor: theme.color_theme_60,
                bottom: 0,
                content: '""',
                left: theme.direction !== 'rtl' ? 0 : null,
                right: theme.direction === 'rtl' ? 0 : null,
                position: 'absolute',
                top: 0,
                width: '4px'
              }
            }
          }
        : undefined)
    };
  }
);

export const PaddedCheckbox = withProps({ hideLabel: true })(
  styled(Checkbox)(({ density, isHeader, theme: baseTheme }) => {
    const theme = isHeader
      ? tableHeaderCellTheme(baseTheme)
      : tableCellTheme(baseTheme);
    const themePrefix = isHeader ? 'TableHeaderCell' : 'TableCell';
    const paddingVertical =
      density === 'spacious'
        ? theme[`${themePrefix}_paddingVertical_spacious`]
        : theme[`${themePrefix}_paddingVertical`];

    return {
      padding: `${paddingVertical} ${theme[`${themePrefix}_paddingHorizontal`]}`
    };
  })
);

const tableSortableHeaderCellFocusStyles = (theme) => ({
  color: theme.TableSortableHeaderCell_color_focus,
  outline: theme.TableSortableHeaderCell_border_focus,
  outlineOffset: `-${theme.TableSortableHeaderCell_border_focus.split(' ')[0]}`
});

export const TableSortableHeaderCellRoot = withProps({ noPadding: true })(
  styled(TableHeaderCell)(({ theme: baseTheme }) => {
    const theme = tableSortableHeaderCellTheme(baseTheme);

    return {
      overflow: 'hidden', // [1]

      '&:hover': {
        color: theme.TableSortableHeaderCell_color_hover
      },

      '&:focus-within': tableSortableHeaderCellFocusStyles(theme)
    };
  })
);

export const TableSortableHeaderCellButton = withProps({ as: 'button' })(
  styled(TableHeaderCell)(({ theme: baseTheme }) => {
    const theme = tableSortableHeaderCellTheme(baseTheme);

    return {
      background: 'none',
      border: 0,
      color: 'inherit',
      cursor: 'pointer',
      fontSize: 'inherit',
      fontWeight: 'inherit',
      position: 'relative',
      whiteSpace: 'nowrap',
      width: '100%',

      '&:focus': tableSortableHeaderCellFocusStyles(theme),

      '*:focus-within > &:focus': {
        outline: 0
      },

      '&::-moz-focus-inner': {
        border: 0
      },

      // [1]
      '&::after': {
        bottom: '100%',
        content: '""',
        height: '10em',
        left: 0,
        position: 'absolute',
        right: 0
      }
    };
  })
);

export const TableSortableHeaderCellContent = styled('span')({
  position: 'relative',
  whiteSpace: 'normal'
});

export const TableSortableHeaderCellIconHolder = styled('span', {
  shouldForwardProp: (prop) => prop !== 'direction' && isPropValid(prop)
})(({ isSorted, direction, theme: baseTheme }) => {
  const theme = tableSortableHeaderCellTheme(baseTheme);
  const iconAdjustment = pxToEm(2);
  const marginProperty =
    theme.direction === 'rtl' ? 'marginRight' : 'marginLeft';

  return {
    color: theme.icon_color,
    display: 'inline-block',
    height: theme.TableSortableHeaderCellIcon_size,
    [marginProperty]: `${parseFloat(theme.space_inline_xxs) +
      parseFloat(iconAdjustment)}em`,
    opacity: isSorted ? null : 0,
    position: 'relative',
    top: direction === SORT.ascending ? 2 : 1,
    width: theme.TableSortableHeaderCellIcon_size,

    '& > [role="img"]': {
      margin: `-${iconAdjustment}`
    },

    '*:hover > button > &, button:focus > &': {
      color: 'inherit'
    }
  };
});

export const TableTitleRoot = styled('caption')(
  ({ hide, theme: baseTheme }) => {
    const theme = tableTitleTheme(baseTheme);

    return {
      marginBottom: theme.TableTitle_marginBottom,
      ...(hide ? hideVisually() : undefined)
    };
  }
);

// [1] Extends the clickable area of the Button to fill the entire cell
