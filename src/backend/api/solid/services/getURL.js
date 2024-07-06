/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getURL.js` | `solid`
 * client | Semantyk
 *
 * This file contains a function that retrieves a URL value from a Solid thing.
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
import { getUrl } from "@inrupt/solid-client";

//* Main
export const getURL = (thing, property) => {
    return getUrl(thing, property);
};