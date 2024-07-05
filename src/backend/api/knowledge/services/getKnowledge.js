/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getKnowledge.js` | `knowledge`
 * client | Semantyk
 *
 * This module provides the logic to retrieve data from the
 * application's knowledge graph.
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
import {
    getAppKnowledge
} from "@semantyk/backend/api/knowledge/services/getAppKnowledge";

//* Main
export async function getKnowledge(fetch) {
    // Logic
    const appKnowledge = await getAppKnowledge(fetch);
    // Props
    const team = "Semantyk Team";
    const twitter = "@semantyk";
    // Return
    return {
        author: team,
        creator: team,
        twitter,
        ...appKnowledge
    };
}