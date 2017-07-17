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
export default function cardTheme(baseTheme: Object) {
  return {
    Card_backgroundColor: baseTheme.color_white,
    Card_borderRadius: baseTheme.borderRadius_1,
    Card_boxShadow: baseTheme.shadow_1,
    Card_paddingBottom: baseTheme.spacing_double,

    CardActions_padding: baseTheme.spacing_double,
    CardActions_marginTop: baseTheme.spacing_triple,

    CardBlock_fontSize: baseTheme.fontSize_prose,
    CardBlock_lineHeight: baseTheme.lineHeight_prose,

    CardRow_margin: baseTheme.spacing_double,
    CardRow_padding: baseTheme.spacing_triple,

    CardSubtitle_color: baseTheme.color_gray_80,
    CardSubtitle_fontSize: baseTheme.fontSize_h5,
    CardSubtitle_fontWeight: baseTheme.fontWeight_semiBold,
    CardSubtitle_marginTop: baseTheme.spacing_single,

    CardTitle_fontSize: baseTheme.fontSize_h3,
    CardTitle_fontSize_minor: baseTheme.fontSize_h4,
    CardTitle_fontWeight: baseTheme.fontWeight_semiBold,
    CardTitle_fontWeight_minor: baseTheme.fontWeight_bold,
    CardTitle_marginTop: baseTheme.spacing_single,

    ...baseTheme
  };
}
