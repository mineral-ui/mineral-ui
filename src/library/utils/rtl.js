/* @flow */

const getAlignment = ({
  align,
  capitalize,
  direction
}: {
  align: string,
  capitalize?: boolean,
  direction?: string
}): string => {
  const rtl = direction === 'rtl';

  let result = align;
  if ((rtl && align === 'start') || (!rtl && align === 'end')) {
    result = 'Right';
  } else if ((rtl && align === 'end') || align === 'start') {
    result = 'Left';
  }

  return capitalize ? result : result.toLowerCase();
};

export const rtlAlign = (options: {
  align: string,
  capitalize?: boolean,
  direction?: string
}): string => getAlignment(options);

export const rtlTextAlign = ({
  align,
  direction
}: {
  align?: string,
  direction?: string
}): string | typeof undefined =>
  align ? getAlignment({ align, direction }) : align;
