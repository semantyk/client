/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `loginButton.js` | `molecules`
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
import { useSession } from "@inrupt/solid-ui-react";
//* Local Imports
import LoginButton from "@/components/atoms/loginButton";
import LogoutButton from "@/components/atoms/logoutButton";

//* Main
export default function AuthButton() {
    // Hooks
    const { session } = useSession();
    // Logic
    const { isLoggedIn } = session.info;
    // Return
    return !isLoggedIn ? <LoginButton/> : <LogoutButton/>;
}