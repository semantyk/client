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
            // Favicon
            {
                src: "/favicon.svg",
                sizes: "any",
                type: "image/svg+xml",
            },
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
            {
                src: "/favicon-dark.svg",
                sizes: "any",
                type: "image/svg+xml",
            },
            {
                src: "/favicon-dark.ico",
                sizes: "any",
                type: "image/x-icon",
            },
            // Icon
            {
                src: "/icon.svg",
                sizes: "any",
                type: "image/svg+xml",
            },
            {
                src: "/icon.png",
                sizes: "any",
                type: "image/png",
            },
            {
                src: "/icon-dark.svg",
                sizes: "any",
                type: "image/svg+xml",
            },
            {
                src: "/icon-dark.png",
                sizes: "any",
                type: "image/png",
            },
            // SEO
            {
                src: "/seo.svg",
                sizes: "any",
                type: "image/svg+xml",
            },
            {
                src: "/seo.png",
                sizes: "any",
                type: "image/png",
            },
            {
                src: "/seo-dark.svg",
                sizes: "any",
                type: "image/svg+xml",
            },
            {
                src: "/seo-dark.png",
                sizes: "any",
                type: "image/png",
            }
        ],
    };
}