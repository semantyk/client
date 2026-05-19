/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `Footer.layout.jsx`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This file contains the layout for the footer.
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
import "@semantyk/frontend/ui/components/molecules/Footer/Footer.styles.css";

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