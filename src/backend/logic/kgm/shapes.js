/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `shapes.js` | `kgm`
 * client | Semantyk
 *
 * This file contains shapes for the application.
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

//* Local Imports
import { ARCHIVE, SCHEMA } from "@semantyk/backend/logic/kgm/nodes";


//* Main
export const appShape = [
    { "ns": SCHEMA, "fragment": "copyrightYear", "type": "number" },
    { "ns": SCHEMA, "fragment": "description", "type": "string" },
    { "ns": SCHEMA, "fragment": "keywords", "type": "stringAllNoLocale" },
    { "ns": SCHEMA, "fragment": "name", "type": "stringNoLocale" },
    { "ns": SCHEMA, "fragment": "slogan", "type": "string" },
    { "ns": ARCHIVE, "fragment": "topLevelDomain", "type": "stringNoLocale" }
];