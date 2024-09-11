/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `layout.jsx` | `Footer`
 * client | Semantyk
 *
 * This file contains the layout for the footer.
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

//* Imports
import React from "react";
//* Local Imports
import "@semantyk/frontend/ui/components/molecules/Footer/index.css";

//* Main
export default function FooterLayout({ children }) {
    const position = "fixed-bottom";
    // Return
    return (
        <footer id="Footer" className={`${position} text-center`}>
            {children}
        </footer>
    );
}