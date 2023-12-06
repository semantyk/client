/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `loginButton.jsx` | `molecules`
 * client | Semantyk
 *
 * Created: Dec 05, 2023
 * Modified: Dec 05, 2023
 *
 * Author(s): Semantyk Team
 * Maintainer(s): Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2023. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

"use client";

//* Imports
import React from "react";
//* Local Imports
import LogoutButton from "@/components/atoms/logoutButton";
import LoginButton from "@/components/atoms/loginButton";
import { useSession } from "@inrupt/solid-ui-react";

//* Main
export default function AuthButton() {
    // Hooks
    const { session } = useSession();
    // Logic
    const { isLoggedIn } = session.info;
    // Return
    return !isLoggedIn ? <LoginButton/> : <LogoutButton/>;
}