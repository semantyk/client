/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `service.js` | `auth`
 * client | Semantyk
 *
 * Created: Dec 04, 2023
 * Modified: Dec 04, 2023
 *
 * Author(s): Semantyk Team
 * Maintainer(s):
 *
 * Copyright © Semantyk 2023. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import { CLIENT_ID, POD_PROVIDER_URI } from "../../_services/app/nodes";

export async function getOptions() {
    // Logic
    const clientId = CLIENT_ID.value;
    const oidcIssuer = POD_PROVIDER_URI.value;
    const redirectUrl = window.location.href;
    // Return
    return {
        authOptions: { clientId },
        oidcIssuer,
        redirectUrl
    };
}