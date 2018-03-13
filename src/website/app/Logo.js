/* @flow */
import React from 'react';

type Props = {
  fill?: string,
  title?: string
};

export default function Logo({ fill, title = 'Mineral', ...restProps }: Props) {
  const fillColor = fill || 'currentColor';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 457.93 570.83"
      {...restProps}>
      <title>{title}</title>
      <path
        className="band-1 shape-1"
        fill={fillColor}
        d="M306.14,57.35L280.27,2.23A5.65,5.65,0,0,0,277.73.11c-0.85,0-1.7-.42-3,0.42L165.36,75.16l-1.27,1.27L0,382.56H112.36Z"
      />
      <polygon
        className="band-1 shape-2"
        fill={fillColor}
        points="100.07 403.76 2.97 403.76 55.97 477.97 93.71 414.79 100.07 403.76"
      />
      <path
        className="band-2 shape-3"
        fill={fillColor}
        d="M380.76,217.2L317.16,80.67l-38.59,64.87L115.33,419,69.11,496.2l52.15,72.93a4.29,4.29,0,0,0,3,1.7H170L363,247.3Z"
      />
      <polygon
        className="band-3 shape-4"
        fill={fillColor}
        points="457.93 382.56 391.79 240.52 306.98 382.56 457.93 382.56"
      />
      <path
        className="band-3 shape-5"
        fill={fillColor}
        d="M235.75,502.14l-41.13,68.69h137.8a2.84,2.84,0,0,0,3-1.7l118.3-165.36H293.84Z"
      />
    </svg>
  );
}
