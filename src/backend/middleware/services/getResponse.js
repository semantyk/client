/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getResponse.js`
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
import { NextResponse } from "next/server";
//* Local Imports
import {
    performContentNegotiation,
    requiresContentNegotiation
} from "@/backend/middleware/contentNegotiation";

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