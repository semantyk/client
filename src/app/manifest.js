/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `manifest.js`
 * client | Semantyk
 *
 * Created: Jul 06, 2024
 * Modified: Jul 06, 2024
 *
 * Author: Semantyk Team
 * Maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import {
    getKnowledge
} from "@semantyk/backend/api/knowledge/services/getKnowledge";

//* Main
export default async function manifest() {
    // Hooks
    const app = await getKnowledge(fetch);
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