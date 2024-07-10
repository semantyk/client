/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `Session.jsx` | `logic`
 * client | Semantyk
 *
 * This file contains the `Session` component.
 *
 * Created: Dec 4, 2023
 * Modified: Jul 10, 2024
 *
 * Author: Semantyk Team
 * Maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

"use client";

//* Imports
import React from "react";
import { SessionProvider, useSession } from "@inrupt/solid-ui-react";

export default function Session({ children }) {
    // Hooks
    const { session } = useSession();
    // Logic
    const { sessionId } = session.info;
    // Return
    return (
        <SessionProvider restorePreviousSession sessionId={sessionId}>
            {children}
        </SessionProvider>
    );
}