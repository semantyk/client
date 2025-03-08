/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `Session.jsx` | `logic`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This file contains the `Session` component.
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