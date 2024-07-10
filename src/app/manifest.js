/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `manifest.js`
 * client | Semantyk
 *
 * Created: Jul 6, 2024
 * Modified: Jul 10, 2024
 *
 * Author: Semantyk Team
 * Maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import { getApp } from "@semantyk/backend/api/knowledge/services/getApp";

//* Main
export default async function manifest() {
    // Logic
    const app = await getApp();
    // Return
    return {
        name: app.name,
        short_name: app.name,
        description: app.description,
        start_url: "/",
        display: "standalone",
        background_color: "#fff",
        theme_color: "#fff",
        icons: [
            {
                src: "/icon.png",
                sizes: "any",
                type: "image/png",
            },
            {
                src: "/icon-dark.png",
                sizes: "any",
                type: "image/png",
            }
        ],
    };
}