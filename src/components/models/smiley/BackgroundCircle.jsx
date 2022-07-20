/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # semantyk.com
 * Module | `BackgroundCircle.tsx`
 *
 * July 20, 2022
 *
 * Copyright © Semantyk 2022. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

export const BackgroundCircle = ({ radius, strokeWidth }) => (
  <circle
    r={radius / 2 - strokeWidth / 2}
    fill="yellow"
    stroke="black"
    strokeWidth={strokeWidth}
  />
)
