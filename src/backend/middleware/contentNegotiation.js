/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `contentNegotiation.js`
 * client | Semantyk
 *
 * This file contains functions that perform content negotiation for a given
 * URI.
 *
 * Created: Dec 23, 2023
 * Modified: Jul 5, 2024
 *
 * Author: Semantyk Team
 * Maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import { APP_PAGES_DOC } from "@semantyk/backend/logic/kgm/nodes";
import { getDataset } from "@semantyk/backend/api/solid/services/getDataset";

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