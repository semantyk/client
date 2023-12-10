/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getProperty.js` | `solid`
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
import { getNumber } from "@/backend/api/solid/getNumber";
import {
    getStringNoLocale,
    getStringNoLocaleAll,
    getStringWithLocaleAll
} from "@inrupt/solid-client";
import { getURLAll } from "@/backend/api/solid/getURLAll";
import { getString } from "@/backend/api/solid/getString";
import { getURL } from "@/backend/api/solid/getURL";

//* Main
export const getProperty = (thing, type, property, locale) => {
    // Ranges
    switch (type) {
        case "number":
            return getNumber(thing, property);
        case "stringNoLocale":
            return getStringNoLocale(thing, property);
        case "string":
            return getString(thing, property, locale);
        case "stringAllNoLocale":
            return getStringNoLocaleAll(thing, property);
        case "stringAll":
            return getStringWithLocaleAll(thing, property, locale);
        case "url":
            return getURL(thing, property);
        case "urlAll":
            return getURLAll(thing, property);
    }
};