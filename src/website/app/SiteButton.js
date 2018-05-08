/* @flow */
import { pxToEm } from '../../library/styles';
import { createThemedComponent } from '../../library/themes';
import Button from '../../library/Button';

// prettier-ignore
const componentTheme = baseTheme => ({
  Button_backgroundColor: baseTheme.SiteButton_backgroundColor || baseTheme.color_gray_20,
  Button_backgroundColor_active: baseTheme.SiteButton_backgroundColor_active || baseTheme.color_gray_30,
  Button_backgroundColor_focus: baseTheme.SiteButton_backgroundColor_focus || baseTheme.color_gray_20,
  Button_backgroundColor_hover: baseTheme.SiteButton_backgroundColor_hover || baseTheme.color_gray_10,
  Button_backgroundColor_minimal_active: baseTheme.SiteButton_backgroundColor_minimal_active || baseTheme.color_gray_20,
  Button_backgroundColor_minimal_hover: baseTheme.SiteButton_backgroundColor_minimal_hover || baseTheme.color_gray_10,
  Button_backgroundColor_primary: baseTheme.SiteButton_backgroundColor_primary || baseTheme.color_theme_60,
  Button_backgroundColor_primary_active: baseTheme.SiteButton_backgroundColor_primary_active || baseTheme.color_theme_70,
  Button_backgroundColor_primary_focus: baseTheme.SiteButton_backgroundColor_primary_focus || baseTheme.color_theme_60,
  Button_backgroundColor_primary_hover: baseTheme.SiteButton_backgroundColor_primary_hover || baseTheme.color_theme_50,
  Button_borderColor: baseTheme.SiteButton_borderColor || baseTheme.borderColor,
  Button_borderColor_focus: baseTheme.SiteButton_borderColor_focus || baseTheme.color_white,
  Button_borderRadius: baseTheme.SiteButton_borderRadius || baseTheme.borderRadius_1,
  Button_borderWidth: baseTheme.SiteButton_borderWidth || 1, // px
  Button_boxShadow_focus: baseTheme.SiteButton_boxShadow_focus || `0 0 0 1px ${baseTheme.borderColor_theme_focus}`,
  Button_color: baseTheme.SiteButton_color || baseTheme.color_gray_100,
  Button_color_minimal: baseTheme.SiteButton_color_minimal || baseTheme.color_theme,
  Button_color_primary: baseTheme.SiteButton_color_primary || baseTheme.color_themePrimary,
  Button_fontWeight: baseTheme.SiteButton_fontWeight || baseTheme.fontWeight_semiBold,
  Button_paddingHorizontal: baseTheme.SiteButton_paddingHorizontal || baseTheme.space_inset_sm,
  Button_paddingIconOnly_small: baseTheme.SiteButton_paddingIconOnly_small || pxToEm(3),
  Button_paddingIconOnly_medium: baseTheme.SiteButton_paddingIconOnly_medium || pxToEm(7),
  Button_paddingIconOnly_large: baseTheme.SiteButton_paddingIconOnly_large || pxToEm(7),
  Button_paddingIconOnly_jumbo: baseTheme.SiteButton_paddingIconOnly_jumbo || pxToEm(13),
  Button_height_small: baseTheme.SiteButton_height_small || baseTheme.size_small,
  Button_height_medium: baseTheme.SiteButton_height_medium || baseTheme.size_medium,
  Button_height_large: baseTheme.SiteButton_height_large || baseTheme.size_large,
  Button_height_jumbo: baseTheme.SiteButton_height_jumbo || baseTheme.size_jumbo,

  ButtonContent_fontSize: baseTheme.SiteButtonContent_fontSize || baseTheme.fontSize_ui,
  ButtonContent_fontSize_small: baseTheme.SiteButtonContent_fontSize_small || pxToEm(12),

  ButtonIcon_margin: baseTheme.SiteButtonIcon_margin || baseTheme.space_inset_sm,

  ...baseTheme
});

export default createThemedComponent(Button, ({ theme }) => ({
  ...componentTheme(theme)
}));
