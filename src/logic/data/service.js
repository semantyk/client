/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `service.js` | `data`
 * client | Semantyk
 *
 * Created: Dec 03, 2023
 * Modified: Dec 03, 2023
 *
 * Author(s): Semantyk Team
 * Maintainer(s): Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2023. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Main
import getAppData from "./appData/service";

export default function getData() {
    // Hooks
    const app = getAppData();
    // Return
    return { app };
}