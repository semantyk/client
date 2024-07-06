/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getAppKnowledge.js` | `knowledge`
 * client | Semantyk
 *
 * This module provides the logic to fetch the application knowledge graph.
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
import { APP_WEBID, APP_WEBID_DOC } from "@semantyk/backend/logic/kgm/nodes";
import { getThing } from "@semantyk/backend/api/solid/services/getThing";
import {
    getProperties
} from "@semantyk/backend/api/solid/services/getProperties";
import { appShape } from "@semantyk/backend/logic/kgm/shapes";

//* Main
export async function getAppKnowledge(fetch) {
    // Logic
    const document = APP_WEBID_DOC;
    const uri = APP_WEBID;
    const thing = await getThing(fetch, document, uri);
    const lang = "en";
    // Return
    return getProperties(thing, appShape, lang);
}