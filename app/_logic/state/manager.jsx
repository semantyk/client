/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `manager.jsx`
 * client | Semantyk
 *
 * Created: Dec 04, 2023
 * Modified: Dec 05, 2023
 *
 * Author(s): Semantyk Team
 * Maintainer(s):
 *
 * Copyright © Semantyk 2023. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

"use client";

//* Imports
import React from "react";
import { SessionProvider, useSession } from "@inrupt/solid-ui-react";

function StateManager({ children }) {
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

export default StateManager;