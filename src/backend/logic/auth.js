/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `auth.js` | `logic`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This file contains a function that retrieves the options for the Solid
 * auth flow.
 *
 * @created: Dec 4, 2023
 * @modified: Mar 7, 2025
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Semantyk © 2025. All rights reserved.
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