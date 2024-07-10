/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getKnowledge.js`
 * client | Semantyk
 *
 * This module provides the logic to fetch a knowledge graph.
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
import { fetch } from "@inrupt/solid-client-authn-browser";
//* Local Imports
import { getThing } from "@semantyk/backend/api/solid/services/getThing";
import {
    getProperties
} from "@semantyk/backend/api/solid/services/getProperties";

//* Main
export async function getKnowledge(document, uri, shape, lang) {
    // Logic
    const thing = await getThing(fetch, document, uri);
    // Return
    return getProperties(thing, shape, lang);
}