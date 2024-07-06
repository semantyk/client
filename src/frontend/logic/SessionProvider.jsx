/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `SessionProvider.jsx` | `logic`
 * client | Semantyk
 *
 * This file contains the `SessionProvider` component.
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