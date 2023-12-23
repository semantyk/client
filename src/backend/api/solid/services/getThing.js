/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getThing.js` | `solid`
 * client | Semantyk
 *
 * Created: Dec 10, 2023
 * Modified: Dec 23, 2023
 *
 * Author(s): Semantyk Team
 * Maintainer(s): Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2023. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import { getThing as getSolidThing } from "@inrupt/solid-client";
import { getDataset } from "@/backend/api/solid/services/getDataset";

//* Main
export const getThing = async (fetch, document, uri) => {
    // Project Dataset
    const dataset = await getDataset(fetch, document);
    // Return
    return getSolidThing(dataset, uri);
};