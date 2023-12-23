/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `layout.jsx` | `Header`
 * client | Semantyk
 *
 * Created: Dec 04, 2023
 * Modified: Dec 22, 2023
 *
 * Author(s): Semantyk Team
 * Maintainer(s): Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2023. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import React from "react";
//* Local Imports
import "@semantyk/frontend/ui/components/organisms/Header/index.css";

//* Main
export default function HeaderLayout({ children }) {
    const position = "sticky-top";
    // Return
    return (
        <header id="Header" className={`${position}`}>
            {children}
        </header>
    );
}