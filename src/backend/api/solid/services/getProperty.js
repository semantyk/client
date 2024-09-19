/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getProperty.js` | `solid`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This file contains a function that retrieves a property from a Solid thing.
 *
 * @created: Dec 10, 2023
 * @modified: Sep 18,2024
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Copyright © Semantyk 2024. All rights reserved.
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