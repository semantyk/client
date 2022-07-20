/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # semantyk.com
 * Module | `SmileyCollection.tsx`
 *
 * June 13, 2022
 *
 * Copyright © Semantyk 2022. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* External Imports
import {Collection} from "../../basic/Collection";
import {range} from "d3";

//* Internal Imports
import {Smiley} from "./Smiley";

//* Main
const data = range(100).map(() => ({
    cx: 20 + Math.random() * 9,
    cy: 20 + Math.random() * 15,
    er: 5 + Math.random() * 10,
    mr: 30 + Math.random() * 10,
    mWidth: 7 + Math.random() * 9,
    radius: 160,
    strokeWidth: 6 + Math.random() * 3
}));

export const SmileyCollection = () => <Collection data={data} type={Smiley}/>;
