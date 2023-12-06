/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `layout.jsx`
 * client | Semantyk
 *
 * Created: Dec 04, 2023
 * Modified: Dec 05, 2023
 *
 * Author(s): Semantyk Team
 * Maintainer(s): Daniel Bakas Amuchástegui <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2023. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import React from "react";

//* Main
export default function FooterLayout({ children }) {
    const position = "sticky-bottom";
    // Return
    return (
        <footer id="Footer" className={`${position} text-center`}>
            {children}
        </footer>
    );
}