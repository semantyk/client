/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `index.jsx` | `LogoutButton`
 * client | Semantyk
 *
 * Created: Dec 04, 2023
 * Modified: Apr 27, 2024
 *
 * Author(s): Semantyk Team
 * Maintainer(s): Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

"use client";

//* Imports
import React from "react";
import {
    LogoutButton as SolidLogoutButton,
    useSession
} from "@inrupt/solid-ui-react";
import { Button } from "react-bootstrap";

//* Main
export default function LogoutButton() {
    // Hooks
    const { session } = useSession();
    // Logic
    const { webId } = session.info;
    // Return
    return (<>
        <p>WebID: <strong><code>{webId}</code></strong></p>
        <SolidLogoutButton>
            <Button>Log Out</Button>
        </SolidLogoutButton>
    </>);
}