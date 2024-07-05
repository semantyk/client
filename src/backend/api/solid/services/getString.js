/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getString.js` | `solid`
 * client | Semantyk
 *
 * This file contains a function that retrieves a string value from a Solid
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
import { getStringNoLocale, getStringWithLocale } from "@inrupt/solid-client";

//* Main
export const getString = (thing, property, locale) => {
    if (locale) {
        const result = getStringWithLocale(thing, property, locale);
        if (result) return result;
    }
    return getStringNoLocale(thing, property);
};