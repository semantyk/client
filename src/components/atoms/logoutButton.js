/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `logoutButton.js` | `atoms`
 * client | Semantyk
 *
 * Created: Dec 04, 2023
 * Modified: Dec 04, 2023
 *
 * Author(s): Semantyk Team
 * Maintainer(s): Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2023. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

"use client";

//* Imports
import { LogoutButton as SolidLogoutButton } from "@inrupt/solid-ui-react";
import { Button } from "react-bootstrap";

//* Main
export default function LogoutButton() {
    // Return
    return (<>
        <SolidLogoutButton>
            <Button>Log Out</Button>
        </SolidLogoutButton>
    </>);
}