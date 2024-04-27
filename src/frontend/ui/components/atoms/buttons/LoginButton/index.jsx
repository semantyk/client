/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `index.jsx` | `LoginButton`
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
import React, { useEffect, useState } from "react";
import { LoginButton as SolidLoginButton } from "@inrupt/solid-ui-react";
import { Button } from "react-bootstrap";
//* Local imports
import { getOptions } from "@semantyk/backend/logic/auth";


//* Main
export default function LoginButton() {
    // Hooks
    const [options, setOptions] = useState({});
    // Logic
    useEffect(() => {
        getOptions().then(setOptions);
    }, []);
    // Return
    return (
        <SolidLoginButton {...options}>
            <Button>Log In</Button>
        </SolidLoginButton>
    );
}