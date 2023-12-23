/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getAppKnowledge.js` | `knowledge`
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
import { APP_WEBID, APP_WEBID_DOC } from "@/backend/logic/kgm/nodes";
import { getThing } from "@/backend/api/solid/services/getThing";
import {
    getProperties
} from "@/backend/api/solid/services/getProperties";
import { appShape } from "@/backend/logic/kgm/shapes";

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