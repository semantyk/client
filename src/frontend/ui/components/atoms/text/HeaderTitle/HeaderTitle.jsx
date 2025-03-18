/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `index.jsx`
 * @organization: Semantyk
 * @project: Client
 *
 * @created: Jul 9, 2024
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
import usePage from "@semantyk/frontend/hooks/knowledge/usePage";

//* Main
export default function HeaderTitle() {
    // Hooks
    const { name } = usePage();
    // Return
    return name && <h1>{name}</h1>;
}