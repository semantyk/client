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
import { CLIENT_ID, POD_URI } from "../../services/app/nodes";

export async function getOptions() {
    return {
        authOptions: { clientId: CLIENT_ID },
        oidcIssuer: POD_URI,
        redirectUrl: window.location.href
    };
}