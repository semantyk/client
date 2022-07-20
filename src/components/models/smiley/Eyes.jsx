/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # semantyk.com
 * Module | `Eyes.tsx`
 *
 * July 20, 2022
 *
 * Copyright © Semantyk 2022. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Main
export const Eyes = ({ cx, cy, r }) => (<>
  <circle cx={-cx} cy={-cy} r={r}/>
  <circle cx={cx} cy={-cy} r={r}/>
</>)
