/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `index.jsx` | `AuthButton`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This file contains the logic for the authentication button.
 *
 * @created: Dec 5, 2023
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
//* Local Imports
import { useSession } from "@inrupt/solid-ui-react";
import LogoutButton
    from "@semantyk/frontend/ui/components/atoms/buttons/LogoutButton";
import LoginButton
    from "@semantyk/frontend/ui/components/atoms/buttons/LoginButton";

//* Main
export default function AuthButton() {
    // Hooks
    const { session } = useSession();
    // Logic
    const { isLoggedIn } = session.info;
    // Return
    return !isLoggedIn ? <LoginButton/> : <LogoutButton/>;
}