/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getThing.js` | `solid`
 * client | Semantyk
 *
 * This file contains a function that retrieves a thing from a Solid document.
 *
 * Created: Dec 10, 2023
 * Modified: Jul 10, 2024
 *
 * Author: Semantyk Team
 * Maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import { getThing as getSolidThing } from "@inrupt/solid-client";
//* Local Imports
import { getDataset } from "@semantyk/backend/api/solid/services/getDataset";

//* Main
export async function getThing(fetch, document, uri) {
    // Dataset
    const dataset = await getDataset(fetch, document);
    // Return
    return getSolidThing(dataset, uri);
}