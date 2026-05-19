/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `Header.layout.jsx`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This file contains the `HeaderLayout` component.
 *
 * @created: Dec 4, 2023
 * @modified: May 19, 2026
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Semantyk © 2026. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import React from "react";
//* Local Imports
import "@semantyk/frontend/ui/components/molecules/Header/Header.styles.css";

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