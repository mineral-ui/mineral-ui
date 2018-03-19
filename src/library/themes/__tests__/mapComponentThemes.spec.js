/* @flow */
import mapComponentThemes from '../mapComponentThemes';

describe('mapComponentThemes', () => {
  let baseTheme, source, override, theme;

  beforeEach(() => {
    baseTheme = {
      Base_one: 'AAA'
    };

    source = {
      name: 'Source',
      theme: {
        Source_one: 'A',
        Source_two: 'B',
        Source_four: 'D'
      }
    };
    override = {
      name: 'Override',
      theme: {
        Override_one: 'X',
        Override_two: 'Y',
        Override_three: 'Z'
      }
    };

    theme = mapComponentThemes(source, override, baseTheme);
  });

  it('Includes unchanged base theme keys', () => {
    expect(theme.Base_one).toEqual(baseTheme.Base_one);
  });

  it('Applies override theme keys', () => {
    expect(theme.Override_one).toEqual(override.theme.Override_one);
    expect(theme.Override_two).toEqual(override.theme.Override_two);
  });

  it('Includes additional keys from override theme', () => {
    expect(theme.Override_three).toEqual(override.theme.Override_three);
  });

  it('Includes renamed source theme keys even if not overridden', () => {
    expect(theme.Override_four).toEqual(source.theme.Source_four);
  });
});
