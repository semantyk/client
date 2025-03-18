/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `index.jsx` | `LoginButton`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This file contains the logic for the login button.
 *
 * @created: Dec 4, 2023
 * @modified: Mar 7, 2025
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Semantyk © 2025. All rights reserved.
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