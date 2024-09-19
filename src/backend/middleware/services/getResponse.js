/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getResponse.js`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This file contains a function that retrieves the response particles based on
 * the request headers.
 *
 * @created: Dec 23, 2023
 * @modified: Sep 18,2024
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import { NextResponse } from "next/server";
//* Local Imports
import {
    performContentNegotiation,
    requiresContentNegotiation
} from "@semantyk/backend/middleware/contentNegotiation";

//* Main
export async function getResponse(req) {
    // Logic
    let res = NextResponse.next();
    // Content Negotiation
    // 1. Get Accept Header
    const accept = req.headers.get("accept");
    // 2. Is Content Negotiation Necessary
    if (requiresContentNegotiation(accept))
        // 3. Perform Content Negotiation
        res = await performContentNegotiation(accept);
    // Return
    return res;
}