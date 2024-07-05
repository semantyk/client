/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getNumber.js` | `solid`
 * client | Semantyk
 *
 * This file contains a function that retrieves a number value from a Solid
 * thing.
 *
 * Created: Dec 10, 2023
 * Modified: Jul 5, 2024
 *
 * Author: Semantyk Team
 * Maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import { getInteger } from "@inrupt/solid-client";

//* Main
export const getNumber = (thing, property) => {
    return getInteger(thing, property);
};