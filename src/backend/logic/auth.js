/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `auth.js` | `logic`
 * client | Semantyk
 *
 * This file contains a function that retrieves the options for the Solid
 * auth flow.
 *
 * Created: Dec 4, 2023
 * Modified: Jul 5, 2024
 *
 * Author: Semantyk Team
 * Maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import {
    CLIENT_WEBID,
    POD_PROVIDER_WEBID
} from "@semantyk/backend/logic/kgm/nodes";

//* Main
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