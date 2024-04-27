/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getString.js` | `solid`
 * client | Semantyk
 *
 * Created: Dec 10, 2023
 * Modified: Apr 27, 2024
 *
 * Author(s): Semantyk Team
 * Maintainer(s): Daniel Bakas <https://id.danielbakas.com>
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