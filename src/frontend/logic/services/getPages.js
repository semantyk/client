/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getPages.js`
 * client | Semantyk
 *
 * Created: Dec 23, 2023
 * Modified: Apr 27, 2024
 *
 * Author(s): Semantyk Team
 * Maintainer(s): Daniel Bakas <https://id.danielbakas.com>
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