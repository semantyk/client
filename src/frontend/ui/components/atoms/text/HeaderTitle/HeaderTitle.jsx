/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `HeaderTitle.jsx`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: Atom component rendering the page header title.
 *
 * @created: Jul 9, 2024
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
import usePage from "@semantyk/frontend/hooks/knowledge/usePage";

//* Main
export default function HeaderTitle() {
    // Hooks
    const { name } = usePage();
    // Return
    return name && <h1>{name}</h1>;
}