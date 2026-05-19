/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `Content.layout.jsx`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: Layout wrapper for the Content molecule.
 *
 * @created: Jul 17, 2024
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

//* Main
export default function ContentLayout({ children }) {
    // Return
    return (
        <main id="Content">
            {children}
        </main>
    );
};