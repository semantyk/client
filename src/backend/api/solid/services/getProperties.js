/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getProperties.js` | `solid`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This file contains a function that retrieves a set of properties from a
 * Solid thing.
 *
 * @created: Dec 10, 2023
 * @modified: Mar 7, 2025
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Semantyk © 2025. All rights reserved.
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