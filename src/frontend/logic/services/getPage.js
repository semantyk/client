/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getPage.js`
 * client | Semantyk
 *
 * This file contains the `getPage` service.
 *
 * Created: Dec 23, 2023
 * Modified: Jul 5, 2024
 *
 * Author: Semantyk Team
 * Maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import { getPages } from "@semantyk/frontend/logic/services/getPages";

//* Main
export async function getPage(name) {
    // Logic
    const pages = await getPages();
    // Return
    return pages[name];
}