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
import { SessionProvider } from "@inrupt/solid-ui-react";

function StateManager({ children }) {
    // Return
    return (
        <SessionProvider restorePreviousSession>
            {children}
        </SessionProvider>
    );
}

export default StateManager;