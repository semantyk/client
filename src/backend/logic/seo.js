/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `seo.js` | `logic`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This file contains logic for generating metadata for SEO purposes.
 *
 * @created: Dec 5, 2023
 * @modified: Mar 7, 2025
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Semantyk © 2025. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import { getApp } from "@semantyk/backend/api/knowledge/services/getApp";
import { getPage } from "@semantyk/backend/api/knowledge/services/getPage";

//* Main
export async function getMetadata(slug) {
    // Logic
    const app = await getApp();
    const page = await getPage(slug);
    const source = slug ? page : app;
    // Props
    const description = `${app.slogan} | ${source.description}`;
    const title = slug ? `${source.name} | ${app.name}` : app.name;
    // Return
    return {
        // Base URL
        metadataBase: new URL("https://www.semantyk.com/"),
        // Metadata
        alternates: {
            canonical: "/",
            languages: {
                "en": "/",
                "es": "/"
            }
        },
        applicationName: app.name,
        authors: [{ name: app.author }],
        category: "technology",
        creator: app.creator,
        description,
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
            description,
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
            title,
            type: "website",
            url: "/"
        },
        title: {
            default: source.name,
            template: `%s | ${app.name}`
        },
        twitter: {
            card: "summary_large_image",
            creator: app.twitter,
            creatorId: "",
            description,
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
            title,
        }
    };
}