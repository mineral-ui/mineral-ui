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
import Link from '../../Link';

export default {
  title: 'Basic link',
  description: 'Links used in prose create hypertext.',
  scope: { Link },
  source: `<p>
  <Link href="http://example.com">Light years</Link> star stuff
  <Link href="http://example.com">harvesting</Link> star light citizens of distant
  <Link href="http://example.com">epochs</Link> encyclopaedia galactica vastness is bearable only through love,
  shores of the cosmic ocean!
</p>`
};
