/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `service.js`
 * client | Semantyk
 *
 * Created: Dec 05, 2023
 * Modified: Dec 05, 2023
 *
 * Author(s): Semantyk Team
 * Maintainer(s): Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2023. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports

//* Local Imports
import { APP_WEBID, APP_WEBID_DOC } from "@/services/app/nodes";
import { getProperties, getThing } from "@/services/solid/service";
import { appShape } from "@/services/app/shape";


//* Main
export async function getData(fetch) {
    // Logic
    const document = APP_WEBID_DOC.value;
    const uri = APP_WEBID.value;
    const thing = await getThing(fetch, document, uri);
    const lang = "en";
    const properties = getProperties(thing, appShape, lang);
    // Props
    const team = "Semantyk Team";
    const twitter = "@semantyk";
    // Return
    return {
        author: team,
        creator: team,
        lang,
        twitter,
        ...properties
    };
}