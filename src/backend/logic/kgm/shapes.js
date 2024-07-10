/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `shapes.js` | `kgm`
 * client | Semantyk
 *
 * This file contains shapes for the application.
 *
 * Created: Dec 5, 2023
 * Modified: Jul 10, 2024
 *
 * Author: Semantyk Team
 * Maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Local Imports
import { ARCHIVE, FOAF, SCHEMA } from "@semantyk/backend/logic/kgm/nodes";

//* Main
export const shape = {
    app: [
        { "ns": SCHEMA, "fragment": "copyrightYear", "type": "number" },
        { "ns": SCHEMA, "fragment": "description", "type": "string" },
        { "ns": SCHEMA, "fragment": "keywords", "type": "string" },
        { "ns": SCHEMA, "fragment": "name", "type": "string" },
        { "ns": SCHEMA, "fragment": "slogan", "type": "string" },
        { "ns": ARCHIVE, "fragment": "topLevelDomain", "type": "string" }
    ],
    navBar: [
        { "ns": ARCHIVE, "fragment": "navBarPages", "type": "urlAll" }
    ],
    page: [
        { "ns": FOAF, "fragment": "primaryTopic", "type": "url" },
        { "ns": SCHEMA, "fragment": "author", "type": "url" },
        { "ns": SCHEMA, "fragment": "description", "type": "string" },
        { "ns": SCHEMA, "fragment": "name", "type": "string" },
        { "ns": ARCHIVE, "fragment": "hasHeaderTitle", "type": "string" },
        {
            "ns": ARCHIVE,
            "fragment": "hasHeaderSubtitle",
            "type": "stringNoLocale"
        },
        { "ns": ARCHIVE, "fragment": "navBar", "type": "url" },
        { "ns": ARCHIVE, "fragment": "footerPosition", "type": "string" }
    ]
};