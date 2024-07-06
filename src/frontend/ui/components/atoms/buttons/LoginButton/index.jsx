/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `index.jsx` | `LoginButton`
 * client | Semantyk
 *
 * This file contains the logic for the login button.
 *
 * Created: Dec 4, 2023
 * Modified: Jul 5, 2024
 *
 * Author: Semantyk Team
 * Maintainer: Daniel Bakas <https://id.danielbakas.com>
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