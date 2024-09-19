/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getString.js` | `solid`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This file contains a function that retrieves a string value from a Solid
 * thing.
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
import { getStringNoLocale, getStringWithLocale } from "@inrupt/solid-client";

//* Main
export const getString = (thing, property, locale) => {
    if (locale) {
        const result = getStringWithLocale(thing, property, locale);
        if (result) return result;
    }
    return getStringNoLocale(thing, property);
};