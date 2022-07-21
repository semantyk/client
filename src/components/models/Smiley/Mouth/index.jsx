/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # semantyk.com
 * Module | `Mouth.tsx`
 *
 * July 20, 2022
 *
 * Copyright © Semantyk 2022. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* External Imports
import { arc } from 'd3'

//* Main
const Mouth = (props) => {
    const { r, width } = props
    const mouthArc = arc()
        .innerRadius(r)
        .outerRadius(r + width)
        .startAngle(Math.PI / 2)
        .endAngle(Math.PI * 3 / 2)
    return <path d={mouthArc()}/>
}

//* Exports
export default Mouth
