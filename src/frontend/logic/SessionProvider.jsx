/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `SessionProvider.jsx` | `logic`
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
import React from "react";
import {
    SessionProvider as SolidSessionProvider,
    useSession
} from "@inrupt/solid-ui-react";

export default function SessionProvider({ children }) {
    // Hooks
    const { session } = useSession();
    // Logic
    const { sessionId } = session.info;
    // Return
    return (
        <SolidSessionProvider restorePreviousSession sessionId={sessionId}>
            {children}
        </SolidSessionProvider>
    );
}