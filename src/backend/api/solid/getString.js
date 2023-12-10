/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getString.js` | `solid`
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
import { getStringNoLocale, getStringWithLocale } from "@inrupt/solid-client";

//* Main
export const getString = (thing, property, locale) => {
    if (locale) {
        const result = getStringWithLocale(thing, property, locale);
        if (result) return result;
    }
    return getStringNoLocale(thing, property);
};