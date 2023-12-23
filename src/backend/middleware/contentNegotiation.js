/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `contentNegotiation.js`
 * client | Semantyk
 *
 * Created: Dec 23, 2023
 * Modified: Dec 23, 2023
 *
 * Author(s): Semantyk Team
 * Maintainer(s):
 *
 * Copyright © Semantyk 2023. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import { APP_PAGES_DOC } from "@/backend/logic/kgm/nodes";
import { getDataset } from "@/backend/api/solid/services/getDataset";

//* Main
export const contentTypes = [
    "application/ld+json",
    "text/turtle"
];

export const requiresContentNegotiation = (accept) => {
    return accept && contentTypes.some(type => accept.includes(type));
};

export async function performContentNegotiation(accept) {
    const uri = APP_PAGES_DOC;
    const body = await getDataset(fetch, uri, accept);
    const init = { headers: { "Content-Type": accept } };
    // Return
    return new Response(body, init);
}