/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `shape.js`
 * client | Semantyk
 *
 * Created: Dec 05, 2023
 * Modified: Dec 05, 2023
 *
 * Author(s): Semantyk Team
 * Maintainer(s):
 *
 * Copyright © Semantyk 2023. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Local Imports
import { ARCHIVE } from "@/services/app/namespaces";
import { SCHEMA } from "@/services/solid/namespaces";

//* Main
export const appShape = [
    { "ns": SCHEMA, "fragment": "copyrightYear", "type": "number" },
    { "ns": SCHEMA, "fragment": "description", "type": "string" },
    { "ns": SCHEMA, "fragment": "keywords", "type": "stringAllNoLocale" },
    { "ns": SCHEMA, "fragment": "name", "type": "stringNoLocale" },
    { "ns": SCHEMA, "fragment": "slogan", "type": "string" },
    { "ns": ARCHIVE, "fragment": "topLevelDomain", "type": "stringNoLocale" }
];