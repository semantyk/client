/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getPages.js`
 * client | Semantyk
 *
 * This file contains the logic for fetching the pages.
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

//* Main
export async function getPages() {
    // Logic
    // TODO: Replace with API call
    const pages = {
        "archive": {
            title: "Archive",
            subtitle: "Knowledge Graph & File System",
            path: "/archive"
        },
        "solid": {
            title: "Solid",
            subtitle: "Social Linked Data",
            path: "/solid"
        }
    };
    // Return
    return pages;
}