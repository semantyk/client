/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getKnowledge.js`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This module provides the logic to fetch a knowledge graph.
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