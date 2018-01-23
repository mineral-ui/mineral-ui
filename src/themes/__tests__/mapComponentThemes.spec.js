/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
