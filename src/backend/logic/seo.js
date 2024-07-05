/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `seo.js` | `logic`
 * client | Semantyk
 *
 * This file contains logic for generating metadata for SEO purposes.
 *
 * Created: Dec 5, 2023
 * Modified: Jul 5, 2024
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
export async function getMetadata() {
    // Hooks
    const app = await getKnowledge(fetch);
    // Return
    return {
        // Base URL
        metadataBase: new URL("https://www.semantyk.com/"),
        // Metadata
        alternates: {
            canonical: "/",
            languages: {
                "en": "/en",
                "es": "/es"
            }
        },
        applicationName: app.name,
        authors: [{ name: app.author }],
        category: "technology",
        creator: app.creator,
        description: `${app.slogan} | ${app.description}`,
        href: "/",
        icons: {
            apple: "/apple-icon.png",
            icon: "/icon.png",
            shortcut: "/favicon.ico"
        },
        keywords: app.keywords,
        lang: app.lang,
        openGraph: {
            description: `${app.slogan} | ${app.description}`,
            images: ["/opengraph-image.png"],
            locale: app.lang,
            siteName: app.name,
            title: app.name,
            type: "website",
            url: "/"
        },
        title: {
            default: app.name,
            template: `%s | ${app.name}`
        },
        twitter: {
            card: "summary_large_image",
            creator: app.twitter,
            creatorId: "",
            description: `${app.slogan} | ${app.description}`,
            images: ["/opengraph-image.png"],
            siteId: "",
            title: app.name,
        }
    };
}