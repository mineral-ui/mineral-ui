/* @flow */

export default function rtlTextAlign(align?: string) {
  if (align === 'start') {
    return 'left';
  } else if (align === 'end') {
    return 'right';
  } else {
    return align;
  }
}
