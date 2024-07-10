/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getApp.js` | `knowledge`
 * client | Semantyk
 *
 * This module provides the logic to fetch the application knowledge graph.
 *
 * Created: Dec 10, 2023
 * Modified: Jul 10, 2024
 *
 * Author: Semantyk Team
 * Maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Local Imports
import { APP_WEBID, APP_WEBID_DOC } from "@semantyk/backend/logic/kgm/nodes";
import {
    getKnowledge
} from "@semantyk/backend/api/knowledge/services/getKnowledge";
import { shape } from "@semantyk/backend/logic/kgm/shapes";
import { getLang } from "@semantyk/frontend/logic/services/getLang";

//* Main
export async function getApp() {
    // Logic
    const document = APP_WEBID_DOC;
    const uri = APP_WEBID;
    const lang = getLang();
    const knowledge = await getKnowledge(document, uri, shape.app, lang);
    const team = "Semantyk Team";
    const twitter = "@semantyk";
    // Return
    return {
        author: team,
        creator: team,
        twitter,
        ...knowledge
    };
}