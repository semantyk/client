/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `page.jsx`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This file contains the Page component.
 *
 * @created: Nov 30, 2023
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
import "@semantyk/app/page.css";


//* Main
export default function Page(props) {
    // Props
    const { children } = props;
    // Return
    return (
        <div id="Page">
            {children}
        </div>
    );
}