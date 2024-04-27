/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `index.jsx` | `AuthButton`
 * client | Semantyk
 *
 * Created: Dec 05, 2023
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