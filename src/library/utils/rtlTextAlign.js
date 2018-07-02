/* @flow */

export default function rtlTextAlign(align?: string, direction?: string) {
  const rtl = direction === 'rtl';
  if ((rtl && align === 'start') || (!rtl && align === 'end')) {
    return 'right';
  } else if ((rtl && align === 'end') || align === 'start') {
    return 'left';
  } else {
    return align;
  }
}
