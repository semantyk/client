/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getKnowledge.js` | `knowledge`
 * client | Semantyk
 *
 * Created: Dec 05, 2023
 * Modified: Apr 27, 2024
 *
 * Author(s): Semantyk Team
 * Maintainer(s): Daniel Bakas <https://id.danielbakas.com>
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