/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getPage.js`
 * client | Semantyk
 *
 * This file contains the `getPage` service.
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
import { getPages } from "@semantyk/backend/api/knowledge/services/getPages";
import { getLang } from "@semantyk/frontend/logic/services/getLang";

//* Main
export async function getPage(slug) {
    // Logic
    const lang = getLang();
    const pages = await getPages(lang);
    const path = `/${slug}`;
    const page = path in pages ? pages[path] : pages["/404"];
    // Return
    return page;
}