/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `service.js` | `metadata`
 * client | Semantyk
 *
 * Created: Dec 03, 2023
 * Modified: Dec 03, 2023
 *
 * Author(s): Semantyk Team
 * Maintainer(s): Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2023. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Main
import getData from "../data/service";

export default function getMetadata() {
    // Hooks
    const { app } = getData();
    // Return
    return {
        // Base URL
        metadataBase: new URL(app.url),
        // Metadata
        alternates: {
            canonical: "/",
            languages: {
                "en": "/en",
                "es": "/es"
            }
        },
        applicationName: app.title,
        authors: [{ name: app.author, url: app.webId }],
        category: "technology",
        creator: app.creator,
        description: app.description,
        href: "/",
        icons: {
            apple: "/apple-icon.png",
            icon: "/icon.png",
            shortcut: "/favicon.ico"
        },
        keywords: app.keywords,
        lang: app.lang,
        openGraph: {
            description: app.description,
            images: ["/opengraph-image.png"],
            locale: app.lang,
            siteName: app.title,
            title: app.title,
            type: "website",
            url: "/",

        },
        title: { default: app.title, template: `%s | ${app.title}` },
        twitter: {
            card: "summary_large_image",
            creator: app.twitter,
            creatorId: "",
            description: app.description,
            images: ["/opengraph-image.png"],
            siteId: "",
            title: app.title,
        }
    };
}