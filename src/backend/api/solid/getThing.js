/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getThing.js` | `solid`
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
import {
    getSolidDataset,
    getThing as getSolidThing
} from "@inrupt/solid-client";

//* Main
export const getThing = async (fetch, document, uri) => {
    // Project Dataset
    const dataset = await getSolidDataset(document, { fetch });
    // Return
    return getSolidThing(dataset, uri);
};