/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `contentNegotiation.js`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This file contains functions that perform content negotiation for
 *  a given URI.
 *
 * @created: Dec 23, 2023
 * @modified: Mar 7, 2025
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Semantyk © 2025. All rights reserved.
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