/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getNumber.js` | `solid`
 * client | Semantyk
 *
 * Created: Dec 10, 2023
 * Modified: Dec 10, 2023
 *
 * Author(s): Semantyk Team
 * Maintainer(s): Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2023. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import { getInteger } from "@inrupt/solid-client";

//* Main
export const getNumber = (thing, property) => {
    return getInteger(thing, property);
};