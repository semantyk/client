/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # semantyk.com
 * Module | `FaceContainer.tsx`
 *
 * July 20, 2022
 *
 * Copyright © Semantyk 2022. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Main
export const FaceContainer = ({ children, data }) => (
  <svg height={data.radius} width={data.radius}>
    <g transform={`translate(${data.radius / 2},${data.radius / 2})`}>
      {children}
    </g>
  </svg>
)
