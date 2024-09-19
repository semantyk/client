/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `index.jsx` | `LogoutButton`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This file contains the logic for the logout button.
 *
 * @created: Dec 4, 2023
 * @modified: Sep 18,2024
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Copyright © Semantyk 2024. All rights reserved.
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