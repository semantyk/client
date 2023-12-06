/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `service.js`
 * client | Semantyk
 *
 * Created: Dec 05, 2023
 * Modified: Dec 05, 2023
 *
 * Author(s): Semantyk Team
 * Maintainer(s):
 *
 * Copyright © Semantyk 2023. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import { getThing } from "@inrupt/solid-client";
import { getProperties } from "@/services/solid/service";

//* Main
export async function getData(fetch) {
    // Logic
    const thing = await getThing(fetch, APP_WEBID_DOC, APP_WEBID);
    const lang = navigator.language.substring(0, 2);
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