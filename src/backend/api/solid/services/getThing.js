/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getThing.js` | `solid`
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
import { getThing as getSolidThing } from "@inrupt/solid-client";
import { getDataset } from "@semantyk/backend/api/solid/services/getDataset";

//* Main
export const getThing = async (fetch, document, uri) => {
    // Project Dataset
    const dataset = await getDataset(fetch, document);
    // Return
    return getSolidThing(dataset, uri);
};