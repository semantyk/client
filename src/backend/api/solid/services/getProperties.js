/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getProperties.js` | `solid`
 * client | Semantyk
 *
 * Created: Dec 10, 2023
 * Modified: Dec 22, 2023
 *
 * Author(s): Semantyk Team
 * Maintainer(s): Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2023. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import { getProperty } from "@/backend/api/solid/services/getProperty";

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