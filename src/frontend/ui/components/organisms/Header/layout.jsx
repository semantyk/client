/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `layout.jsx` | `Header`
 * client | Semantyk
 *
 * This file contains the `HeaderLayout` component.
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