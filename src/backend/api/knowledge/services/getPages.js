/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getPages.js`
 * client | Semantyk
 *
 * This file contains the logic for fetching the pages.
 *
 * Created: Dec 23, 2023
 * Modified: Jul 10, 2024
 *
 * Author: Semantyk Team
 * Maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import { getThingAll } from "@inrupt/solid-client";
import { fetch } from "@inrupt/solid-client-authn-browser";
//* Local Imports
import { APP_PAGES_DOC } from "@semantyk/backend/logic/kgm/nodes";
import { getDataset } from "@semantyk/backend/api/solid/services/getDataset";
import { shape } from "@semantyk/backend/logic/kgm/shapes";
import {
    getProperties
} from "@semantyk/backend/api/solid/services/getProperties";

//* Main
export async function getPages(lang) {
    // Logic
    const uri = APP_PAGES_DOC;
    const dataset = await getDataset(fetch, uri);
    const things = getThingAll(dataset);
    let pages = {};
    things.forEach((thing) => {
        const { pathname } = new URL(thing.url, uri);
        const properties = getProperties(thing, shape.page, lang);
        pages[pathname] = { path: pathname, ...properties };
    });
    // Return
    return pages;
}