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
import React from 'react';

type Props = {
  fill?: string,
  title?: string
};

export default function LogotypeHorizontal({
  fill,
  title = 'Mineral',
  ...restProps
}: Props) {
  const fillColor = fill || 'currentColor';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384.06 89.18"
      {...restProps}>
      <title>{title}</title>
      <polygon
        className="band-1 shape-1"
        fill={fillColor}
        points="15.45 62.37 0.44 62.37 8.63 73.81 15.45 62.37"
      />
      <path
        className="band-1 shape-2"
        fill={fillColor}
        d="M47.35,8.85l-4-8.51A0.58,0.58,0,0,0,43,0a0.57,0.57,0,0,0-.49.08L25.6,11.56a0.56,0.56,0,0,0-.19.21L0,59.1H17.39Z"
      />
      <path
        className="band-2 shape-3"
        fill={fillColor}
        d="M58.88,33.55L49,12.42,10.7,76.7l8,11.25a0.59,0.59,0,0,0,.48.24H26.3Z"
      />
      <path
        className="band-3 shape-4"
        fill={fillColor}
        d="M30.09,88.2H51.42A0.59,0.59,0,0,0,51.89,88l18.3-25.59H45.5Z"
      />
      <polygon
        className="band-3 shape-5"
        fill={fillColor}
        points="47.44 59.1 70.8 59.1 60.55 37.12 47.44 59.1"
      />
      <path
        className="text-1"
        fill={fillColor}
        d="M175,88.13h8.41v-43H175v43Zm41.17-44c-5.07,0-10.23,2.1-13.19,5.93l-0.48-5h-7.74v43h8.41V63.56c0-4.21.76-6.5,2-8.41,1.72-2.58,4.78-4.3,9.08-4.3s6.79,1.91,8.22,4.87c1,2,1.34,4.31,1.34,8.22V88.13h8.41v-25c0-5.45-.77-8.61-2.2-11.38C227.14,46.64,221.69,44.15,216.14,44.15Zm85.35,7.17-0.38-6.22h-7.84v43h8.41V64.42c0-6.31,2.2-11.76,11.37-11.76a12.9,12.9,0,0,1,1.72.1V44.44h-1A14.81,14.81,0,0,0,301.5,51.32Zm37.36-7.17c-13.19,0-17.69,8.41-17.69,13.67h8c0.77-4.11,3.25-7.07,10.13-7.07,5.35,0,8,2.2,9,4.78,0.48,1.25.77,2.77,0.77,6.31V63h-5.45c-17.69,0-23.23,5.26-23.23,13.48,0,7,5.45,12.71,14,12.71a18.69,18.69,0,0,0,14.82-7l0.09,5.93h8.22V61.93a27.47,27.47,0,0,0-1-7.94C354.25,47.12,348,44.15,338.86,44.15Zm10.23,26a13.42,13.42,0,0,1-1.34,6.5c-2,3.92-6.21,6.12-11.38,6.12-5.35,0-7.55-3.44-7.55-6.59,0-5.64,4.11-7.36,15.39-7.36h4.88v1.34Zm32.39,11.38c-3.73,0-4.3-1.05-4.3-4.59V19.58h-8.41V77.8c0,7.74,2.77,10.52,10.42,10.52,0.57,0,2.58-.1,4.88-0.29v-6.6A23.5,23.5,0,0,1,381.48,81.53ZM181.35,27.43a4.25,4.25,0,1,0,2.13,3.68A4.26,4.26,0,0,0,181.35,27.43Zm81.31,16.72c-13.29,0-21.89,10.32-21.89,22.47,0,13.19,9.18,22.56,21.89,22.56,11.57,0,18.93-7.45,20.75-14.72H274.8a12,12,0,0,1-11.66,8,14.45,14.45,0,0,1-14.26-13.25c0-.06,0-0.11,0-0.17,0-.21,0-0.42-0.06-0.63h35.28V67.1C284.07,51.9,274.13,44.15,262.66,44.15ZM249.18,62.51c0-.2.11-0.39,0.15-0.58v0a13.75,13.75,0,0,1,13.31-11c6.69,0,12.14,4.2,12.72,11.66H249.18ZM130.4,75.13L108.88,25.64H96.06V88.13h9V38.07a0.32,0.32,0,0,0,.18-0.1l22,50.16H133c7.39-18.74,14.6-31.42,22-50.16,0.09,0,.19.1,0.28,0.1V88.13h9.28V25.64H152.2Z"
      />
    </svg>
  );
}
