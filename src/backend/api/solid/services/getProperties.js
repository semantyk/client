/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getProperties.js` | `solid`
 * client | Semantyk
 *
 * This file contains a function that retrieves a set of properties from a
 * Solid thing.
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
import { getProperty } from "@semantyk/backend/api/solid/services/getProperty";

//* Main
export const getProperties = (thing, shape, locale) => {
    // Logic
    let properties = { lang: locale };
    for (const { ns, fragment, type } of shape) {
        const property = ns + fragment;
        properties[fragment] = getProperty(thing, type, property, locale);
    }
    // Return
    return properties;
};