/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getPage.js`
 * @@organization: Semantyk
 * @project: Client
 *
 * @file: This file contains the `getPage` service.
 *
 * @created: Dec 23, 2023
 * @modified: Sep 18,2024
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Copyright © Semantyk 2024. All rights reserved.
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