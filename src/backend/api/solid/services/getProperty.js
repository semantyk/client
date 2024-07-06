/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getProperty.js` | `solid`
 * client | Semantyk
 *
 * This file contains a function that retrieves a property from a Solid thing.
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
import { getNumber } from "@semantyk/backend/api/solid/services/getNumber";
import {
    getStringNoLocale,
    getStringNoLocaleAll,
    getStringWithLocaleAll
} from "@inrupt/solid-client";
import { getURLAll } from "@semantyk/backend/api/solid/services/getURLAll";
import { getString } from "@semantyk/backend/api/solid/services/getString";
import { getURL } from "@semantyk/backend/api/solid/services/getURL";

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