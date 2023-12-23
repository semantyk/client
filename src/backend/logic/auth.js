/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `auth.js` | `logic`
 * client | Semantyk
 *
 * Created: Dec 04, 2023
 * Modified: Dec 23, 2023
 *
 * Author(s): Semantyk Team
 * Maintainer(s): Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2023. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import {
    CLIENT_WEBID,
    POD_PROVIDER_WEBID
} from "@semantyk/backend/logic/kgm/nodes";

export async function getOptions() {
    // Logic
    const clientId = CLIENT_WEBID;
    const oidcIssuer = POD_PROVIDER_WEBID;
    const redirectUrl = window.location.href;
    // Return
    return {
        authOptions: { clientId },
        oidcIssuer,
        redirectUrl
    };
}