/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `state.jsx` | `logic`
 * client | Semantyk
 *
 * Created: Dec 04, 2023
 * Modified: Dec 10, 2023
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
import { SessionProvider, useSession } from "@inrupt/solid-ui-react";

export default function StateManager({ children }) {
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