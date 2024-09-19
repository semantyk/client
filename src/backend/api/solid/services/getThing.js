/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getThing.js` | `solid`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This file contains a function that retrieves a thing from a Solid document.
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