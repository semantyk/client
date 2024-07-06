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
            apple: [
                {
                    type: "image/svg+xml",
                    media: "(prefers-color-scheme: light)",
                    url: "/icon.svg"
                },
                {
                    type: "image/png",
                    media: "(prefers-color-scheme: light)",
                    url: "/icon.png"
                },
                {
                    type: "image/svg+xml",
                    media: "(prefers-color-scheme: dark)",
                    url: "/icon-dark.svg"
                },
                {
                    type: "image/png",
                    media: "(prefers-color-scheme: dark)",
                    url: "/icon-dark.png"
                },
            ],
            icon: [
                {
                    type: "image/svg+xml",
                    media: "(prefers-color-scheme: light)",
                    url: "/icon.svg"
                },
                {
                    type: "image/png",
                    media: "(prefers-color-scheme: light)",
                    url: "/icon.png"
                },
                {
                    type: "image/svg+xml",
                    media: "(prefers-color-scheme: dark)",
                    url: "/icon-dark.svg"
                },
                {
                    type: "image/png",
                    media: "(prefers-color-scheme: dark)",
                    url: "/icon-dark.png"
                },
            ],
            shortcut: [
                {
                    type: "image/svg+xml",
                    media: "(prefers-color-scheme: light)",
                    url: "/favicon.svg"
                },
                {
                    type: "image/x-icon",
                    media: "(prefers-color-scheme: light)",
                    url: "/favicon.ico"
                },
                {
                    type: "image/svg+xml",
                    media: "(prefers-color-scheme: dark)",
                    url: "/favicon-dark.svg"
                },
                {
                    type: "image/x-icon",
                    media: "(prefers-color-scheme: dark)",
                    url: "/favicon-dark.ico"
                }
            ],
        },
        keywords: app.keywords,
        lang: app.lang,
        openGraph: {
            description: `${app.slogan} | ${app.description}`,
            images: [
                {
                    type: "image/svg+xml",
                    media: "(prefers-color-scheme: light)",
                    url: "/seo.svg"
                },
                {
                    type: "image/png",
                    media: "(prefers-color-scheme: light)",
                    url: "/seo.png"
                },
                {
                    type: "image/svg+xml",
                    media: "(prefers-color-scheme: dark)",
                    url: "/seo-dark.svg"
                },
                {
                    type: "image/png",
                    media: "(prefers-color-scheme: dark)",
                    url: "/seo-dark.png"
                },
            ],
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
            images: [
                {
                    type: "image/svg+xml",
                    media: "(prefers-color-scheme: light)",
                    url: "/seo.svg"
                },
                {
                    type: "image/png",
                    media: "(prefers-color-scheme: light)",
                    url: "/seo.png"
                },
                {
                    type: "image/svg+xml",
                    media: "(prefers-color-scheme: dark)",
                    url: "/seo-dark.svg"
                },
                {
                    type: "image/png",
                    media: "(prefers-color-scheme: dark)",
                    url: "/seo-dark.png"
                },
            ],
            siteId: "",
            title: app.name,
        }
    };
}