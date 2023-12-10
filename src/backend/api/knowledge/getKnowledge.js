/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getKnowledge.js` | `knowledge`
 * client | Semantyk
 *
 * Created: Dec 05, 2023
 * Modified: Dec 10, 2023
 *
 * Author(s): Semantyk Team
 * Maintainer(s): Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2023. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Local Imports
import { getAppKnowledge } from "@/backend/api/knowledge/getAppKnowledge";

//* Main
export async function getKnowledge(fetch) {
    // Logic
    const appData = await getAppKnowledge(fetch);
    // Props
    const team = "Semantyk Team";
    const twitter = "@semantyk";
    // Return
    return {
        author: team,
        creator: team,
        twitter,
        ...appData
    };
}