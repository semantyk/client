/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `layout.jsx` | `Footer`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This file contains the layout for the footer.
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