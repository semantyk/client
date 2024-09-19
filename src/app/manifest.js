/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `manifest.js`
 * @organization: Semantyk
 * @project: Client
 *
 * @created: Jul 6, 2024
 * @modified: Sep 18,2024
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Copyright © Semantyk 2024. All rights reserved.
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