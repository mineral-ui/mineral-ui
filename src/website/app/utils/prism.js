/* @flow */
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
// Prism errors out if this is imported before prism-markup ???
import 'prismjs/components/prism-jsx';

const prism = (code: string, language?: string = 'jsx') =>
  highlight(code, languages[language]);

export default prism;
